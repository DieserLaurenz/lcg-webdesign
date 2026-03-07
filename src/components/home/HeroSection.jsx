import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-slate-900 leading-[1.1] mb-6 tracking-tight">
          Hochwertige Webseiten, <br className="hidden md:block" />
          die Vertrauen schaffen.
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Als Dienstleister im Gesundheits- und Wellnessbereich ist Ihre Website der erste Eindruck.
          Ich entwickle für Sie hochperformante, maßgeschneiderte Internetauftritte, kompromisslos optimiert für Smartphones und lokale Sichtbarkeit in Berlin, Potsdam und Umland.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#kontakt" className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white font-medium rounded-sm hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
            Kostenlose Erstberatung <ArrowRight size={18} />
          </a>
          <a href="#leistungen" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-medium border border-slate-200 rounded-sm hover:border-slate-300 hover:bg-slate-50 transition-all">
            Meine Leistungen
          </a>
        </div>
      </div>
    </section>
  );
}
