
import React from 'react';

// --- Custom Illustrations ---

const KickoffIllustration = () => (
  <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-auto">
    {/* Node 1 */}
    <rect x="45" y="25" width="45" height="25" rx="2" fill="#FFE4E1" stroke="#E14D2A" strokeWidth="2" />
    <line x1="50" y1="33" x2="80" y2="33" stroke="#E14D2A" strokeWidth="2" strokeLinecap="round"/>
    <line x1="50" y1="41" x2="70" y2="41" stroke="#E14D2A" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Node 2 (Circle) */}
    <circle cx="115" cy="37.5" r="10" fill="#E14D2A" />

    {/* Node 3 */}
    <rect x="105" y="65" width="45" height="25" rx="2" fill="#FFE4E1" stroke="#8B2D1B" strokeWidth="2" />
    <line x1="110" y1="73" x2="140" y2="73" stroke="#8B2D1B" strokeWidth="2" strokeLinecap="round"/>
    <line x1="110" y1="81" x2="130" y2="81" stroke="#8B2D1B" strokeWidth="2" strokeLinecap="round"/>

    {/* Arrows */}
    <path d="M90 37.5H103" stroke="#333" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
    <path d="M115 47.5V63" stroke="#333" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
    
    {/* Triangle/Decoration */}
    <path d="M75 80L85 65L95 80H75Z" fill="#E14D2A" />
    
    <defs>
      <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
        <polygon points="0 0, 6 2, 0 4" fill="#333" />
      </marker>
    </defs>
  </svg>
);

