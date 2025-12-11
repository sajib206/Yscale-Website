
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does the communication work?",
    answer: "We use Slack for daily communication and quick updates. For project management and tracking, we rely on Linear or Trello to keep everything organized. We also schedule weekly sync calls to review progress, discuss feedback, and ensure we're aligned on goals."
  },
  {
    question: "Do you provide development services?",
    answer: "Yes! We specialize in both design and development. For marketing websites, we use Framer, Webflow, or React (Next.js). For web applications, we provide robust frontend development with React/Next.js, delivering clean, component-based code ready for your backend team."
  },
  {
    question: "What is the typical timeline for a project?",
    answer: "Timelines depend on the specific scope. A high-converting landing page usually takes 2-3 weeks, while a full website or web app design can take 4-8 weeks. We provide a detailed timeline and milestones breakdown during our kickoff call so you know exactly what to expect."
  },
  {
    question: "How do revisions work?",
    answer: "We believe in a collaborative, iterative process. We don't strictly limit revisions as long as they align with the original scope. Our goal is to work with you until you are 100% happy with the design and it meets your business objectives."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Absolutely. We offer monthly retainer packages for ongoing design and development support. This is perfect for startups that need continuous improvements, new landing pages, or feature updates without hiring a full-time designer."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-gray-50 py-24 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1 mb-6 shadow-sm">
             <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
             <span className="text-sm text-gray-600 font-medium">FAQ</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-brand-orange/30 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-serif text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-brand-orange text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-gray-600 leading-relaxed text-base border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
