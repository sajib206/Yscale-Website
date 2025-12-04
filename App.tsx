import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-900">
      <Header />
      <Hero />
    </div>
  );
}

export default App;