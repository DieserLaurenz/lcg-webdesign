import React from 'react';

const navLinks = [
  { href: '#philosophie', label: 'Philosophie' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#about', label: 'Über mich' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#faq', label: 'FAQ' },
];

export default function HomeNavigation() {
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
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-900 transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#kontakt" className="bg-blue-900 text-white px-5 py-2.5 rounded-sm hover:bg-blue-800 transition-colors">
            Gespräch vereinbaren
          </a>
        </div>

        <details className="md:hidden relative">
          <summary className="list-none text-slate-900 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-sm cursor-pointer [&::-webkit-details-marker]:hidden">
            Menü
          </summary>
          <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-sm shadow-lg p-3 flex flex-col gap-1 text-sm">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-600 py-2 px-2 hover:text-blue-900 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#kontakt" className="bg-blue-900 text-white px-4 py-2 rounded-sm text-center hover:bg-blue-800 transition-colors">
              Gespräch vereinbaren
            </a>
          </div>
        </details>
      </div>
    </nav>
  );
}
