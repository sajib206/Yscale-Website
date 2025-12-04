import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-[1px] select-none cursor-pointer h-[23px]">
      {/* Custom Y Icon */}
      <div className="h-full flex items-center justify-center">
        <svg 
            width="19" 
            height="23" 
            viewBox="0 0 82 76" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
        >
            <defs>
                <linearGradient id="shine" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                   <stop offset="0.2" stopColor="white" stopOpacity="0.0"/>
                   <stop offset="0.5" stopColor="white" stopOpacity="0.3"/>
                   <stop offset="0.8" stopColor="white" stopOpacity="0.0"/>
                </linearGradient>
            </defs>
            
            {/* Main Y Shape - Orange */}
            {/* 
               Path Logic (82x76 coordinate space):
               Outer Left: (0,0) -> (31,46) (Start of stem left)
               Stem Left: (31,46) -> (31,76)
               Stem Bottom: (31,76) -> (51,76)
               Stem Right: (51,76) -> (51,46)
               Outer Right: (51,46) -> (82,0)
               Top Right Edge: (82,0) -> (60,0)
               Inner Right V: (60,0) -> (41,32)
               Inner Left V: (41,32) -> (22,0)
               Top Left Edge: (22,0) -> (0,0)
            */}
            <path 
                d="M0 0 L22 0 L41 32 L60 0 L82 0 L51 46 V76 H31 V46 L0 0Z" 
                fill="#F97316"
            />
            
            {/* Left Arm Shine Overlay */}
            <path 
                d="M0 0 L22 0 L41 32 L31 46 Z" 
                fill="url(#shine)" 
                style={{ mixBlendMode: 'overlay' }}
            />
        </svg>
      </div>
      
      {/* Text 'scale' - Sized to match 23px height approx */}
      <span className="font-sans font-bold text-[24px] text-black leading-none tracking-tighter relative -top-[1px]">
        scale
      </span>
    </div>
  );
};