const DesignIllustration = () => (
  <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-auto">
    {/* Phone 1 */}
    <rect x="50" y="20" width="30" height="50" rx="3" fill="#DCFCE7" stroke="#15803D" strokeWidth="2" />
    <rect x="54" y="25" width="22" height="20" rx="1" fill="#15803D" fillOpacity="0.2" />
    <line x1="54" y1="50" x2="76" y2="50" stroke="#15803D" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="54" y1="55" x2="70" y2="55" stroke="#15803D" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="54" y1="60" x2="65" y2="60" stroke="#15803D" strokeWidth="1.5" strokeLinecap="round"/>

    {/* Phone 2 */}
    <rect x="90" y="20" width="30" height="40" rx="3" fill="#DCFCE7" stroke="#15803D" strokeWidth="2" />
    <rect x="94" y="25" width="22" height="15" rx="1" fill="#15803D" fillOpacity="0.2" />
    <line x1="94" y1="45" x2="116" y2="45" stroke="#15803D" strokeWidth="1.5" strokeLinecap="round"/>

    {/* Stars/Sparkles */}
    <path d="M75 75L78 82L85 85L78 88L75 95L72 88L65 85L72 82L75 75Z" fill="#DCFCE7" stroke="#15803D" strokeWidth="1.5"/>
    <path d="M125 50L127 53L130 54L127 55L125 58L123 55L120 54L123 53L125 50Z" fill="#DCFCE7" stroke="#15803D" strokeWidth="1.5"/>
    <path d="M100 20L102 23L105 24L102 25L100 28L98 25L95 24L98 23L100 20Z" fill="white" stroke="#15803D" strokeWidth="1.5"/>

    {/* Cursor 1 */}
    <path d="M40 40L50 43L43 45L40 40Z" fill="#15803D" />
    
    {/* Cursor 2 (Green filled) */}
    <path d="M110 70L125 75L115 78L110 70Z" fill="#00C853" stroke="white" strokeWidth="1" />
    
    {/* Floating element */}
    <rect x="100" y="70" width="30" height="15" rx="2" fill="#15803D" stroke="#064E3B" strokeWidth="2" />
    <line x1="105" y1="77" x2="125" y2="77" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LaunchIllustration = () => (
  <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-auto">
    {/* Atom Core */}
    <circle cx="80" cy="50" r="8" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2" />
    <circle cx="80" cy="50" r="3" fill="#1E40AF" />

    {/* Orbit 1 */}
    <ellipse cx="80" cy="50" rx="30" ry="10" transform="rotate(-45 80 50)" stroke="#1E40AF" strokeWidth="2" fill="none" />
    <circle cx="95" cy="35" r="3" fill="#1E40AF" /> {/* Electron */}

    {/* Orbit 2 */}
    <ellipse cx="80" cy="50" rx="30" ry="10" transform="rotate(45 80 50)" stroke="#1E40AF" strokeWidth="2" fill="none" />
    <circle cx="65" cy="35" r="3" fill="#1E40AF" /> {/* Electron */}

    {/* Orbit 3 (Horizontal) */}
    <ellipse cx="80" cy="50" rx="35" ry="8" stroke="#1E40AF" strokeWidth="2" fill="none" />
    
    {/* Decorative Elements */}
    <path d="M50 40L55 35" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round"/>
    <path d="M110 60L115 65" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round"/>
    
    <rect x="105" y="40" width="8" height="8" transform="rotate(20)" fill="#1E3A8A" />
    <path d="M60 70L65 65" stroke="#1E40AF" strokeWidth="2" />
    
    <path d="M110 30L118 38L110 38Z" fill="#1E40AF" />
  </svg>
);


// --- Card Component ---

interface ProcessCardProps {
  title: string;
  illustration: React.ReactNode;
  description: string;
  listItems: string[];
  theme: 'pink' | 'green' | 'blue';
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, illustration, description, listItems, theme }) => {
  const themeStyles = {
    pink: {
      bg: 'bg-[#FFF0EB]',
      grid: 'from-[#E14D2A]/10 to-transparent',
      border: 'border-orange-100',
      text: 'text-gray-900',
    },
    green: {
      bg: 'bg-[#EAFFEB]',
      grid: 'from-[#15803D]/10 to-transparent',
      border: 'border-green-100',
      text: 'text-gray-900',
    },
    blue: {
      bg: 'bg-[#EBF7FF]',
      grid: 'from-[#1E40AF]/10 to-transparent',
      border: 'border-blue-100',
      text: 'text-gray-900',
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <div className={`rounded-2xl overflow-hidden ${currentTheme.bg} flex flex-col h-full border ${currentTheme.border}`}>
      {/* Top Section with Grid and Illustration */}
      <div className="relative h-48 md:h-56 w-full border-b border-black/5 flex items-center justify-center p-6">
        {/* CSS Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            color: theme === 'pink' ? '#FFCCBC' : theme === 'green' ? '#C8E6C9' : '#BBDEFB'
          }}
        ></div>
        
        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
          {illustration}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="font-serif text-3xl text-gray-900 mb-6">{title}</h3>
        
        <p className="text-gray-700 font-medium mb-6">
          {description}
        </p>

        <ul className="space-y-3 mt-auto">
          {listItems.map((item, index) => (
            <li key={index} className="text-gray-600 text-sm md:text-base leading-relaxed flex items-start">
              {/* Note: The user text included numbers (1., 2.), so we just render the string directly. 
                  If we wanted custom bullets we would parse it, but sticking to prompt text. */}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ProcessSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 mb-6 shadow-sm">
             <span className="w-auto h-auto px-2 py-0.5 rounded-sm bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wide">Starting</span>
             <span className="text-sm text-gray-600 font-medium">is easy</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900">
            Stress free collaboration
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <ProcessCard 
            theme="pink"
            title="Kickoff"
            illustration={<KickoffIllustration />}
            description="Quick call to understand your goals"
            listItems={[
              "1. Clear scope from day one",
              "2. Timeline set upfront",
              "3. No confusion, no back-and-forth"
            ]}
          />

          <ProcessCard 
            theme="green"
            title="Design"
            illustration={<DesignIllustration />}
            description="Updates in your preferred needs"
            listItems={[
              "1. Clear scope from day one",
              "2. Timeline set upfront",
              "3. No confusion, no back-and-forth"
            ]}
          />

          <ProcessCard 
            theme="blue"
            title="Launch"
            illustration={<LaunchIllustration />}
            description="Smooth handover with zero chaos"
            listItems={[
              "1. Clear scope from day one",
              "2. Timeline set upfront",
              "3. No confusion, no back-and-forth"
            ]}
          />

        </div>
      </div>
    </section>
  );
};
