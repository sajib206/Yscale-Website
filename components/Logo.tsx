import React from 'react';

export const Logo: React.FC = () => {
  return (
    <a href="/" className="inline-block focus:outline-none focus:opacity-80 transition-opacity">
      <img 
        src="logo.png" 
        alt="Yscale Logo" 
        className="h-[23px] w-auto object-contain select-none"
      />
    </a>
  );
};