
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProcessSection } from './components/ProcessSection';
import { WorkSection } from './components/WorkSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-900">
      <Header />
      <Hero />
      <ProcessSection />
      <WorkSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
