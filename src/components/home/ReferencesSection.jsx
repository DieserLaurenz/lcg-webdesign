import React from 'react';
import { ExternalLink, BarChart3, Timer } from 'lucide-react';
import StaticPhoneMockup from './StaticPhoneMockup.jsx';

export default function ReferencesSection() {
  return (
    <section id="referenzen" className="py-24 bg-slate-100 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-900 font-semibold tracking-wider uppercase text-sm mb-2 block">Ausgewähltes Projekt</span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Ergebnisse, die für sich sprechen</h2>
          <p className="text-slate-600">
            Ein Einblick in meine jüngste Arbeit. Hochperformant, fokussiert auf Neukundengewinnung und kompromisslos im Design.
          </p>
        </div>

        <div className="bg-white rounded-sm border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row items-center overflow-hidden max-w-6xl mx-auto">
          <div className="p-10 md:p-14 lg:w-1/2 flex flex-col justify-center">
            <div className="flex gap-3 mb-6">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">Physiotherapie & Massage</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">One-Pager</span>
            </div>

            <h3 className="font-serif text-3xl text-slate-900 mb-4">Bodywork Berlin</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Für Bodywork Berlin wurde ein umfassendes Redesign realisiert. Ziel war es, die veraltete Präsenz zu modernisieren, die Performance spürbar zu optimieren und die Seite durch ein SEO-optimiertes Mobile-First-Design professionell in Szene zu setzen.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 shrink-0 mt-1">
                  <BarChart3 size={24} />
                </div>
                <div className="w-full">
                  <p className="text-slate-900 font-semibold mb-2">Google Lighthouse Scores <span className="text-slate-400 font-normal text-sm">*</span></p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 text-sm text-slate-600">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>100/100 Leistung</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>100/100 Best Practices</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>95/100 Barrierefreiheit</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>100/100 SEO</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 shrink-0 mt-1">
                  <Timer size={24} />
                </div>
                <div className="w-full">
                  <p className="text-slate-900 font-semibold mb-1">&lt; 0.5s Desktop / 1.0s Mobil <span className="text-slate-400 font-normal text-sm">*</span></p>
                  <p className="text-sm text-slate-600">Dank effizienter Programmierung</p>
                </div>
              </div>
            </div>

            <a href="https://www.bodywork-berlin.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-900 font-medium hover:text-blue-700 transition-colors group mb-8">
              Live-Seite ansehen
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <div className="pt-5 border-t border-slate-100">
              <p className="text-[0.65rem] text-slate-400 leading-relaxed">
                * <a href="https://pagespeed.web.dev/analysis/https-bodywork-berlin-com/ii18pa7v1f?form_factor=desktop" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-500 transition-colors">Gemessen zum Launch</a>. Hinweis: Bei mobilen Leistungstests schwanken die Werte minimal, da Google standardmäßig eine langsame 4G-Verbindung simuliert.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 bg-slate-50 w-full h-full p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-100 relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-100/50 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700"></div>
            <StaticPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
