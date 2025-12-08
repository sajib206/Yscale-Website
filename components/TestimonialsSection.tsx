
import React from 'react';
import { Star } from 'lucide-react';

// --- Types ---

interface Testimonial {
  company: string;
  logo: React.ReactNode;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

// --- Logos ---

const RoamLogo = () => (
  <div className="flex items-center gap-2 text-gray-700">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>
    <span className="font-bold text-xl tracking-tight">Roam</span>
  </div>
);

const OrchHireLogo = () => (
  <div className="flex items-center gap-2 text-gray-500">
    <div className="text-gray-400">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      </svg>
    </div>
    <span className="font-bold text-xl text-gray-700">OrchHire.ai</span>
  </div>
);

const ChatbooklyLogo = () => (
  <div className="flex items-center gap-2 text-gray-700">
    <div className="bg-gray-400 p-1 rounded-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    </div>
    <span className="font-bold text-xl tracking-tight">Chatbookly</span>
  </div>
);

const WellbeneLogo = () => (
  <div className="flex items-center gap-1 text-gray-400">
    <span className="font-bold text-2xl tracking-tight text-gray-400">wellbene</span>
  </div>
);

const GryphonLogo = () => (
  <div className="flex items-center gap-1 text-gray-400">
    <span className="font-extrabold text-xl tracking-widest uppercase text-gray-400">GRYPHON</span>
    <span className="text-xs align-top">®</span>
  </div>
);

const VidroLogo = () => (
  <div className="flex items-center gap-1 text-gray-500">
    <span className="font-bold text-2xl tracking-tighter text-gray-500 lowercase">vidro</span>
  </div>
);


// --- Data ---

const testimonials: Testimonial[] = [
  {
    company: 'Roam',
    logo: <RoamLogo />,
    quote: '"Nabil is one of the best designers I’ve ever worked with. He brings a level of clarity, quality, and speed that’s rare to find. He understands requirements quickly, communicates clearly, and always delivers beyond expectations. He’s hardworking, and genuinely cares about results. I highly recommend him and his team."',
    author: 'Jeremy K.',
    role: 'Founder at Roamtag',
    avatarUrl: 'https://i.pravatar.cc/150?u=roam',
  },
  {
    company: 'OrchHire.ai',
    logo: <OrchHireLogo />,
    quote: '"Nabil is a talented website designer and developer who always delivers top-notch work and creative solutions. He’s reliable, communicates clearly, and consistently solves challenges efficiently. Nabil for anyone looking for a skilled professional in web design and development."',
    author: 'Deepak Ahluwalia',
    role: 'Founder @Cohyre AI',
    avatarUrl: 'https://i.pravatar.cc/150?u=deepak',
  },
  {
    company: 'Chatbookly',
    logo: <ChatbooklyLogo />,
    quote: 'Working with Yscale was an incredible experience. The team understood my vision and delivered a product beyond expectations. They were communicative, detail-oriented, and highly professional. I’m extremely happy and would recommend them to anyone.',
    author: 'Marco',
    role: 'Founder at Chatbookly',
    avatarUrl: 'https://i.pravatar.cc/150?u=marco',
  },
  {
    company: 'wellbene',
    logo: <WellbeneLogo />,
    quote: '“Yscale handled our project with exceptional care and precision. Every update was delivered on schedule, every detail thoughtfully crafted. The end result far surpassed our expectations. We couldn’t be happier!”',
    author: 'Sandeep Kumar',
    role: 'Founder & CEO',
    avatarUrl: 'https://i.pravatar.cc/150?u=sandeep',
  },
  {
    company: 'GRYPHON',
    logo: <GryphonLogo />,
    quote: '“Yscale delivered our website with professionalism and excellent attention to detail. Deadlines were consistently met, feedback was incorporated perfectly, and the final product truly exceeded our expectations. Highly recommended!',
    author: 'Sarim Sayed',
    role: 'Marketing Manager',
    avatarUrl: 'https://i.pravatar.cc/150?u=sarim',
  },
  {
    company: 'vidro',
    logo: <VidroLogo />,
    quote: '“From concept to launch, Yscale exceeded expectations at every step. They listened closely, refined every detail, and produced a final design we’re genuinely proud of. A reliable and talented partner!”',
    author: 'Jeremy K.',
    role: 'Co-Founder of Vidro',
    avatarUrl: 'https://i.pravatar.cc/150?u=jeremy',
  }
];

// --- Component ---

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-1.5 py-1 mb-6 shadow-sm">
             <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-bold uppercase tracking-wide">Testimonials</span>
             <span className="text-sm text-gray-600 font-medium px-2">Word from client</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-gray-900 leading-tight">
            Proven strategies, real<br/>results
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col h-full">
              
              {/* Card Header */}
              <div className="flex justify-between items-center mb-8">
                <div>{t.logo}</div>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-[17px]">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <img 
                  src={t.avatarUrl} 
                  alt={t.author} 
                  className="w-10 h-10 rounded-full object-cover bg-gray-100"
                />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-bold text-sm">{t.author}</span>
                  <span className="text-gray-500 text-xs">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
