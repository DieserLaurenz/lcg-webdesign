import React from 'react';
import { ArrowLeft, Code2 } from 'lucide-react';

const homeLinks = [
  { href: '/#philosophie', label: 'Philosophie' },
  { href: '/#referenzen', label: 'Referenzen' },
  { href: '/#about', label: 'Ueber mich' },
  { href: '/#leistungen', label: 'Leistungen' },
  { href: '/#faq', label: 'FAQ' },
];

const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/agb', label: 'AGB' },
];

const getFooterLinkClassName = (href, activePath) =>
  href === activePath ? 'text-white transition-colors' : 'hover:text-white transition-colors';

export default function LegalPageShell({
  title,
  activePath,
  maxWidth = 'max-w-4xl',
  cardClassName = 'bg-white p-8 md:p-14 border border-slate-200 rounded-sm shadow-sm',
  headingClassName = 'font-serif text-3xl md:text-5xl text-slate-900 mb-10 pb-6 border-b border-slate-100',
  contentClassName = 'space-y-12 text-slate-600 leading-relaxed',
  children,
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden flex flex-col">
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
            {homeLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-900 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="/#kontakt" className="bg-blue-900 text-white px-5 py-2.5 rounded-sm hover:bg-blue-800 transition-colors">
              Gespraech vereinbaren
            </a>
          </div>

          <details className="md:hidden relative">
            <summary className="list-none text-slate-900 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-sm cursor-pointer [&::-webkit-details-marker]:hidden">
              Menue
            </summary>
            <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-sm shadow-lg p-3 flex flex-col gap-1 text-sm">
              {homeLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-slate-600 py-2 px-2 hover:text-blue-900 transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="/#kontakt" className="bg-blue-900 text-white px-4 py-2 rounded-sm text-center hover:bg-blue-800 transition-colors">
                Gespraech vereinbaren
              </a>
            </div>
          </details>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className={`${maxWidth} mx-auto`}>
          <a href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-900 transition-colors mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Zurueck zur Startseite
          </a>

          <div className={cardClassName}>
            <h1 className={headingClassName}>{title}</h1>
            <div className={contentClassName}>{children}</div>
          </div>
        </div>
      </main>

      <footer className="bg-[#0f172a] text-slate-300 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
            <div className="flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0">
              <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex flex-col items-start justify-center">
                  <span className="font-serif text-xl font-light tracking-[0.05em] text-white leading-none">
                    Gilbert
                  </span>
                  <span className="text-[0.55rem] font-sans font-medium uppercase tracking-[0.4em] text-slate-400 leading-none mt-1 ml-[0.05rem]">
                    Webdesign
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <Code2 size={14} />
                <span>Handcrafted by Laurenz Gilbert in Berlin</span>
              </div>
            </div>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <a key={link.href} href={link.href} className={getFooterLinkClassName(link.href, activePath)}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
