import React, { useState } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';

const defaultNavLinks = [
  { href: '/#philosophie', label: 'Philosophie' },
  { href: '/#referenzen', label: 'Referenzen' },
  { href: '/#about', label: 'Über mich' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#faq', label: 'FAQ' },
];

export default function HomeNavigation({ links = defaultNavLinks }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all" aria-label="Hauptnavigation">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-sm group"
          aria-label="Zur Startseite"
        >
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-start justify-center">
              <span className="font-serif text-[1.5rem] font-light tracking-[0.05em] text-slate-900 leading-none group-hover:text-blue-900 transition-colors">
                Gilbert
              </span>
              <span className="text-[0.55rem] font-sans font-medium uppercase tracking-[0.4em] text-slate-400 leading-none mt-1.5 ml-[0.1rem]">
                Webdesign
              </span>
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`transition-colors flex items-center gap-1.5 ${link.isBackLink ? 'text-slate-400 hover:text-slate-600 mr-2 pr-6 border-r border-slate-200' : 'hover:text-blue-900'}`}
            >
              {link.isBackLink && <ArrowLeft size={16} />}
              {link.label}
            </a>
          ))}
          <a href="#kontakt" className="bg-blue-900 text-white px-5 py-2.5 rounded-sm hover:bg-blue-800 transition-colors">
            Gespräch vereinbaren
          </a>
        </div>

        <button
          className="md:hidden text-slate-900 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      <div className={`md:hidden bg-white border-b border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-4 text-center">
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`py-2 transition-colors flex items-center justify-center gap-2 ${link.isBackLink ? 'text-slate-400 hover:text-slate-600 pb-4 mb-2 border-b border-slate-100' : 'text-slate-600 hover:text-blue-900'}`}
            >
              {link.isBackLink && <ArrowLeft size={16} />}
              {link.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setIsMobileMenuOpen(false)} className="bg-blue-900 text-white px-5 py-3 rounded-sm w-full hover:bg-blue-800 transition-colors">
            Gespräch vereinbaren
          </a>
        </div>
      </div>
    </nav>
  );
}
