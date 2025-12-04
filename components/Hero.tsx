import React from 'react';
import { ClientLogos } from './ClientLogos';
import { HeaderBackground } from './HeaderBackground';

export const Hero: React.FC = () => {
  return (
    <main className="relative w-full flex flex-col items-center pt-16 pb-24 px-4 overflow-hidden min-h-[90vh]">
      {/* Background Animation */}
      <HeaderBackground />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        
        {/* Updated "Trusted By" Badge - Simplified */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-full px-5 py-2 cursor-default hover:bg-white hover:border-green-200 hover:shadow-md transition-all duration-300 select-none">
          <span className="text-sm text-gray-700 font-medium">
            Yscale Trusted by 100+ startups
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-gray-900 tracking-tight mb-8">
          Premium Design Studio<br />
          <span className="italic font-normal">for</span> SaaS & Startups
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          We help startups and brands build websites, apps and identities that people love to use. 
          At Yscale, we make brands stand out and help them connect better with their audience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a 
            href="https://dribbble.com/yscalestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-900 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm flex items-center justify-center"
          >
            See Portfolio
          </a>
          <a 
            href="https://calendly.com/mahfuzulnabil/discussion-with-nabil"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-orange text-white font-medium rounded-lg hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20 flex items-center justify-center"
          >
            Book a Call
          </a>
        </div>

        {/* Logos */}
        <ClientLogos />
      </div>
    </main>
  );
};