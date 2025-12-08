
import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  buttonStyle: 'outline' | 'solid';
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, buttonText, buttonStyle, features }) => {
  return (
    <div className="bg-[#F3F4F6] rounded-2xl p-8 md:p-10 flex flex-col h-full border border-gray-200/50 hover:border-gray-300 transition-colors duration-300">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <h3 className="font-serif text-3xl text-gray-900">{title}</h3>
        <div className="text-4xl text-brand-orange font-medium tracking-tight">
          <span className="text-2xl align-top mr-1">$</span>{price}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-lg mb-8 leading-relaxed min-h-[3.5rem]">
        {description}
      </p>

      {/* Button */}
      <a 
        href="https://calendly.com/mahfuzulnabil/discussion-with-nabil" 
        target="_blank"
        rel="noopener noreferrer"
        className={`w-fit px-8 py-3.5 rounded-lg text-lg font-medium transition-all duration-300 mb-10 text-center ${
          buttonStyle === 'solid' 
            ? 'bg-brand-orange text-white hover:bg-orange-600 shadow-md shadow-orange-500/20' 
            : 'bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
        }`}
      >
        {buttonText}
      </a>

      {/* Features */}
      <div className="mt-auto">
        <p className="text-gray-900 font-medium mb-6">Plan includes:</p>
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" strokeWidth={2.5} />
              <span className="text-gray-700 leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export const PricingSection: React.FC = () => {
  const commonFeatures = [
    "Advanced Apps for complex campaign orchestration",
    "No-code AI App Builder to create custom Apps without developers",
    "Access to Jasper’s purpose built marketing Agents",
    "Dedicated account management & priority support",
    "Enterprise-grade governance: Admin controls and Groups",
    "Secure and flexible deployment options"
  ];

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-1.5 py-1 mb-6 shadow-sm">
             <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-bold uppercase tracking-wide">Strikes</span>
             <span className="text-sm text-gray-600 font-medium px-2">the perfect balance</span>
          </div>
          <h2 className="font-serif text-5xl md:text-[4rem] text-gray-900 leading-[1.1] tracking-tight">
            Packages built to take you<br/>from idea to market leader
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <PricingCard 
            title="Pro"
            price="1,200"
            description="Perfect for single, high-impact, conversion-focused landing page."
            buttonText="Book a call"
            buttonStyle="outline"
            features={commonFeatures}
          />

          <PricingCard 
            title="Business"
            price="1,900"
            description="Design with no-code development in your demandable platform"
            buttonText="Book a Call"
            buttonStyle="solid"
            features={commonFeatures}
          />

        </div>
      </div>
    </section>
  );
};
