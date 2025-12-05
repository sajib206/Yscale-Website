import React from 'react';

// Reusable wrapper for consistent styling: Grayscale by default, color on hover
const LogoWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-2.5 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default group">
    {children}
  </div>
);

// --- Individual Logo Components ---

const StudioBookingsLogo = () => (
  <LogoWrapper>
    <div className="w-8 h-8 rounded-full bg-[#00AEEF] flex items-center justify-center text-white text-xs font-bold leading-none shrink-0 group-hover:scale-110 transition-transform">SB</div>
    <span className="font-sans font-semibold text-lg text-[#4CAF50] tracking-tight">StudioBookings</span>
  </LogoWrapper>
);

const GryphonLogo = () => (
  <LogoWrapper>
    <span className="font-sans font-extrabold text-xl tracking-[0.15em] text-black">GRYPHON&reg;</span>
  </LogoWrapper>
);

const PassportLogo = () => (
  <LogoWrapper>
    <div className="w-7 h-7 bg-[#2E3192] rounded-tl-xl rounded-br-xl flex items-center justify-center shrink-0">
        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
    </div>
    <span className="font-sans font-bold text-lg text-[#2E3192] tracking-wide">PASSPORT</span>
  </LogoWrapper>
);

const ErtCreditLogo = () => (
  <LogoWrapper>
    <span className="font-sans font-bold text-xl text-black tracking-tight">ert.credit</span>
  </LogoWrapper>
);

const RecordedRidesLogo = () => (
  <LogoWrapper>
    <div className="flex items-center font-black text-lg italic tracking-tighter transform -skew-x-6">
      <span className="text-[#00AEEF]" style={{textShadow: '1px 1px 0 rgba(0,0,0,0.1)'}}>RECORDED</span>
      <span className="text-[#FFC107] ml-0.5" style={{textShadow: '1px 1px 0 rgba(0,0,0,0.1)'}}>RIDES</span>
    </div>
  </LogoWrapper>
);

const SeniorsHealthLogo = () => (
  <LogoWrapper>
    <div className="relative w-6 h-7 shrink-0">
        <svg viewBox="0 0 24 24" fill="#10B981" className="w-full h-full">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16v-4H6v-2h4V7h2v4h4v2h-4v4h-2z"/>
        </svg>
    </div>
    <span className="font-sans font-semibold text-lg text-[#064E3B] tracking-tight">SeniorsHealth</span>
  </LogoWrapper>
);

const WellbeneLogo = () => (
  <LogoWrapper>
    <span className="font-sans font-medium text-2xl text-[#FF7043] tracking-tight">w&middot;ellbene</span>
  </LogoWrapper>
);

const ConsoleLogo = () => (
  <LogoWrapper>
    <div className="w-6 h-6 rounded-full border-[3.5px] border-t-[#8B5CF6] border-r-[#8B5CF6] border-b-[#EC4899] border-l-[#EC4899] rotate-45 shrink-0"></div>
    <span className="font-sans font-bold text-lg text-black">Console</span>
  </LogoWrapper>
);

const HyveLogo = () => (
  <LogoWrapper>
    <div className="w-7 h-7 bg-[#6366F1] rounded-md grid grid-cols-2 gap-[2px] p-[3px] shrink-0">
        <div className="bg-white/90 rounded-[1px]"></div>
        <div className="bg-[#A5B4FC] rounded-[1px]"></div>
        <div className="bg-[#4338CA] rounded-[1px]"></div>
        <div className="bg-white/90 rounded-[1px]"></div>
    </div>
    <span className="font-sans font-bold text-xl text-[#6366F1] tracking-[0.15em] ml-1">HYVE</span>
  </LogoWrapper>
);

const HelpAHeroLogo = () => (
  <LogoWrapper>
    <div className="flex h-7 shrink-0 items-center">
        <div className="w-2 h-full bg-[#F59E0B] rounded-l-sm"></div>
        <div className="w-2.5 h-full bg-transparent relative mx-[1px]">
             <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-800 -translate-y-1/2 transform skew-y-12"></div>
        </div>
        <div className="w-2 h-full bg-[#3B82F6] rounded-r-sm"></div>
    </div>
    <span className="font-sans font-black text-lg text-gray-900 uppercase ml-1.5 leading-none">HELP A HERO</span>
  </LogoWrapper>
);

export const ClientLogos: React.FC = () => {
  return (
    <div className="mt-20 w-full max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-center mb-12">
        <span className="text-gray-500 text-sm md:text-base font-medium tracking-wide text-center">
            Over 100+ brands trust stunning experiences with Yscale.
        </span>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16">
        <StudioBookingsLogo />
        <GryphonLogo />
        <PassportLogo />
        <ErtCreditLogo />
        <RecordedRidesLogo />
        <SeniorsHealthLogo />
        <WellbeneLogo />
        <ConsoleLogo />
        <HyveLogo />
        <HelpAHeroLogo />
      </div>
    </div>
  );
};