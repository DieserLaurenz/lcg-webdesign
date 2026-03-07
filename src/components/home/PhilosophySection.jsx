import React from 'react';
import { Smartphone, Zap, Calendar, ShieldCheck, Code2, Search } from 'lucide-react';
import FeatureCard from './FeatureCard.jsx';

export default function PhilosophySection() {
  return (
    <section id="philosophie" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">
            Warum Handarbeit den Unterschied macht
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Ich setze bewusst auf individuelle Entwicklung statt auf starre Baukastensysteme. Moderne Web-Technologien wie Astro.js und React ermoeglichen es mir, Seiten zu erstellen, die durch minimale Ladezeiten und sauberen Code ueberzeugen. Damit schaffe ich fuer Sie ein hervorragendes technisches Fundament, um sich bei Google und gegenueber dem Wettbewerb klar zu positionieren.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap size={28} className="text-blue-900" />}
            title="High-End-Performance"
            description="Baukaesten laden oft unnoetigen Code, der Ihre Webseite verlangsamt. Ich nutze die moderne Astro-Architektur fuer exzellente Effizienz: Blitzschnelle Ladezeiten ohne Ballast senken die Absprungrate und schaffen das ideale Fundament fuer ein starkes Google Ranking."
          />
          <FeatureCard
            icon={<Code2 size={28} className="text-blue-900" />}
            title="Modulare Massarbeit"
            description="Statt an starre Templates gebunden zu sein programmiere ich Ihre Seite individuell mit dem React-Framework. Sie erhalten ein einzigartiges und professionelles Website-Design mit groesstmoeglicher technischer Flexibilitaet, das sich exakt an Ihre Praxisprozesse anpasst."
          />
          <FeatureCard
            icon={<ShieldCheck size={28} className="text-blue-900" />}
            title="Volle Unabhaengigkeit"
            description="Keine monatliche Miete, kein Vendor-Lock-in. Ich raeume Ihnen zeitlich und raeumlich unbegrenzte Nutzungsrechte am individuell fuer Sie erstellten Code ein. So behalten Sie dauerhaft die volle Kontrolle ueber Hosting, Skalierung und kuenftige Anpassungen."
          />
          <FeatureCard
            icon={<Search size={28} className="text-blue-900" />}
            title="Gezielte SEO-Optimierung"
            description="Baukaestensysteme stossen bei der Suchmaschinenoptimierung oft an Grenzen. Meine Strategie erlaubt die hochpraezise Steuerung relevanter technischer On-Page-Faktoren und schafft so ein exzellentes Fundament fuer Ihre regionale Sichtbarkeit bei Google."
          />
          <FeatureCard
            icon={<Calendar size={28} className="text-blue-900" />}
            title="Nahtlose Integration"
            description="Ob Doctolib, Jameda oder Treatwell, ich verknuepfe Ihre Website mit Ihren bestehenden Buchungssystemen, sodass Patienten mit einem Klick zur Terminbuchung gelangen. Dank massgeschneidertem Code bleibt Ihre Website dauerhaft flexibel erweiterbar."
          />
          <FeatureCard
            icon={<Smartphone size={28} className="text-blue-900" />}
            title="Konsequent Mobile-First"
            description="Ihre Patienten suchen heute ueberwiegend mobil. Ich entwickle konsequent primaer fuer Smartphones: Ihre Website wird fuer mobile Endgeraete optimiert und passt sich flexibel und fluessig allen Bildschirmgroessen an."
          />
        </div>
      </div>
    </section>
  );
}
