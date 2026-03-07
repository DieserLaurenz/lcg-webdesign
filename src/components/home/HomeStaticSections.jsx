import React from 'react';
import {
  Smartphone,
  Zap,
  CheckCircle,
  Calendar,
  ShieldCheck,
  Code2,
  ArrowRight,
  ExternalLink,
  BarChart3,
  Timer,
  Search,
  GraduationCap,
  Briefcase,
  Cpu,
} from 'lucide-react';

export default function HomeStaticSections() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
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
            <a href="#philosophie" className="hover:text-blue-900 transition-colors">Philosophie</a>
            <a href="#referenzen" className="hover:text-blue-900 transition-colors">Referenzen</a>
            <a href="#about" className="hover:text-blue-900 transition-colors">Über mich</a>
            <a href="#leistungen" className="hover:text-blue-900 transition-colors">Leistungen</a>
            <a href="#faq" className="hover:text-blue-900 transition-colors">FAQ</a>
            <a href="#kontakt" className="bg-blue-900 text-white px-5 py-2.5 rounded-sm hover:bg-blue-800 transition-colors">
              Gespräch vereinbaren
            </a>
          </div>

          <details className="md:hidden relative">
            <summary className="list-none text-slate-900 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-sm cursor-pointer [&::-webkit-details-marker]:hidden">
              Menü
            </summary>
            <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-sm shadow-lg p-3 flex flex-col gap-1 text-sm">
              <a href="#philosophie" className="text-slate-600 py-2 px-2 hover:text-blue-900 transition-colors">Philosophie</a>
              <a href="#referenzen" className="text-slate-600 py-2 px-2 hover:text-blue-900 transition-colors">Referenzen</a>
              <a href="#about" className="text-slate-600 py-2 px-2 hover:text-blue-900 transition-colors">Über mich</a>
              <a href="#leistungen" className="text-slate-600 py-2 px-2 hover:text-blue-900 transition-colors">Leistungen</a>
              <a href="#faq" className="text-slate-600 py-2 px-2 hover:text-blue-900 transition-colors">FAQ</a>
              <a href="#kontakt" className="bg-blue-900 text-white px-4 py-2 rounded-sm text-center hover:bg-blue-800 transition-colors">
                Gespräch vereinbaren
              </a>
            </div>
          </details>
        </div>
      </nav>

      <main>
        <section className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Hochwertige Webseiten, <br className="hidden md:block" />
              die Vertrauen schaffen.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Als Dienstleister im Gesundheits- und Wellnessbereich ist Ihre Website der erste Eindruck.
              Ich entwickle für Sie hochperformante, maßgeschneiderte Internetauftritte, kompromisslos optimiert für Smartphones und lokale Sichtbarkeit.
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
                      <span className="text-4xl font-bold text-slate-900">1.290 €</span>
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
                    <ListItem text={<><strong className="text-slate-900 font-semibold">In der Regel keine laufenden Hosting-Kosten</strong> (modernes Cloudsystem)</>} />
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
                  Beliebteste Wahl
                </div>
                <div className="flex-grow flex flex-col relative z-10">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl text-white mb-1">Umfassende Praxis-Website</h3>
                    <p className="text-blue-300 text-sm uppercase tracking-wide font-semibold mb-4">Multi-Pager</p>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-bold text-white">2.290 €</span>
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
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-sm hover:shadow-sm transition-all hover:bg-white group">
      <div className="w-14 h-14 bg-blue-50 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="font-serif text-xl text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function ListItem({ text, dark = false }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle size={18} className={`shrink-0 mt-0.5 ${dark ? 'text-blue-400' : 'text-blue-900'}`} />
      <span className={`text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-700'}`}>{text}</span>
    </li>
  );
}

function StaticPhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl ring-1 ring-slate-900/50">
      <div className="absolute top-24 -left-1 w-1 h-10 bg-slate-800 rounded-l-md"></div>
      <div className="absolute top-36 -left-1 w-1 h-10 bg-slate-800 rounded-l-md"></div>
      <div className="absolute top-32 -right-1 w-1 h-14 bg-slate-800 rounded-r-md"></div>

      <div className="relative w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden border-[3px] border-slate-950">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20 pointer-events-none flex items-center justify-end px-2">
          <div className="w-2.5 h-2.5 bg-slate-800 rounded-full border border-slate-700/50"></div>
        </div>
        <img
          src="/webdesign-berlin-bodywork-praxis-beispiel-mobile.webp"
          alt="Bodywork Berlin Mobile Screenshot"
          className="w-full h-full object-cover object-top block"
        />
      </div>
    </div>
  );
}
