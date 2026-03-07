import React from 'react';
import { ShieldCheck } from 'lucide-react';
import ListItem from './ListItem.jsx';

export default function PricingSection() {
  return (
    <section id="leistungen" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Investitionen in Ihre digitale Praxis</h2>
          <p className="text-slate-600">
            Transparente Lösungen, exakt zugeschnitten auf die Größe und Anforderungen Ihres Unternehmens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-50 p-6 md:p-8 border border-slate-200 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col relative">
            <div className="flex-grow flex flex-col relative z-10">
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-slate-900 mb-1">Die Digitale Visitenkarte</h3>
                <p className="text-slate-500 text-sm uppercase tracking-wide font-semibold mb-4">One-Pager</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-slate-900">1.290 EUR</span>
                  <span className="text-sm text-slate-500 font-medium">zzgl. MwSt.</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Die ideale Lösung für spezialisierte Therapeuten oder Neugründungen.
              </p>
              <ul className="space-y-3 mb-8">
                <ListItem text={<><strong className="text-slate-900 font-semibold">Eine informative Hauptseite</strong> (zzgl. Seiten für Ihre Rechtstexte)</>} />
                <ListItem text={<><strong className="text-slate-900 font-semibold">Integriertes CMS</strong> (Texte & Bilder selbst ändern)</>} />
                <ListItem text={<><strong className="text-slate-900 font-semibold">Technisches SEO-Fundament</strong> für die lokale Suche</>} />
                <ListItem text={<><strong className="text-slate-900 font-semibold">Buchungs-Integration</strong> (Doctolib, Jameda, Treatwell, etc.)</>} />
                <ListItem text={<><strong className="text-slate-900 font-semibold">Kontaktformular & Google Maps</strong> für effizientere Anfragen</>} />
                <ListItem text={<><strong className="text-slate-900 font-semibold">Für das Hosting selbst entstehen in vielen Fällen keine laufenden Kosten</strong> (modernes Cloudsystem)</>} />
              </ul>
            </div>
            <div className="mt-auto flex flex-col relative z-10 shrink-0">
              <a href="#kontakt" className="w-full py-2.5 px-4 border-2 border-blue-900 bg-blue-900 text-white font-medium rounded-sm hover:bg-blue-800 transition-colors text-center">
                Details anfragen
              </a>
            </div>
          </div>

          <div className="bg-[#0f172a] p-6 md:p-8 border border-slate-800 rounded-sm shadow-lg h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-20">
              Häufig gewählt
            </div>
            <div className="flex-grow flex flex-col relative z-10">
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-white mb-1">Umfassende Praxis-Website</h3>
                <p className="text-blue-300 text-sm uppercase tracking-wide font-semibold mb-4">Multi-Pager</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-white">2.290 EUR</span>
                  <span className="text-sm text-blue-300 font-medium">zzgl. MwSt.</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Für etablierte Praxen und Studios mit umfangreichem Angebot.
              </p>
              <ul className="space-y-3 mb-8">
                <ListItem dark text={<><strong className="text-white font-semibold">Alles aus der Digitalen Visitenkarte</strong>, zusätzlich:</>} />
                <ListItem dark text={<><strong className="text-white font-semibold">Bis zu 8 Unterseiten</strong> (für Ihre Leistungen)</>} />
                <ListItem dark text={<><strong className="text-white font-semibold">Tiefgreifendes On-Page-SEO</strong> pro Unterseite</>} />
                <ListItem dark text={<><strong className="text-white font-semibold">Ausführliches Team- & Praxisprofil</strong></>} />
                <ListItem dark text={<><strong className="text-white font-semibold">Google Business Profil:</strong> Setup & Beratung</>} />
                <ListItem dark text={<><strong className="text-white font-semibold">Optional:</strong> Webseite auch auf Englisch verfügbar</>} />
              </ul>
            </div>
            <div className="mt-auto flex flex-col relative z-10 shrink-0">
              <a href="#kontakt" className="w-full py-2.5 px-4 border-2 border-blue-600 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50 text-center">
                Details anfragen
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-slate-400 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-blue-900/40" />
            <span>Alle Preise richten sich ausschließlich an B2B-Kunden (Praxen, Unternehmen, Freiberufler).</span>
          </div>
        </div>
      </div>
    </section>
  );
}
