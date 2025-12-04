import React, { useEffect, useRef } from 'react';

export const HeaderBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // State to track mouse position with smoothing
  const mouseRef = useRef({ 
    x: 0, 
    y: 0, 
    targetX: 0, 
    targetY: 0 
  });

  useEffect(() => {
    // Track mouse coordinates relative to the viewport
    const handleMouseMove = (e: MouseEvent) => {
      // We use client coordinates since the canvas is fixed/absolute relative to the hero
      // But to be precise relative to the canvas container:
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current.targetX = e.clientX - rect.left;
        mouseRef.current.targetY = e.clientY - rect.top;
      }
    };

    // Set initial position to center
    if (typeof window !== 'undefined') {
       mouseRef.current.targetX = window.innerWidth / 2;
       mouseRef.current.targetY = window.innerHeight / 2;
       mouseRef.current.x = window.innerWidth / 2;
       mouseRef.current.y = window.innerHeight / 2;
    }

    window.addEventListener('mousemove', handleMouseMove);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const draw = () => {
      if (!canvas.parentElement) return;
      
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      // Handle resizing
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
      }

      const width = rect.width;
      const height = rect.height;

      // Smooth mouse movement (Linear Interpolation)
      // This creates the "delayed/fluid" feel seen in the video
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);
      
      // Grid configuration
      const gap = 30; 
      const cols = Math.floor(width / gap) + 4; // Extra cols/rows to cover edges during distortion
      const rows = Math.floor(height / gap) + 4;
      
      // Center the grid
      const xOffset = (width - (cols - 1) * gap) / 2;
      const yOffset = (height - (rows - 1) * gap) / 2;

      ctx.fillStyle = '#64748b'; // Slate 500

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = i * gap + xOffset;
          const originY = j * gap + yOffset;

          // 1. Mouse Interaction (Bulge/Lens Effect)
          const mouseDx = originX - mouseRef.current.x;
          const mouseDy = originY - mouseRef.current.y;
          const distMouse = Math.sqrt(mouseDx*mouseDx + mouseDy*mouseDy);
          
          const magnetRadius = 500; // Size of the interactive area
          const magnetStrength = 0.6; // Intensity of distortion
          
          let renderX = originX;
          let renderY = originY;
          let scale = 1;

          if (distMouse < magnetRadius) {
            // Calculate repulsion force
            // Uses a smooth curve (cosine interpolation feel) for natural deformation
            const force = Math.pow((1 - distMouse / magnetRadius), 2) * magnetStrength;
            
            // Push points AWAY from cursor to create "Magnifying Glass" bulge
            renderX += mouseDx * force;
            renderY += mouseDy * force;
            
            // Slightly scale dots up in the bulge for 3D depth
            scale = 1 + force * 0.6;
          }

          // 2. Idle Animation (Subtle floating)
          // Adds a tiny bit of life even when mouse is still
          renderY += Math.sin(originX * 0.003 + time) * 2;

          // 3. Global Vignette Mask
          // Fades dots out towards edges to keep text readable
          const centerX = width / 2;
          const centerY = height / 2;
          const distCenter = Math.hypot(renderX - centerX, renderY - centerY);
          const visibleRadius = Math.max(width, height) * 0.6;
          
          let alpha = 1 - Math.pow(distCenter / visibleRadius, 2.5);
          alpha = Math.max(0, Math.min(1, alpha));
          
          if (alpha > 0.01) {
            ctx.globalAlpha = alpha * 0.35; // Max opacity
            ctx.beginPath();
            ctx.arc(renderX, renderY, 1.5 * scale, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      time += 0.02;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
       <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};