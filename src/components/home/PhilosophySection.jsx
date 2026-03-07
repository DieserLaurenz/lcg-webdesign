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
            Ich setze bewusst auf individuelle Entwicklung statt auf starre Baukastensysteme. Moderne Web-Technologien wie Astro.js und React ermöglichen es mir, Seiten zu erstellen, die durch minimale Ladezeiten und sauberen Code überzeugen. Damit schaffe ich für Sie ein hervorragendes technisches Fundament, um sich bei Google und gegenüber dem Wettbewerb klar zu positionieren.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap size={28} className="text-blue-900" />}
            title="High-End-Performance"
            description="Baukästen laden oft unnötigen Code, der Ihre Webseite verlangsamt. Ich nutze die moderne Astro-Architektur für exzellente Effizienz: Blitzschnelle Ladezeiten ohne Ballast senken die Absprungrate und schaffen das ideale Fundament für ein starkes Google Ranking."
          />
          <FeatureCard
            icon={<Code2 size={28} className="text-blue-900" />}
            title="Modulare Maßarbeit"
            description="Statt an starre Templates gebunden zu sein programmiere ich Ihre Seite individuell mit dem React-Framework. Sie erhalten ein einzigartiges und professionelles Website-Design mit größtmöglicher technischer Flexibilität, das sich exakt an Ihre Praxisprozesse anpasst."
          />
          <FeatureCard
            icon={<ShieldCheck size={28} className="text-blue-900" />}
            title="Volle Unabhängigkeit"
            description="Keine monatliche Miete, kein Vendor-Lock-in. Ich räume Ihnen zeitlich und räumlich unbegrenzte Nutzungsrechte am individuell für Sie erstellten Code ein. So behalten Sie dauerhaft die volle Kontrolle über Hosting, Skalierung und künftige Anpassungen."
          />
          <FeatureCard
            icon={<Search size={28} className="text-blue-900" />}
            title="Gezielte SEO-Optimierung"
            description="Baukästensysteme stoßen bei der Suchmaschinenoptimierung oft an Grenzen. Meine Strategie erlaubt die hochpräzise Steuerung relevanter technischer On-Page-Faktoren und schafft so ein exzellentes Fundament für Ihre regionale Sichtbarkeit bei Google."
          />
          <FeatureCard
            icon={<Calendar size={28} className="text-blue-900" />}
            title="Nahtlose Integration"
            description="Ob Doctolib, Jameda oder Treatwell, ich verknüpfe Ihre Website mit Ihren bestehenden Buchungssystemen, sodass Patienten mit einem Klick zur Terminbuchung gelangen. Dank maßgeschneidertem Code bleibt Ihre Website dauerhaft flexibel erweiterbar."
          />
          <FeatureCard
            icon={<Smartphone size={28} className="text-blue-900" />}
            title="Konsequent Mobile-First"
            description="Ihre Patienten suchen heute überwiegend mobil. Ich entwickle konsequent primär für Smartphones: Ihre Website wird für mobile Endgeräte optimiert und passt sich flexibel und flüssig allen Bildschirmgrößen an."
          />
        </div>
      </div>
    </section>
  );
}
