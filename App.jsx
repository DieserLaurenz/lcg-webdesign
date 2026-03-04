import React, { useState, useEffect, useRef } from 'react';
import {
  Smartphone,
  Zap,
  CheckCircle,
  Calendar,
  ShieldCheck,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Code2,
  ArrowRight,
  ExternalLink,
  BarChart3,
  Timer,
  Mail,
  Search,
  GraduationCap,
  Briefcase,
  Cpu
} from 'lucide-react';

// --- CUSTOM HOOKS & COMPONENTS FOR ANIMATION ---

const Reveal = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTranslateClass = () => {
    if (isVisible) return "translate-y-0 translate-x-0";
    switch (direction) {
      case "up": return "translate-y-8";
      case "down": return "-translate-y-8";
      case "left": return "translate-x-8";
      case "right": return "-translate-x-8";
      default: return "translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100" : "opacity-0"
        } ${getTranslateClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- MAIN APPLICATION COMPONENT ---

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all" aria-label="Hauptnavigation">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-sm group"
            onClick={() => window.scrollTo(0, 0)}
            aria-label="Zur Startseite"
          >
            <div className="flex flex-col items-start justify-center">
              <span className="font-serif text-[1.65rem] font-medium tracking-wide text-slate-900 leading-none group-hover:text-blue-900 transition-colors">
                LCG
              </span>
              <span className="text-[0.65rem] font-sans font-medium uppercase tracking-[0.3em] text-slate-500 leading-none mt-1.5 ml-[0.1rem]">
                Webdesign
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollTo('philosophie')} className="hover:text-blue-900 transition-colors">Philosophie</button>
            <button onClick={() => scrollTo('referenzen')} className="hover:text-blue-900 transition-colors">Referenzen</button>
            <button onClick={() => scrollTo('about')} className="hover:text-blue-900 transition-colors">Über mich</button>
            <button onClick={() => scrollTo('leistungen')} className="hover:text-blue-900 transition-colors">Leistungen</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-blue-900 transition-colors">FAQ</button>
            <button onClick={() => scrollTo('kontakt')} className="bg-blue-900 text-white px-5 py-2.5 rounded-sm hover:bg-blue-800 transition-colors">
              Gespräch vereinbaren
            </button>
          </div>

          <button
            className="md:hidden text-slate-900 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        <div className={`md:hidden bg-white border-b border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 flex flex-col gap-4 text-center">
            <button onClick={() => scrollTo('philosophie')} className="text-slate-600 py-2">Philosophie</button>
            <button onClick={() => scrollTo('referenzen')} className="text-slate-600 py-2">Referenzen</button>
            <button onClick={() => scrollTo('about')} className="text-slate-600 py-2">Über mich</button>
            <button onClick={() => scrollTo('leistungen')} className="text-slate-600 py-2">Leistungen</button>
            <button onClick={() => scrollTo('faq')} className="text-slate-600 py-2">FAQ</button>
            <button onClick={() => scrollTo('kontakt')} className="bg-blue-900 text-white px-5 py-3 rounded-sm w-full">
              Gespräch vereinbaren
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <Reveal>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Hochwertige Webseiten, <br className="hidden md:block" />
                die Vertrauen schaffen.
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Als Dienstleister im Gesundheits- und Wellnessbereich ist Ihre Website der erste Eindruck.
                Ich entwickle für Sie hochperformante, maßgeschneiderte Internetauftritte – kompromisslos optimiert für Smartphones und lokale Sichtbarkeit.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => scrollTo('kontakt')} className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white font-medium rounded-sm hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
                  Kostenlose Erstberatung <ArrowRight size={18} />
                </button>
                <button onClick={() => scrollTo('leistungen')} className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-medium border border-slate-200 rounded-sm hover:border-slate-300 hover:bg-slate-50 transition-all">
                  Meine Leistungen
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* --- WHY US / PHILOSOPHY --- */}
        <section id="philosophie" className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Reveal>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">
                  Warum Handarbeit den Unterschied macht
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Ich setze bewusst auf individuelle Entwicklung statt auf starre Baukastensysteme. Moderne Web-Technologien wie Astro.js und React ermöglichen es mir, Seiten zu erstellen, die durch minimale Ladezeiten und sauberen Code überzeugen. Damit schaffe ich für Sie ein hervorragendes technisches Fundament, um sich bei Google und gegenüber dem Wettbewerb klar zu positionieren.
                </p>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                delay={100}
                icon={<Zap size={28} className="text-blue-900" />}
                title="High-End-Performance"
                description="Baukästen laden oft unnötigen Code, der Ihre Webseite verlangsamt. Ich nutze die moderne Astro-Architektur für exzellente Effizienz: Blitzschnelle Ladezeiten ohne Ballast senken die Absprungrate und schaffen das ideale Fundament für ein starkes Google Ranking."
              />
              <FeatureCard
                delay={200}
                icon={<Code2 size={28} className="text-blue-900" />}
                title="Modulare Maßarbeit"
                description="Statt an starre Templates gebunden zu sein programmiere ich Ihre Seite individuell mit dem React-Framework. Sie erhalten ein einzigartiges und professionelles Website-Design mit größtmöglicher technischer Flexibilität, das sich exakt an Ihre Praxisprozesse anpasst."
              />
              <FeatureCard
                delay={300}
                icon={<ShieldCheck size={28} className="text-blue-900" />}
                title="Volle Unabhängigkeit"
                description="Keine monatliche Miete, kein Vendor-Lock-in. Ich räume Ihnen zeitlich und räumlich unbegrenzte Nutzungsrechte am Code ein. So behalten Sie dauerhaft die volle Kontrolle über Hosting, Skalierung und künftige Anpassungen, ohne an Abo-Modelle gebunden zu sein."
              />
              <FeatureCard
                delay={400}
                icon={<Search size={28} className="text-blue-900" />}
                title="Gezielte SEO-Optimierung"
                description="Baukästensysteme stoßen bei der Suchmaschinenoptimierung oft an Grenzen. Meine Strategie erlaubt die hochpräzise Steuerung relevanter technischer On-Page-Faktoren und schafft so ein exzellentes Fundament für Ihre regionale Sichtbarkeit bei Google."
              />
              <FeatureCard
                delay={500}
                icon={<Calendar size={28} className="text-blue-900" />}
                title="Nahtlose Integration"
                description="Ob Buchungswidgets von Doctolib, Jameda oder Treatwell – ich binde Ihre bestehenden Systeme nahtlos ein. Dank maßgeschneidertem Code bleibt Ihre Website dauerhaft flexibel erweiterbar und wächst mit nahezu grenzenlosem technischem Spielraum an Ihren neuen Anforderungen."
              />
              <FeatureCard
                delay={600}
                icon={<Smartphone size={28} className="text-blue-900" />}
                title="Konsequent Mobile-First"
                description="Ihre Patienten suchen heute überwiegend mobil. Ich entwickle konsequent primär für Smartphones: Ihre Website wird für mobile Endgeräte optimiert und passt sich flexibel und flüssig allen Bildschirmgrößen an. So navigieren Ihre Patienten intuitiv und können auch von unterwegs mühelos Termine buchen."
              />
            </div>
          </div>
        </section>

        {/* --- FEATURED REFERENCE --- */}
        <section id="referenzen" className="py-24 bg-slate-100 border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-blue-900 font-semibold tracking-wider uppercase text-sm mb-2 block">Ausgewähltes Projekt</span>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Ergebnisse, die für sich sprechen</h2>
                <p className="text-slate-600">
                  Ein Einblick in meine jüngste Arbeit. Hochperformant, fokussiert auf Neukundengewinnung und kompromisslos im Design.
                </p>
              </div>
            </Reveal>

            <div className="bg-white rounded-sm border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row items-center overflow-hidden max-w-6xl mx-auto">
              <div className="p-10 md:p-14 lg:w-1/2 flex flex-col justify-center">
                <Reveal delay={100} direction="right">
                  <div className="flex gap-3 mb-6">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">Physiotherapie & Massage</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">One-Pager</span>
                  </div>

                  <h3 className="font-serif text-3xl text-slate-900 mb-4">Bodywork Berlin</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Für Bodywork Berlin wurde ein umfassendes Redesign realisiert. Ziel war es, die veraltete Präsenz zu modernisieren, die Performance spürbar zu optimieren und die Seite durch ein SEO-optimiertes &quot;Mobile First&quot;-Design professionell in Szene zu setzen, individuell und präzise nach den Wünschen der Praxis.
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
                      * <a href="https://pagespeed.web.dev/analysis/https-bodywork-berlin-com/ii18pa7v1f?form_factor=desktop" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-500 transition-colors">Gemessen zum Launch</a>. Hinweis: Bei mobilen Leistungstests schwanken die Werte minimal, da Google standardmäßig eine langsame 4G-Verbindung simuliert (Drosselung).
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="lg:w-1/2 bg-slate-50 w-full h-full p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-100 relative overflow-hidden group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-100/50 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700"></div>
                <Reveal delay={300} direction="left">
                  <AutoScrollMockup />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT ME --- */}
        <section id="about" className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              <Reveal direction="right">
                <div className="relative">
                  <img
                    src="/webdesigner-berlin-praxen-salons-laurenz-gilbert.webp"
                    alt="Laurenz Gilbert - Webdesigner"
                    className="aspect-[3/4] md:aspect-square object-cover w-full bg-slate-200 rounded-sm border border-slate-200 relative z-10 shadow-sm"
                  />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white border border-slate-200 rounded-sm -z-10 hidden md:block"></div>
                </div>
              </Reveal>

              <Reveal direction="left" delay={100}>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">Ihr Partner für digitale Seriosität und messbaren Erfolg</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    Guten Tag, mein Name ist Laurenz Gilbert. Als Wirtschaftsinformatiker (B.Sc., Universität Potsdam) mit einem Abschluss von 1,7 und Masterstudent an der TU Berlin verbinde ich tiefgreifendes akademisches Know-how mit praktischer Anwendungsorientierung. Durch meine Tätigkeit am renommierten Hasso-Plattner-Institut (HPI) bin ich zudem stets am Puls modernster IT-Entwicklungen.
                  </p>
                  <p>
                    Meine Erfahrungen im Technologie-Umfeld bei Deloitte sowie der erfolgreiche Aufbau meines eigenen E-Commerce-Unternehmens haben mir gezeigt, worauf es bei professionellen und wirtschaftlich rentablen IT-Lösungen ankommt. Zudem kenne ich durch meine Mitarbeit in einer ärztlichen Praxis die spezifischen Abläufe und hohen Anforderungen des Gesundheitssektors aus erster Hand.
                  </p>
                  <p>
                    Diese gebündelte Expertise nutze ich heute, um für Ärzte, Therapeuten und Studios präzise, handprogrammierte Premium-Webseiten zu entwickeln. Mit modernsten Technologien auf Agentur-Niveau (wie Astro & React) sorge ich für exzellente Performance, die Ihre Praxis professionell repräsentiert und messbar zur Neukundengewinnung beiträgt.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 border-t border-slate-200">
              <Reveal delay={100}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-900 text-white rounded-sm flex items-center justify-center shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-slate-900 font-medium mb-1">Fundierte Expertise</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Ich biete Ihnen Wissen aus meinem Studium an der Uni Potsdam und TU Berlin sowie hochkarätige Erfahrung aus der Praxis bei Deloitte und am HPI.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-900 text-white rounded-sm flex items-center justify-center shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-slate-900 font-medium mb-1">Branchenverständnis</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Durch direkte Einblicke in ärztliche Praxisabläufe und eigene unternehmerische Erfolge verstehe ich Ihre geschäftlichen Anforderungen genau.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={300} className="sm:col-span-2 lg:col-span-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-900 text-white rounded-sm flex items-center justify-center shrink-0">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-slate-900 font-medium mb-1">Modernste Technik</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Ich programmiere für Sie auf Agentur-Niveau mit Astro & React für kompromisslose Performance, Sicherheit und blitzschnelle Ladezeiten.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* --- SERVICES / OFFERS --- */}
        <section id="leistungen" className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Investitionen in Ihre digitale Praxis</h2>
                <p className="text-slate-600">
                  Ich biete Ihnen transparente Lösungen, exakt zugeschnitten auf die Größe und Anforderungen Ihres Unternehmens. Jedes Projekt wird von mir persönlich mit höchster technischer Sorgfalt umgesetzt.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Digitale Visitenkarte */}
              <Reveal delay={100} direction="up" className="h-full">
                <div className="bg-slate-50 p-6 md:p-8 border border-slate-200 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col relative">
                  <div className="flex-grow flex flex-col relative z-10">
                    <div className="mb-6">
                      <h3 className="font-serif text-2xl text-slate-900 mb-1">Die Digitale Visitenkarte</h3>
                      <p className="text-slate-500 text-sm uppercase tracking-wide font-semibold mb-4">One-Pager</p>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-bold text-slate-900">ab 1.290 €</span>
                        <span className="text-sm text-slate-500 font-medium">zzgl. MwSt.</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      Die perfekte Lösung für spezialisierte Therapeuten oder Neugründungen. Alle wichtigen Informationen auf einer einzigen, hochoptimierten Seite.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <ListItem text={<><strong className="text-slate-900 font-semibold">1 hochoptimierte Hauptseite</strong> (zzgl. Rechtstexte)</>} />
                      <ListItem text={<><strong className="text-slate-900 font-semibold">Kompakte Leistungsübersicht</strong> (flüssig & schnell)</>} />
                      <ListItem text={<><strong className="text-slate-900 font-semibold">Technisches SEO-Fundament</strong> für die lokale Suche</>} />
                      <ListItem text={<><strong className="text-slate-900 font-semibold">Buchungs-Integration</strong> (Doctolib, Jameda etc.)</>} />
                      <ListItem text={<><strong className="text-slate-900 font-semibold">Kontakt & Google Maps</strong> für direkte Anfragen</>} />
                      <ListItem text={<><strong className="text-slate-900 font-semibold">0 € laufende Hosting-Kosten</strong> (moderne Cloud)</>} />
                      <ListItem text={<><strong className="text-slate-900 font-semibold">1 Korrekturschleife</strong> für optisches Feintuning</>} />
                      <ListItem text={<><strong className="text-slate-900 font-semibold">30 Tage</strong> Post-Launch-Support (für Bugfixes)</>} />
                    </ul>
                  </div>
                  <div className="mt-auto flex flex-col relative z-10 shrink-0">
                    <button onClick={() => scrollTo('kontakt')} className="w-full py-2.5 px-4 border-2 border-blue-900 bg-blue-900 text-white font-medium rounded-sm hover:bg-blue-800 transition-colors">
                      Details Anfragen
                    </button>
                  </div>
                </div>
              </Reveal>

              {/* Umfassende Praxis-Website */}
              <Reveal delay={200} direction="up" className="h-full">
                <div className="bg-[#0f172a] p-6 md:p-8 border border-slate-800 rounded-sm shadow-lg h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-20">
                    Beliebteste Wahl
                  </div>
                  <div className="flex-grow flex flex-col relative z-10">
                    <div className="mb-6">
                      <h3 className="font-serif text-2xl text-white mb-1">Umfassende Praxis-Website</h3>
                      <p className="text-blue-300 text-sm uppercase tracking-wide font-semibold mb-4">Multi-Pager</p>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-bold text-white">ab 2.290 €</span>
                        <span className="text-sm text-blue-300 font-medium">zzgl. MwSt.</span>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      Für etablierte Arztpraxen und Salons mit umfangreichem Leistungsangebot. Strukturierte Unterseiten für jede Dienstleistung.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <ListItem dark text={<><strong className="text-white font-semibold">Alles aus der Digitalen Visitenkarte</strong>, plus:</>} />
                      <ListItem dark text={<><strong className="text-white font-semibold">Bis zu 8 Unterseiten</strong> (für Ihre Leistungen)</>} />
                      <ListItem dark text={<><strong className="text-white font-semibold">Tiefgreifendes On-Page-SEO</strong> pro Unterseite</>} />
                      <ListItem dark text={<><strong className="text-white font-semibold">Ausführliches Team- & Praxisprofil</strong></>} />
                      <ListItem dark text={<><strong className="text-white font-semibold">Google Business Profil:</strong> Setup & Beratung</>} />
                      <ListItem dark text={<><strong className="text-white font-semibold">Mehrsprachigkeit:</strong> Englische Version auf Wunsch</>} />
                      <ListItem dark text={<><strong className="text-white font-semibold">2 Korrekturschleifen</strong> für maximale Präzision</>} />
                      <ListItem dark text={<><strong className="text-white font-semibold">60 Tage</strong> Post-Launch-Support (für Bugfixes)</>} />
                    </ul>
                  </div>
                  <div className="mt-auto flex flex-col relative z-10 shrink-0">
                    <button onClick={() => scrollTo('kontakt')} className="w-full py-2.5 px-4 border-2 border-blue-600 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50">
                      Details Anfragen
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* --- WARTUNGSPAKETE --- */}
            <div className="mt-24 max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center mb-12">
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-4">Optionale Wartungspakete</h3>
                  <p className="text-slate-600">
                    Lehnen Sie sich zurück. Ich kümmere mich um die Technik, Sicherheit und regelmäßige Updates Ihrer Website, damit Sie sich voll auf Ihre Patienten konzentrieren können.
                  </p>
                </div>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Basis Paket */}
                <Reveal delay={100} direction="up" className="h-full">
                  <div className="bg-white p-6 md:p-8 border border-slate-200 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="mb-6 border-b border-slate-100 pb-6">
                      <h4 className="font-serif text-xl text-slate-900 mb-2">Basis</h4>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-bold text-slate-900">29 €</span>
                        <span className="text-sm text-slate-500 font-medium">/ Monat (zzgl. MwSt.)</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      <ListItem text="Bis zu 2 Inhaltsänderungen/Monat" />
                      <ListItem text="Regelmäßige Updates (quartalsweise)" />
                      <ListItem text="Kontinuierliches Hosting-Monitoring" />
                    </ul>
                  </div>
                </Reveal>

                {/* Rundum-Sorglos Paket */}
                <Reveal delay={200} direction="up" className="h-full">
                  <div className="bg-blue-50/50 p-6 md:p-8 border border-blue-100 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-400"></div>
                    <div className="mb-6 border-b border-blue-100 pb-6">
                      <h4 className="font-serif text-xl text-blue-900 mb-2">Rundum-Sorglos</h4>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-bold text-blue-900">59 €</span>
                        <span className="text-sm text-blue-700 font-medium">/ Monat (zzgl. MwSt.)</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      <ListItem text="Bis zu 5 Inhaltsänderungen/Monat" />
                      <ListItem text="Quartalsweiser Performance-Report" />
                      <ListItem text="Google Search Console Auswertungen" />
                      <ListItem text="Prioritätssupport (Antwort < 24h)" />
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Häufig gestellte Fragen</h2>
                <p className="text-slate-600">Ich liefere Ihnen transparente Antworten auf die wichtigsten organisatorischen Aspekte.</p>
              </div>
            </Reveal>

            <div className="space-y-4">
              <AccordionItem
                question="Warum nutzen Sie keine Baukastensysteme?"
                answer="Standard-Lösungen sind oft überladen mit unnötigem Code, was sie langsam macht. Eine von mir handprogrammierte Seite ist extrem performant, bietet mir exakte Kontrolle über das Design und sendet positive Signale an Google. Zudem bin ich bei der Umsetzung nicht an die Limitierungen von Drittanbietern gebunden."
                delay={100}
              />
              <AccordionItem
                question="Ist die Website rechtssicher und DSGVO-konform?"
                answer="Ich bereite Ihre Website technisch so vor, dass sie die aktuellen Anforderungen der DSGVO erfüllt. Dazu gehört die technische Integration von Impressum, Datenschutzerklärung und eines Consent-Tools (Cookie-Banner). Bitte beachten Sie: Als Webdesigner darf ich keine Rechtsberatung durchführen. Die finale juristische Prüfung der Inhalte obliegt Ihnen als Seitenbetreiber."
                delay={200}
              />
              <AccordionItem
                question="Wie lange dauert die Erstellung meiner neuen Praxis-Website?"
                answer="Für einen One-Pager plane ich in der Regel 2 bis 3 Wochen ab Erhalt aller Materialien ein. Bei einem umfangreicheren Multi-Pager sollten Sie etwa 4 bis 6 Wochen für Konzept, Design, Programmierung und Abstimmung mit mir einplanen."
                delay={300}
              />
              <AccordionItem
                question="Kümmerst du dich auch um Wartung und Updates?"
                answer="Ja. Da ich auf moderne Webarchitekturen setze, sind die von mir erstellten Seiten von Grund auf sicherer und deutlich wartungsärmer als klassische CMS-Systeme (wie z.B. WordPress). Dennoch biete ich Ihnen auf Wunsch transparente Pflegepakete an, damit Sie sich vollständig auf Ihre Arbeit konzentrieren können."
                delay={400}
              />
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER & CTA --- */}
      <footer id="kontakt" className="bg-[#0f172a] text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-16 border-b border-slate-800 pb-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Bereit für Ihren digitalen Aufstieg?</h2>
              <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
                Als spezialisierter Webdesigner für Physiotherapeuten, Arztpraxen und Kosmetikstudios verstehe ich Ihre Anforderungen genau.
                Vereinbaren Sie ein unverbindliches Erstgespräch und lassen Sie uns besprechen, wie ich Ihre digitale Präsenz auf ein Premium-Niveau hebe.
              </p>
              <a href="mailto:kontakt@lcg-webdesign.de" className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors text-lg">
                <Mail size={20} className="text-blue-500" />
                kontakt@lcg-webdesign.de
              </a>
            </div>

            <div className="bg-slate-800/50 p-8 md:p-10 border border-slate-700 rounded-sm flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
              <h3 className="font-serif text-2xl text-white mb-3">Schreiben Sie mir direkt</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Klicken Sie auf den Button, um direkt eine E-Mail mit einer vorbereiteten Vorlage in Ihrem E-Mail-Programm zu öffnen. Ich antworte Ihnen in der Regel innerhalb von 24 Stunden.
              </p>

              <a
                href="mailto:kontakt@lcg-webdesign.de?subject=Unverbindliche%20Anfrage%20-%20Webdesign&body=Hallo%20Herr%20Gilbert%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20eine%20neue%20Website%20und%20h%C3%A4tte%20gerne%20weitere%20Informationen.%0A%0AHier%20sind%20meine%20Kontaktdaten%3A%0AName%3A%20%0APraxis%2FUnternehmen%3A%20%0ATelefonnummer%20f%C3%BCr%20R%C3%BCckruf%3A%20%0A%0AViele%20Gr%C3%BC%C3%9Fe"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 px-6 rounded-sm transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                E-Mail Vorlage öffnen
              </a>

              <div className="mt-8 text-center pt-6 border-t border-slate-700/50">
                <p className="text-xs text-slate-500 mb-1">Oder manuell kopieren:</p>
                <p className="text-slate-300 font-medium select-all cursor-pointer hover:text-white transition-colors">
                  kontakt@lcg-webdesign.de
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Code2 size={16} />
              <span>Handcrafted by Laurenz Gilbert</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex gap-6">
                <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
                <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
                <a href="/agb" className="hover:text-white transition-colors">AGB</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-500 text-center md:text-left">
            Die Marken Doctolib, Jameda und Treatwell sind Eigentum ihrer jeweiligen Inhaber. Die Nennung dient lediglich der Beschreibung der technischen Integrationsmöglichkeiten.
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUBCOMPONENTS ---

