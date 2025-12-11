
import React from 'react';

// --- Types & Data ---

type TemplateVariant = 'image-slide';

interface Template {
  id: string;
  variant: TemplateVariant;
  imageSrc: string;
}

// Row 1: Left to Right
// Maps to: image.png, image (1).png ... image (5).png
const row1: Template[] = [
  { id: '1', variant: 'image-slide', imageSrc: '/image.png' },
  { id: '2', variant: 'image-slide', imageSrc: '/image (1).png' },
  { id: '3', variant: 'image-slide', imageSrc: '/image (2).png' },
  { id: '4', variant: 'image-slide', imageSrc: '/image (3).png' },
  { id: '5', variant: 'image-slide', imageSrc: '/image (4).png' },
  { id: '6', variant: 'image-slide', imageSrc: '/image (5).png' },
];

// Row 2: Right to Left
// Maps to: image (6).png ... image (11).png
const row2: Template[] = [
  { id: '7', variant: 'image-slide', imageSrc: '/image (6).png' },
  { id: '8', variant: 'image-slide', imageSrc: '/image (7).png' },
  { id: '9', variant: 'image-slide', imageSrc: '/image (8).png' },
  { id: '10', variant: 'image-slide', imageSrc: '/image (9).png' },
  { id: '11', variant: 'image-slide', imageSrc: '/image (10).png' },
  { id: '12', variant: 'image-slide', imageSrc: '/image (11).png' },
];

// --- Components ---

const TemplateCard: React.FC<{ template: Template }> = ({ template }) => {
  // Helper to safely encode path for browser (handles spaces etc)
  // We strip the leading slash for encodeURIComponent, then add it back
  const safeSrc = template.imageSrc.split('/').map(part => encodeURIComponent(part)).join('/').replace('%2F', '/');

  return (
    <div className="w-[400px] h-[260px] md:w-[500px] md:h-[320px] rounded-xl overflow-hidden shadow-lg border border-gray-100 shrink-0 relative hover:shadow-xl transition-shadow duration-300 bg-gray-50 group">
      <img 
        src={`${safeSrc}?v=${Date.now()}`} // Unique version to force reload
        alt="Portfolio Item" 
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          // If local image fails, try generic placeholder to keep UI clean
          // and log expectation for debugging
          console.warn(`Failed to load: ${template.imageSrc}`);
          const target = e.target as HTMLImageElement;
          target.onerror = null; // prevent loop
          target.src = `https://placehold.co/500x320/f3f4f6/9ca3af?text=Missing:+${template.imageSrc.replace('/', '')}`;
        }}
      />
    </div>
  );
};

// --- Slider Component ---

export const TemplateSlider: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-24 border-t border-b border-gray-50 overflow-hidden">
      
      {/* Row 1: Left to Right */}
      <div className="flex overflow-hidden relative w-full mb-8 md:mb-12">
        <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
          {/* Loop content - duplicated for seamless scroll */}
          {[...row1, ...row1].map((item, idx) => (
            <div key={`r1-${item.id}-${idx}`} className="px-4 md:px-6">
              <TemplateCard template={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="flex overflow-hidden relative w-full">
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
          {/* Loop content - duplicated for seamless scroll */}
          {[...row2, ...row2].map((item, idx) => (
            <div key={`r2-${item.id}-${idx}`} className="px-4 md:px-6">
              <TemplateCard template={item} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
