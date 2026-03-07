import React from 'react';
import { GraduationCap, Briefcase, Cpu } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <img
              src="/webdesigner-berlin-praxen-salons-laurenz-gilbert.webp"
              alt="Laurenz Gilbert - Webdesigner"
              className="aspect-[3/4] md:aspect-square object-cover w-full bg-slate-200 rounded-sm border border-slate-200 relative z-10 shadow-sm"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white border border-slate-200 rounded-sm -z-10 hidden md:block"></div>
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">Ihr Partner für digitale Seriosität und messbaren Erfolg</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Guten Tag, mein Name ist Laurenz Gilbert. Als Wirtschaftsinformatiker (B.Sc., Universität Potsdam) mit einem Abschluss von 1,7 und Masterstudent an der TU Berlin verbinde ich tiefgreifendes akademisches Know-how mit praktischer Anwendungsorientierung.
              </p>
              <p>
                Meine Erfahrungen im Technologie-Umfeld bei Deloitte sowie der erfolgreiche Aufbau meines eigenen E-Commerce-Unternehmens haben mir gezeigt, worauf es bei professionellen und wirtschaftlich rentablen IT-Lösungen ankommt.
              </p>
              <p>
                Diese gebündelte Expertise nutze ich heute, um für Ärzte, Therapeuten und Studios präzise, handprogrammierte Premium-Webseiten zu entwickeln. Mit modernsten Technologien auf Agentur-Niveau sorge ich für exzellente Performance.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 border-t border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-900 text-white rounded-sm flex items-center justify-center shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="font-serif text-slate-900 font-medium mb-1">Fundierte Expertise</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Wissen aus Uni Potsdam und TU Berlin, ergänzt um Erfahrung aus Praxis und IT-Projekten.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-900 text-white rounded-sm flex items-center justify-center shrink-0">
              <Briefcase size={20} />
            </div>
            <div>
              <h3 className="font-serif text-slate-900 font-medium mb-1">Branchenverständnis</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Direkte Einblicke in Praxisabläufe und unternehmerische Erfahrung für realistische Lösungen.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-900 text-white rounded-sm flex items-center justify-center shrink-0">
              <Cpu size={20} />
            </div>
            <div>
              <h3 className="font-serif text-slate-900 font-medium mb-1">Modernste Technik</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Astro & React für Performance, Sicherheit und schnelle Ladezeiten.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