function FeatureCard({ icon, title, description, delay }) {
  return (
    <Reveal delay={delay} className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-sm hover:shadow-sm transition-all hover:bg-white group">
      <div className="w-14 h-14 bg-blue-50 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="font-serif text-xl text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </Reveal>
  );
}

function ListItem({ text, highlight, dark = false }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle size={18} className={`shrink-0 mt-0.5 ${dark ? 'text-blue-400' : 'text-blue-900'}`} />
      <span className={`text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
        {highlight && <strong className={`${dark ? 'text-white' : 'text-slate-900'} font-semibold mr-1`}>{highlight}</strong>}
        {text}
      </span>
    </li>
  );
}

function AccordionItem({ question, answer, delay }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <div className="border border-slate-200 rounded-sm bg-white overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:bg-slate-50"
          aria-expanded={isOpen}
        >
          <span className="font-serif text-lg text-slate-900 pr-8">{question}</span>
          <ChevronDown
            size={20}
            className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
        <div
          className="grid transition-all duration-300 ease-in-out"
          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed border-t border-slate-100">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function AutoScrollMockup() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasInteracted = useRef(false);
  const exactScrollPos = useRef(0);
  const currentSpeed = useRef(0);
  const delayPassed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      delayPassed.current = true;
    } else {
      delayPassed.current = false;
    }
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId;
    const scrollContainer = scrollRef.current;

    const scrollStep = () => {
      if (hasInteracted.current) return;

      if (scrollContainer && isVisible && delayPassed.current) {
        if (currentSpeed.current < 0.35) {
          currentSpeed.current += 0.002;
        }

        exactScrollPos.current += currentSpeed.current;
        scrollContainer.scrollTop = exactScrollPos.current;

        if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight - 1) {
          exactScrollPos.current = 0;
          scrollContainer.scrollTop = 0;
          currentSpeed.current = 0;
        }
      } else {
        currentSpeed.current = 0;
        if (scrollContainer) {
          exactScrollPos.current = scrollContainer.scrollTop;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible]);

  const handleUserInteraction = () => {
    hasInteracted.current = true;
  };

  return (
    <div ref={containerRef} className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl ring-1 ring-slate-900/50">
      <div className="absolute top-24 -left-1 w-1 h-10 bg-slate-800 rounded-l-md"></div>
      <div className="absolute top-36 -left-1 w-1 h-10 bg-slate-800 rounded-l-md"></div>
      <div className="absolute top-32 -right-1 w-1 h-14 bg-slate-800 rounded-r-md"></div>

      <div className="relative w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden border-[3px] border-slate-950">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20 pointer-events-none flex items-center justify-end px-2">
          <div className="w-2.5 h-2.5 bg-slate-800 rounded-full border border-slate-700/50"></div>
        </div>

        <div
          ref={scrollRef}
          className="absolute inset-0 bg-white overflow-y-scroll no-scrollbar"
          onWheel={handleUserInteraction}
          onTouchStart={handleUserInteraction}
          onMouseDown={handleUserInteraction}
        >
          <img
            src="/webdesign-berlin-bodywork-praxis-beispiel-mobile.webp"
            alt="Bodywork Berlin Mobile Screenshot"
            className="w-full h-auto block pointer-events-none select-none"
          />
        </div>
      </div>
    </div>
  );
}