import React from 'react';

export const Logo: React.FC = () => {
  return (
    <a href="/" className="inline-block focus:outline-none focus:opacity-80 transition-opacity">
      <img 
        src="logo.png?v=5" 
        alt="Yscale Logo" 
        width={81}
        height={23}
        className="h-[23px] w-auto object-contain select-none"
      />
    </a>
  );
};