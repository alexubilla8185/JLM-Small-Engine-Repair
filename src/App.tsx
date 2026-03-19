/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Wrench, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactAndFooter from './components/ContactAndFooter';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-black/90 border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wrench className="w-8 h-8 text-amber-500" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              JLM <span className="text-amber-500">Small Engine Repair</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" aria-label="Navigate to Services section" className="hover:text-amber-500 transition-colors">Services</a>
            <a href="#contact" aria-label="Navigate to Contact section" className="hover:text-amber-500 transition-colors">Contact & Hours</a>
            <a 
              href="tel:9544205480" 
              className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2.5 rounded-md font-bold transition-all duration-300 hover:scale-105"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-amber-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-white/10 px-4 py-6 space-y-4">
            <a 
              href="#services" 
              className="block text-slate-300 hover:text-amber-500 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="block text-slate-300 hover:text-amber-500 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact & Hours
            </a>
            <a 
              href="tel:9544205480" 
              className="block text-center bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-md font-bold transition-colors mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Call Now
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <ContactAndFooter />
      </main>
    </div>
  );
}
