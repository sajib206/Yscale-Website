import React from 'react';

// --- Types & Data ---

type TemplateVariant = 'zentro' | 'buildai' | 'leed' | 'pricing' | 'agent' | 'aixpo' | 'speedai' | 'voicai';

interface Template {
  id: string;
  variant: TemplateVariant;
}

// Row 1 Data (Left to Right animation requested -> this implies moving towards right? 
// Usually "Left" scroll means items move to the left. 
// "Right" scroll means items move to the right.
// I will populate both rows.

const row1: Template[] = [
  { id: '1', variant: 'zentro' },
  { id: '2', variant: 'buildai' },
  { id: '3', variant: 'leed' },
  { id: '4', variant: 'pricing' },
];

const row2: Template[] = [
  { id: '5', variant: 'agent' },
  { id: '6', variant: 'aixpo' },
  { id: '7', variant: 'speedai' },
  { id: '8', variant: 'voicai' },
];

// --- Mini Website Mockups (CSS only) ---

const MiniBrowser: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`w-[400px] h-[260px] md:w-[500px] md:h-[320px] rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col shrink-0 relative hover:shadow-xl transition-shadow duration-300 ${className}`}>
    {/* Browser Bar */}
    <div className="h-6 bg-white/10 backdrop-blur-md flex items-center px-3 space-x-1.5 absolute top-0 w-full z-10">
      <div className="w-2 h-2 rounded-full bg-red-400/80"></div>
      <div className="w-2 h-2 rounded-full bg-yellow-400/80"></div>
      <div className="w-2 h-2 rounded-full bg-green-400/80"></div>
    </div>
    {children}
  </div>
);

