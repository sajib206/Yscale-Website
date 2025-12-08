import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-8">
          <a href="#" className="text-lg font-medium text-gray-900 hover:text-brand-orange transition-colors">Linkedin</a>
          <a href="#" className="text-lg font-medium text-gray-900 hover:text-brand-orange transition-colors">Instagram</a>
          <a href="#" className="text-lg font-medium text-gray-900 hover:text-brand-orange transition-colors">Dribbble</a>
          <a href="#" className="text-lg font-medium text-gray-900 hover:text-brand-orange transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
};