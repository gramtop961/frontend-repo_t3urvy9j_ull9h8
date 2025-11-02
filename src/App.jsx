import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0B0E13] text-white">
      {/* Simple top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0E13]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500" />
            <span className="font-semibold tracking-wide">WaveToMe</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#get-started" className="hover:text-white">Get started</a>
          </nav>
          <a
            href="#get-started"
            className="hidden items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur md:inline-flex hover:bg-white/15"
          >
            Try it
          </a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
    </div>
  );
};

export default App;
