
import React from 'react';
import { Sparkles, Cat, MessageSquare, ShoppingBag, Coffee } from 'lucide-react';

// --- Types ---

interface WorkCardProps {
  name: string;
  logoIcon: React.ReactNode;
  description: string;
  stats: string;
  statsLabel: string;
  tags: string[];
  layout: 'text-left' | 'text-right';
  visual: React.ReactNode;
}

// --- Visual Mocks (CSS-only UI representations) ---

const OrchHireVisual = () => (
  <img src="/orc.png" alt="OrchHire" className="w-full h-full object-cover" />
);

const WellbeneVisual = () => (
  <div className="w-full h-full bg-white p-4 relative overflow-hidden flex flex-col border-l border-gray-100">
     {/* Nav */}
     <div className="w-full h-12 border-b border-gray-100 flex items-center justify-between px-4 mb-4">
        <div className="text-orange-500 font-bold text-lg">wellbene</div>
        <div className="flex gap-2">
           <div className="w-20 h-2 bg-gray-100 rounded"></div>
           <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
        </div>
     </div>
     
     <div className="flex gap-4 h-full">
        {/* Sidebar */}
        <div className="w-1/4 hidden md:block space-y-3 pt-2">
           <div className="h-2 w-16 bg-gray-200 rounded"></div>
           <div className="h-2 w-24 bg-gray-100 rounded"></div>
           <div className="h-2 w-20 bg-gray-100 rounded"></div>
           <div className="h-2 w-24 bg-gray-100 rounded"></div>
           <div className="mt-4 h-32 bg-orange-50 rounded-lg border border-orange-100"></div>
        </div>
        
        {/* Grid */}
        <div className="flex-1 grid grid-cols-2 gap-3 overflow-hidden pb-4">
           {[1,2,3,4].map(i => (
             <div key={i} className="border border-gray-100 rounded-lg p-3 flex flex-col items-center hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-gray-50 rounded-md mb-2 relative">
                   {i === 1 && <div className="absolute top-0 right-0 bg-red-500 text-white text-[8px] px-1 rounded-bl">SALE</div>}
                </div>
                <div className="w-full h-2 bg-gray-100 rounded mb-1"></div>
                <div className="w-1/2 h-2 bg-gray-100 rounded mb-2"></div>
                <div className="w-full flex justify-between items-center mt-auto">
                   <div className="w-8 h-3 bg-gray-200 rounded"></div>
                   <div className="w-4 h-4 bg-orange-500 rounded-full text-white flex items-center justify-center text-[10px]">+</div>
                </div>
             </div>
           ))}
        </div>
     </div>
  </div>
);

const PlaceholderVisual = ({ label }: { label?: string }) => (
  <div className="w-full h-full bg-gray-50 flex items-center justify-center border-l border-gray-100/50">
    <div className="text-gray-300 font-medium text-lg tracking-widest uppercase">{label || "Preview"}</div>
  </div>
);

// --- Card Component ---

const WorkCard: React.FC<WorkCardProps> = ({ name, logoIcon, description, stats, statsLabel, tags, layout, visual }) => {
  return (
    <div className="group w-full bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden flex flex-col md:flex-row min-h-[450px]">
      
      {/* Content Side */}
      <div className={`flex-1 p-8 md:p-12 flex flex-col justify-center ${layout === 'text-right' ? 'md:order-2' : 'md:order-1'}`}>
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
           <div className="text-gray-400 transition-colors group-hover:text-brand-orange">
             {logoIcon}
           </div>
           <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{name}</h3>
        </div>

        {/* Desc */}
        <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-md">
          {description}
        </p>

        {/* Stats */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-gray-900 text-3xl font-medium">↑</span>
            <span className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">{stats}</span>
          </div>
          <p className="text-gray-500 text-lg mb-8 border-b border-gray-100 pb-8">{statsLabel}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 text-sm hover:border-brand-orange/50 hover:text-brand-orange transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Side */}
      <div className={`flex-1 min-h-[300px] md:min-h-auto ${layout === 'text-right' ? 'md:order-1' : 'md:order-2'}`}>
        {visual}
      </div>

    </div>
  );
};

export const WorkSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-600">Recent work</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-gray-900 leading-tight">
            Yscale partners with small<br/>teams with big ambition
          </h2>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-8 md:gap-12">
          
          <WorkCard
            name="OrchHire.ai"
            logoIcon={<Sparkles className="w-6 h-6" />}
            description="Smart employee hiring platform through LinkedIn Profile."
            stats="159%"
            statsLabel="Increase hiring in monthly"
            tags={['Hiring', 'Jobs']}
            layout="text-left"
            visual={<OrchHireVisual />}
          />

          <WorkCard
            name="Roam"
            logoIcon={<Cat className="w-6 h-6" />}
            description="Digital Pet Tracking with Smart QR Tags, Live Location Updates, and a Full Pet Profile"
            stats="350%"
            statsLabel="Increase Sales in 60 Days"
            tags={['Digital Pet Tracker']}
            layout="text-right"
            visual={<PlaceholderVisual label="Roam App" />}
          />

          <WorkCard
            name="Chatbookly"
            logoIcon={<MessageSquare className="w-6 h-6" />}
            description="Chatbooky is the only platform that allows you to book your services in seconds on WhatsApp."
            stats="120%"
            statsLabel="Increase Booking Experience"
            tags={['SaaS', 'Booking Automation']} 
            layout="text-left"
            visual={<PlaceholderVisual label="WhatsApp Interface" />}
          />

          <WorkCard
            name="wellbene"
            logoIcon={<ShoppingBag className="w-6 h-6" />}
            description="UAE's Authentic Store for Supplements & Nutrition"
            stats="110%"
            statsLabel="Increase Sales in a Month"
            tags={['Ecommerce', 'Supplements & Nutrition']}
            layout="text-right"
            visual={<WellbeneVisual />}
          />

          <WorkCard
            name="vidro"
            logoIcon={<Coffee className="w-6 h-6" />}
            description="A unique coffee brewer that eliminates microplastics and delivers pure, unfiltered flavor every time."
            stats="560%"
            statsLabel="Increase Sales in 90 Days"
            tags={['Ecommerce', 'Coffee Brewer']}
            layout="text-left"
            visual={<PlaceholderVisual label="Product Shot" />}
          />

        </div>

      </div>
    </section>
  );
};
