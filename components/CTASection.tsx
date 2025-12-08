
import React from 'react';
import { Clock, Video } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-1.5 py-1 mb-8 shadow-sm">
           <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-bold uppercase tracking-wide">Free</span>
           <span className="text-sm text-gray-600 font-medium px-2">30 min discussion</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl md:text-6xl text-gray-900 text-center mb-16 leading-tight">
          Have any project idea in your mind!
        </h2>

        {/* Mock Calendly Card */}
        <a 
          href="https://calendly.com/mahfuzulnabil/discussion-with-nabil"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[680px] bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200 overflow-hidden relative group transition-transform hover:-translate-y-1"
        >
          {/* Ribbon */}
          <div className="absolute top-0 right-0">
             <div className="w-32 h-32 absolute top-0 right-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-[150%] h-8 bg-gray-600 text-white text-[9px] font-bold flex items-center justify-center uppercase tracking-wider transform rotate-45 translate-x-[28%] translate-y-[100%] shadow-md">
                   Powered by Calendly
                </div>
             </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col items-center border-b border-gray-100">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 shadow-sm border border-gray-100">
              <img 
                src="https://avatars.githubusercontent.com/u/20656638?v=4" // Using a generic placeholder or the user's github if available, falling back to a professional placeholder
                onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Mahfuzul+Nabil&background=random";
                }}
                alt="Mahfuzul Islam Nabil" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name Info */}
            <div className="text-center mb-8">
              <h4 className="text-gray-500 font-medium text-sm mb-1">Mahfuzul Islam Nabil</h4>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Discussion with Nabil</h3>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-gray-600 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-gray-400" />
                  <span>30 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video size={18} className="text-gray-400" />
                  <span>Web conferencing details provided upon confirmation.</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-center max-w-md text-gray-600 leading-relaxed mb-4">
              <p className="mb-2">
                I work with brands and founders to design products and websites that feel clear, modern, and easy to use.
              </p>
              <p>
                On this call, you can walk me through your idea, your current design, or the problem you're trying to solve.
              </p>
            </div>
            
            <span className="text-brand-orange font-bold text-sm cursor-pointer hover:underline">SHOW MORE</span>
          </div>

          {/* Calendar Section */}
          <div className="p-8 bg-white">
            <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Select a Date & Time</h4>
            
            <div className="flex items-center justify-center gap-8 mb-6 text-gray-600">
               <button className="p-1 hover:bg-gray-100 rounded-full"><span className="text-xl">‹</span></button>
               <span className="font-medium">December 2025</span>
               <button className="p-1 hover:bg-gray-100 rounded-full bg-blue-50 text-blue-600"><span className="text-xl">›</span></button>
            </div>

            {/* Calendar Grid Mock */}
            <div className="max-w-sm mx-auto">
               <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-400 mb-2">
                  <div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div><div>SUN</div>
               </div>
               <div className="grid grid-cols-7 gap-y-2 text-center text-sm font-medium text-gray-600">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-50 hover:text-blue-600 cursor-pointer">1</div>
                  <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-50 hover:text-blue-600 cursor-pointer">2</div>
                  <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-50 hover:text-blue-600 cursor-pointer">3</div>
                  <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-50 hover:text-blue-600 cursor-pointer">4</div>
                  <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-50 hover:text-blue-600 cursor-pointer">5</div>
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold relative cursor-pointer">
                    6
                    <div className="absolute -bottom-1 w-1 h-1 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold cursor-pointer">7</div>
               </div>
            </div>
          </div>

        </a>

      </div>
    </section>
  );
};
