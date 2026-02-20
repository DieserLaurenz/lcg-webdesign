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
  Timer
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
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTranslateClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- MAIN APPLICATION COMPONENT ---

export default function AgencySite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll handler for anchor links
  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all" aria-label="Hauptnavigation">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-sm group" 
            onClick={() => window.scrollTo(0,0)}
            aria-label="Zur Startseite"
          >
            {/* Seriöses, minimalistisches Typografie-Logo */}
            <div className="flex flex-col items-start justify-center">
              <span className="font-serif text-[1.65rem] font-medium tracking-wide text-slate-900 leading-none group-hover:text-blue-900 transition-colors">
                LCG
              </span>
              <span className="text-[0.65rem] font-sans font-medium uppercase tracking-[0.3em] text-slate-500 leading-none mt-1.5 ml-[0.1rem]">
                Webdesign
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-900 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
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
              Ich entwickle hochperformante, maßgeschneiderte Internetauftritte – kompromisslos optimiert für Smartphones und lokale Sichtbarkeit.
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
                Ich verzichte bewusst auf schwerfällige Standard-Lösungen und Baukastensysteme. 
                Moderne Web-Technologien (Astro.js & React) ermöglichen es mir, Seiten zu bauen, 
                die extrem schnell laden, technisch einwandfrei sind und bei Google den entscheidenden Vorteil bieten.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              delay={100}
              icon={<Smartphone size={28} className="text-blue-900" />}
              title="Konsequent Mobile-First"
              description="Über 80% Ihrer potenziellen Patienten und Kunden suchen heute über das Smartphone. Meine Designs werden primär für mobile Endgeräte konzipiert und bieten dort ein perfektes Nutzungserlebnis."
            />
            <FeatureCard 
              delay={200}
              icon={<Zap size={28} className="text-blue-900" />}
              title="Maximale Performance"
              description="Ladezeiten entscheiden über den Absprung. Dank modernster Code-Architektur ohne unnötigen Ballast laden meine Seiten in Millisekunden – ein massiver Vorteil für Ihre Google-Platzierung."
            />
            <FeatureCard 
              delay={300}
              icon={<Calendar size={28} className="text-blue-900" />}
              title="Nahtlose Integrationen"
              description="Ob Doctolib, Treatwell oder andere Buchungssysteme: Ich binde Ihre bestehende Terminsoftware nahtlos und professionell ein, sodass der Buchungsprozess für Kunden reibungslos abläuft."
            />
            <FeatureCard 
              delay={400}
              icon={<MapPin size={28} className="text-blue-900" />}
              title="Lokale Sichtbarkeit"
              description="Ich bereite Ihre Seite technisch ideal für Local SEO vor. Strukturierte Daten und optimierte Ladegeschwindigkeiten bilden das Fundament, um in Ihrer Region optimal gefunden zu werden."
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
            
            {/* Left Content Side */}
            <div className="p-10 md:p-14 lg:w-1/2 flex flex-col justify-center">
              <Reveal delay={100} direction="right">
                <div className="flex gap-3 mb-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">Physiotherapie & Massage</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">Premium-Website</span>
                </div>
                
                <h3 className="font-serif text-3xl text-slate-900 mb-4">Bodywork Berlin</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Für Bodywork Berlin wurde eine vollständig neue, digitale Präsenz geschaffen. Ziel war es, die Terminbuchung zu digitalisieren und die Praxis durch exzellentes lokales SEO und kompromisslose Performance als Premium-Dienstleister in der Region zu positionieren.
                </p>

                {/* Metrics */}
                <div className="space-y-5 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 shrink-0">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold">100 / 100 Performance Score</p>
                      <p className="text-sm text-slate-500">Google Lighthouse Bestnote</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 shrink-0">
                      <Timer size={24} />
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold">&lt; 0.5s Ladezeit</p>
                      <p className="text-sm text-slate-500">Dank moderner Code-Architektur</p>
                    </div>
                  </div>
                </div>

                <a href="https://bodywork.pages.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-900 font-medium hover:text-blue-700 transition-colors group">
                  Live-Seite ansehen 
                  <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </Reveal>
            </div>

            {/* Right Side - Smartphone Mockup */}
            <div className="lg:w-1/2 bg-slate-50 w-full h-full p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-100 relative overflow-hidden group">
              {/* Decorative background circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-100/50 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              
              <Reveal delay={300} direction="left">
                {/* Device Frame */}
                <div className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-900/50">
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-3xl w-36 mx-auto z-20"></div>
                  
                  {/* Screen */}
                  <div className="absolute inset-0 bg-white">
                    {/* Placeholder for the screenshot. Replace the inner div with an <img> tag later */}
                    <div className="w-full h-full bg-slate-200 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-1000 ease-out">
                      <span className="font-serif text-lg">Screenshot</span>
                      <span className="text-xs mt-2 text-center px-4">Hier kommt ein Bild<br/>der mobilen Ansicht rein</span>
                    </div>
                    {/* If you have a screenshot image, use this instead: */}
                    {/* <img src="/pfad-zum-screenshot-mobil.jpg" alt="Referenz Mobilansicht" className="w-full h-auto object-cover group-hover:translate-y-[-10%] transition-transform duration-[3000ms] ease-out" /> */}
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* --- ABOUT ME --- */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <div className="relative">
                {/* Image Placeholder */}
                <div className="aspect-[3/4] md:aspect-square bg-white rounded-sm border border-slate-200 flex flex-col items-center justify-center text-slate-400 relative z-10">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-slate-500 font-serif text-2xl">Foto</span>
                  </div>
                  <p className="text-sm">[Platzhalter für professionelles Portrait]</p>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white border border-slate-200 rounded-sm -z-10 hidden md:block"></div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">Ihr Partner für digitale Seriosität</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Guten Tag, mein Name ist Laurenz Gilbert. Mein Studium der Wirtschaftsinformatik an der Universität Potsdam habe ich mit einem 1er-Schnitt abgeschlossen. So verbinde ich als 24-jähriger IT-Experte modernstes akademisches Know-how mit einem klaren Verständnis für Ihre geschäftlichen Anforderungen.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Durch meine Erfahrungen in der Unternehmensberatung bei Deloitte und meine aktuelle Tätigkeit am renommierten Hasso-Plattner-Institut (HPI) weiß ich, worauf es bei professionellen IT-Lösungen ankommt. Diese Expertise nutze ich parallel, um Ärzten, Therapeuten und Studios präzise, handprogrammierte Premium-Webseiten zu entwickeln, die durch exzellente Performance und mobile Bedienbarkeit messbar zur Neukundengewinnung beitragen.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                <div>
                  <h3 className="font-serif text-slate-900 font-medium mb-1">Fundierte Expertise</h3>
                  <p className="text-sm text-slate-500">Studium Wirtschaftsinformatik (Uni Potsdam, 1er-Schnitt). Praxis bei Deloitte & HPI.</p>
                </div>
                <div>
                  <h3 className="font-serif text-slate-900 font-medium mb-1">Modernste Technik</h3>
                  <p className="text-sm text-slate-500">Programmierung auf Agentur-Niveau (Astro & React).</p>
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
                Transparente Lösungen, exakt zugeschnitten auf die Größe und Anforderungen Ihres Unternehmens. Jedes Projekt wird von mir persönlich mit höchster technischer Sorgfalt umgesetzt.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Package 1 */}
            <Reveal delay={100} direction="up" className="h-full">
              <div className="bg-slate-50 p-8 md:p-10 border border-slate-200 rounded-sm shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl text-slate-900 mb-2">Die Digitale Visitenkarte</h3>
                  <p className="text-slate-500 text-sm uppercase tracking-wide font-semibold mb-4">One-Pager</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-slate-900">ab 1.490 €</span>
                    <span className="text-sm text-slate-500 font-medium">zzgl. MwSt.</span>
                  </div>
                </div>
                <p className="text-slate-600 mb-8">
                  Die perfekte, hochseriöse Lösung für kleine Kosmetikstudios, spezialisierte Therapeuten oder Neugründungen. Alle wichtigen Informationen kompakt, elegant und verkaufsstark auf einer Seite gebündelt.
                </p>
                <ul className="space-y-4 mb-10 flex-grow">
                  <ListItem text="Individuelles Premium-Design (Kein Template)" />
                  <ListItem text="Konsequente Mobile-First Umsetzung" />
                  <ListItem text="Integration Online-Terminbuchung" />
                  <ListItem text="Integration Google Maps / Anfahrt" />
                  <ListItem text="Technisches SEO Fundament" />
                  <ListItem text="Standardgemäße DSGVO-Vorbereitung" />
                </ul>
                <button onClick={() => scrollTo('kontakt')} className="w-full py-3 px-4 border border-blue-900 text-blue-900 font-medium rounded-sm hover:bg-blue-50 transition-colors">
                  Details anfragen
                </button>
              </div>
            </Reveal>

            {/* Package 2 */}
            <Reveal delay={200} direction="up" className="h-full">
              <div className="bg-[#0f172a] p-8 md:p-10 border border-slate-800 rounded-sm shadow-lg h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Beliebteste Wahl
                </div>
                <div className="mb-6 relative z-10">
                  <h3 className="font-serif text-2xl text-white mb-2">Umfassende Praxis-Website</h3>
                  <p className="text-blue-300 text-sm uppercase tracking-wide font-semibold mb-4">Multi-Pager</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">ab 2.990 €</span>
                    <span className="text-sm text-blue-300 font-medium">zzgl. MwSt.</span>
                  </div>
                </div>
                <p className="text-slate-300 mb-8 relative z-10">
                  Für etablierte Arztpraxen, größere Wellness-Einrichtungen und Salons mit umfangreichem Leistungsangebot. Strukturierte Unterseiten für jede Dienstleistung zur maximalen Informationsvermittlung.
                </p>
                <ul className="space-y-4 mb-10 flex-grow relative z-10">
                  <ListItem text="Alles aus der Digitalen Visitenkarte" dark />
                  <ListItem text="Dedizierte Unterseiten pro Leistungsbereich" dark />
                  <ListItem text="Erweitertes Team- & Praxis-Vorstellungsprofil" dark />
                  <ListItem text="Erweiterte Vorbereitung für Lokales SEO" dark />
                  <ListItem text="Schnellste Ladezeiten durch Astro.js Architektur" dark />
                </ul>
                <button onClick={() => scrollTo('kontakt')} className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-500 transition-colors relative z-10">
                  Details anfragen
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Häufig gestellte Fragen</h2>
              <p className="text-slate-600">Transparente Antworten auf die wichtigsten organisatorischen Aspekte.</p>
            </div>
          </Reveal>

          <div className="space-y-4">
            <AccordionItem 
              question="Warum nutzen Sie keine Baukastensysteme?"
              answer="Standard-Lösungen sind oft überladen mit unnötigem Code, was sie langsam macht. Eine handprogrammierte Seite ist extrem performant, bietet exakte Kontrolle über das Design und sendet positive Signale an Suchmaschinen wie Google. Zudem bin ich bei der Umsetzung nicht an die Limitierungen von Drittanbietern gebunden."
              delay={100}
            />
            <AccordionItem 
              question="Ist die Website rechtssicher und DSGVO-konform?"
              answer="Die technische Integration von Impressum, Datenschutzerklärung und rechtskonformen Cookie-Bannern gehört bei mir zum absoluten Standard. Ich bereite die technische Infrastruktur so vor, dass die Vorgaben der DSGVO erfüllt werden (Hinweis: Dies ersetzt keine juristische Einzelfallprüfung)."
              delay={200}
            />
            <AccordionItem 
              question="Wie lange dauert die Erstellung meiner neuen Praxis-Website?"
              answer="Für einen One-Pager plane ich in der Regel 2 bis 3 Wochen ab Erhalt aller Materialien (Texte, Bilder) ein. Bei einem umfangreicheren Multi-Pager sollten Sie etwa 4 bis 6 Wochen für Konzept, Design, Programmierung und Abstimmung einplanen."
              delay={300}
            />
            <AccordionItem 
              question="Kümmern Sie sich auch um Wartung und Updates?"
              answer="Ja. Da ich auf moderne Webarchitekturen setze, sind meine Seiten von Grund auf sicherer und wartungsärmer als klassische CMS-Systeme. Dennoch biete ich auf Wunsch transparente Pflegepakete an, damit Sie sich vollständig auf Ihre Praxis oder Ihr Studio konzentrieren können."
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
                Als spezialisierter Webdesigner für <strong className="text-slate-300 font-semibold">Physiotherapeuten, Arztpraxen, Kosmetikstudios und Massagesalons</strong> verstehe ich Ihre Anforderungen genau. 
                Vereinbaren Sie ein unverbindliches Erstgespräch und lassen Sie uns besprechen, wie ich Ihre digitale Präsenz auf ein Premium-Niveau hebe.
              </p>
              <a href="mailto:hallo@lcg-webdesign.de" className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors text-lg">
                hallo@lcg-webdesign.de
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-8 border border-slate-700 rounded-sm">
              <h3 className="font-serif text-xl text-white mb-6">Gespräch anfragen</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Name / Praxis</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Ihre Praxis oder Ihr Name" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">E-Mail Adresse</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="mail@beispiel.de" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-sm transition-colors mt-2">
                  Unverbindlich anfragen
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Ihre Daten werden vertraulich behandelt und verschlüsselt übertragen.
                </p>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Code2 size={16} />
              <span>Handcrafted by LCG Webdesign</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">AGB</a>
            </div>
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

function ListItem({ text, dark = false }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle size={20} className={`shrink-0 mt-0.5 ${dark ? 'text-blue-400' : 'text-blue-900'}`} />
      <span className={dark ? 'text-slate-300' : 'text-slate-700'}>{text}</span>
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