const TemplateCard: React.FC<{ variant: TemplateVariant }> = ({ variant }) => {
  switch (variant) {
    case 'zentro':
      return (
        <MiniBrowser className="bg-gradient-to-br from-[#E0F2F1] to-[#B2DFDB]">
          <div className="flex flex-col items-center justify-center h-full text-center p-8 pt-10">
            <div className="bg-teal-600/10 px-3 py-1 rounded-full text-teal-800 text-xs font-bold mb-4 uppercase tracking-widest">Zentro AI Agent</div>
            <h3 className="text-3xl font-serif text-teal-900 mb-2">AI-Driven Focus.</h3>
            <h3 className="text-3xl font-serif text-teal-900 mb-4">Zero Interruptions.</h3>
            <div className="flex gap-2 mt-2">
              <div className="h-8 w-24 bg-teal-600 rounded-md"></div>
              <div className="h-8 w-24 border border-teal-600 rounded-md"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-500/10 rounded-tl-full"></div>
          </div>
        </MiniBrowser>
      );
    case 'buildai':
      return (
        <MiniBrowser className="bg-gray-900 relative">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-gray-900 to-gray-900"></div>
           <div className="flex flex-col items-center justify-center h-full text-center p-8 pt-10 relative z-10">
             <div className="text-white font-medium mb-3 flex items-center gap-2"><div className="w-4 h-4 bg-white rounded-full"></div>BuildAI</div>
             <h3 className="text-2xl md:text-3xl text-white font-light tracking-wide mb-4">
               Build Apps & Websites in <br/><span className="font-bold text-purple-400">Minutes</span> by Chatting with AI
             </h3>
             <div className="w-full max-w-xs h-20 bg-gray-800/80 rounded-lg border border-gray-700 mt-2"></div>
           </div>
           {/* Decorative lines */}
           <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
        </MiniBrowser>
      );
    case 'leed':
      return (
        <MiniBrowser className="bg-indigo-50">
          <div className="flex flex-col items-center h-full text-center p-8 pt-12">
            <div className="text-indigo-900 font-bold text-xl mb-4 self-start ml-4">leed</div>
            <div className="flex w-full gap-4">
               <div className="flex-1 text-left pl-4">
                 <h3 className="text-2xl font-bold text-gray-900 mb-2">The #1 AI Notetaker<br/>For Your Meetings</h3>
                 <div className="h-8 w-32 bg-gray-900 rounded-full mt-4"></div>
               </div>
               <div className="w-40 h-32 bg-indigo-200/50 rounded-lg border border-indigo-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-2 left-2 w-full h-2 bg-white/60 rounded"></div>
                  <div className="absolute top-5 left-2 w-2/3 h-2 bg-white/60 rounded"></div>
               </div>
            </div>
          </div>
        </MiniBrowser>
      );
    case 'pricing':
      return (
        <MiniBrowser className="bg-black">
          <div className="flex flex-col h-full p-8 pt-12">
            <h3 className="text-2xl text-white font-bold mb-1">Pricing that</h3>
            <h3 className="text-2xl text-white font-bold mb-6">works for you</h3>
            <div className="flex gap-4">
               <div className="flex-1 bg-gray-900 rounded border border-gray-800 p-4">
                 <div className="text-orange-500 font-bold text-xl">$0</div>
                 <div className="h-2 w-12 bg-gray-700 rounded mt-2"></div>
                 <div className="h-2 w-full bg-gray-700 rounded mt-4"></div>
               </div>
               <div className="flex-1 bg-gray-900 rounded border border-gray-800 p-4 opacity-50">
                 <div className="text-white font-bold text-xl">$199</div>
                 <div className="h-2 w-12 bg-gray-700 rounded mt-2"></div>
               </div>
            </div>
          </div>
        </MiniBrowser>
      );
    case 'agent':
      return (
        <MiniBrowser className="bg-[#0F172A]">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="flex flex-col h-full p-8 pt-12 relative z-10">
              <div className="text-cyan-400 text-xs font-bold uppercase mb-2">10x Faster Project Delivery</div>
              <h3 className="text-3xl text-white font-medium leading-tight mb-4">Your AI Agent That Manages Projects</h3>
              <div className="flex gap-2 mt-auto">
                <div className="px-3 py-1 rounded bg-gray-800 border border-gray-700 text-gray-400 text-xs">Automation</div>
                <div className="px-3 py-1 rounded bg-gray-800 border border-gray-700 text-gray-400 text-xs">Mindmapping</div>
              </div>
           </div>
        </MiniBrowser>
      );
    case 'aixpo':
      return (
        <MiniBrowser className="bg-white">
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
           <div className="flex flex-col items-center justify-center h-full text-center p-8 pt-12 relative z-10">
              <div className="text-orange-500 font-bold mb-4">aixpo</div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Build AI Agents That Work</h3>
              <h3 className="text-2xl font-black text-orange-500 mb-6">Like Your Smartest Teammate</h3>
              <div className="flex gap-3">
                 <div className="h-8 w-28 bg-orange-500 rounded shadow-lg shadow-orange-200"></div>
                 <div className="h-8 w-28 bg-white border border-gray-200 rounded"></div>
              </div>
           </div>
        </MiniBrowser>
      );
    case 'speedai':
      return (
        <MiniBrowser className="bg-black overflow-hidden">
           <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-purple-900 to-transparent opacity-50"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-purple-600 blur-[80px] opacity-40"></div>
           <div className="flex flex-col items-center justify-center h-full text-center p-8 pt-12 relative z-10">
              <div className="flex items-center gap-2 text-white font-bold mb-6"><div className="w-3 h-3 bg-purple-500 rotate-45"></div>SpeedAI</div>
              <h3 className="text-3xl text-white font-bold mb-2">Create high-converting</h3>
              <h3 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold italic mb-6">marketing content with AI.</h3>
              <div className="w-64 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center px-4 text-gray-400 text-sm">Generating ideas...</div>
           </div>
        </MiniBrowser>
      );
    case 'voicai':
      return (
        <MiniBrowser className="bg-blue-50">
           <div className="flex flex-col items-center justify-center h-full text-center p-8 pt-12">
              <div className="text-blue-600 font-bold mb-4 flex items-center gap-1"><span className="text-xl">●</span> VoicAI</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Real-time AI Voice Translation</h3>
              <p className="text-gray-500 text-sm mb-6 max-w-xs">Experience real-time AI voice translation that works seamlessly.</p>
              <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">🇺🇸</div>
                 <div className="text-gray-300">➜</div>
                 <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xl">🇪🇸</div>
              </div>
           </div>
        </MiniBrowser>
      );
  }
};

// --- Slider Component ---

export const TemplateSlider: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-24 border-t border-b border-gray-50 overflow-hidden">
      
      {/* Row 1: Left to Right (Reverse direction of standard Marquee) */}
      <div className="flex overflow-hidden relative w-full mb-8 md:mb-12">
        <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
          {/* Double the content for seamless loop */}
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="px-4 md:px-6">
              <TemplateCard variant={item.variant} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left (Standard Marquee direction) */}
      <div className="flex overflow-hidden relative w-full">
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
          {/* Double the content for seamless loop */}
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="px-4 md:px-6">
              <TemplateCard variant={item.variant} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
