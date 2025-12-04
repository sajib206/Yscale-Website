import React from 'react';
import { Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center relative z-20">
      <Logo />
      
      <a 
        href="mailto:hello@yscale.studio" 
        className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm font-medium"
      >
        <Mail size={18} strokeWidth={1.5} />
        <span>hello@yscale.studio</span>
      </a>
    </header>
  );
};