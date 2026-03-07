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
import { faqData } from './src/data/faqData.js';

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
  const FORM_STORAGE_KEY = 'gilbertContactForm';
  const FORM_STORAGE_OPT_IN_KEY = 'gilbertContactFormAutosaveOptIn';

  // Kontaktformular State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    rueckrufzeit: '',
    interessiert_an: '',
    website: '',
    tools: '',
    anliegen: '',
    unternehmerBestaetigt: false,
    datenschutzAkzeptiert: false
  });
  const [saveFormOnDevice, setSaveFormOnDevice] = useState(false);
  const [hasSavedFormPreference, setHasSavedFormPreference] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  // Einwilligung und ggf. gespeicherte Formulardaten laden
  useEffect(() => {
    const savedPreference = localStorage.getItem(FORM_STORAGE_OPT_IN_KEY);
    const hasStoredPreference = savedPreference !== null;
    const hasOptedIn = savedPreference === 'true';
    setHasSavedFormPreference(hasStoredPreference);
    setSaveFormOnDevice(hasOptedIn);

    if (!hasOptedIn) {
      localStorage.removeItem(FORM_STORAGE_KEY);
      return;
    }

    const savedData = localStorage.getItem(FORM_STORAGE_KEY);
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {
        console.error('Fehler beim Laden der Formulardaten', e);
      }
    }
  }, []);
  // Einwilligung für lokale Zwischenspeicherung merken
  useEffect(() => {
    if (!hasSavedFormPreference) return;
    localStorage.setItem(FORM_STORAGE_OPT_IN_KEY, saveFormOnDevice ? 'true' : 'false');
    if (!saveFormOnDevice) {
      localStorage.removeItem(FORM_STORAGE_KEY);
    }
  }, [saveFormOnDevice, hasSavedFormPreference]);

  // Formulardaten nur nach aktivem Opt-in speichern
  useEffect(() => {
    if (!saveFormOnDevice) return;
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
  }, [formData, saveFormOnDevice]);
  const [formError, setFormError] = useState('');

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSavePreferenceChange = (e) => {
    setHasSavedFormPreference(true);
    setSaveFormOnDevice(e.target.checked);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          telefon: formData.telefon,
          rueckrufzeit: formData.rueckrufzeit,
          interessiert_an: formData.interessiert_an,
          website: formData.website,
          tools: formData.tools,
          anliegen: formData.anliegen,
          unternehmerBestaetigt: formData.unternehmerBestaetigt,
          datenschutzAkzeptiert: formData.datenschutzAkzeptiert,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          telefon: '',
          rueckrufzeit: '',
          interessiert_an: '',
          website: '',
          tools: '',
          anliegen: '',
          unternehmerBestaetigt: false,
          datenschutzAkzeptiert: false
        });
        localStorage.removeItem(FORM_STORAGE_KEY);
      } else {
        throw new Error(result.message || 'Fehler beim Senden');
      }
    } catch (error) {
      setFormStatus('error');
      setFormError('Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.');
    }
  };

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
                description="Keine monatliche Miete, kein Vendor-Lock-in. Ich räume Ihnen zeitlich und räumlich unbegrenzte Nutzungsrechte am individuell für Sie erstellten Code ein. So behalten Sie dauerhaft die volle Kontrolle über Hosting, Skalierung und künftige Anpassungen."
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
                description="Ob Doctolib, Jameda oder Treatwell – ich verknüpfe Ihre Website mit Ihren bestehenden Buchungssystemen, sodass Patienten mit einem Klick zur Terminbuchung gelangen. Dank maßgeschneidertem Code bleibt Ihre Website dauerhaft flexibel erweiterbar und wächst mit nahezu grenzenlosem technischem Spielraum an Ihren neuen Anforderungen."
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
                        <span className="text-4xl font-bold text-slate-900">1.290 €</span>
                        <span className="text-sm text-slate-500 font-medium">zzgl. MwSt.</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      Die ideale Lösung für spezialisierte Therapeuten oder Neugründungen. Ich bündele alle relevanten Informationen auf einer einzigen, hochoptimierten Seite, die Ihre Expertise kompakt und absolut überzeugend präsentiert.
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
                        <span className="text-4xl font-bold text-white">2.290 €</span>
                        <span className="text-sm text-blue-300 font-medium">zzgl. MwSt.</span>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      Für etablierte Praxen und Studios mit umfangreichem Angebot. Ich entwickle eine strukturierte Website mit dedizierten Unterseiten für jede Leistung, um Patienten optimal zu informieren und Ihre Sichtbarkeit nachhaltig zu stärken.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <ListItem dark text={<><strong className="text-white font-semibold">Alles aus der Digitalen Visitenkarte</strong>, zusätzlich:</>} />
                      <ListItem dark text={<><strong className="text-white font-semibold">Bis zu 8 Unterseiten</strong> (für Ihre Leistungen)</>} />
                      <ListItem dark text={<><strong className="text-white font-semibold">Tiefgreifendes On-Page-SEO</strong> pro Unterseite</>} />
                      <ListItem dark text={<><strong className="text-white font-semibold">Ausführliches Team- & Praxisprofil</strong></>} />
                      <ListItem dark text={<><strong className="text-white font-semibold">Google Business Profil:</strong> Setup & Beratung</>} />
                      <ListItem dark text={<><strong className="text-white font-semibold">Optional:</strong> Webseite auch auf Englisch verfügbar machen</>} />
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

            {/* Elegant B2B Disclaimer */}
            <Reveal delay={300} direction="up">
              <div className="max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-slate-400 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-blue-900/40" />
                  <span>Alle Preise richten sich ausschließlich an B2B-Kunden (Praxen, Unternehmen, Freiberufler).</span>
                </div>
              </div>
            </Reveal>

            {/* --- WARTUNGSPAKETE --- */}
            <div className="mt-24 max-w-5xl mx-auto">
              <Reveal>
                <div className="text-center mb-12">
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-4">Fortlaufende Betreuung</h3>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    Sie möchten Ihre Seite selbst verwalten, aber bei technischen Fragen nicht alleine dastehen? Mit meinem Rundum-Sorglos-Paket bleibe ich Ihr persönlicher Ansprechpartner.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100} direction="up">
                <div className="bg-white border border-slate-200 rounded-sm shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row overflow-hidden group relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-blue-600 z-10"></div>

                  {/* Left Column - Highlighted */}
                  <div className="w-full lg:w-4/12 bg-gradient-to-br from-slate-50 to-white border-b lg:border-b-0 lg:border-r border-slate-200 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-slate-200/40 rounded-full blur-2xl -z-10"></div>

                    <div className="mb-4">
                       <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-[0.65rem] font-bold uppercase tracking-wider rounded-sm mb-4">Optional zubuchbar</span>
                       <h4 className="font-serif text-2xl md:text-3xl text-slate-900 mb-2">Rundum-Sorglos-Paket</h4>
                       <p className="text-slate-500 text-sm">Ihr Webmaster auf Abruf</p>
                    </div>

                    <div className="mt-4 pt-6 border-t border-slate-200/60">
                      <div className="flex items-baseline gap-1.5 mb-1">
                        <span className="text-4xl md:text-5xl font-bold text-slate-900">59 €</span>
                        <span className="text-slate-500 font-medium">/ Monat</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-xs text-slate-400">zzgl. gesetzlicher MwSt.</p>
                        <p className="text-xs text-slate-400">Kündbar mit 14 Tagen Frist zum Monatsende. Keine Mindestlaufzeit.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Features */}
                  <div className="w-full lg:w-8/12 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                    <ul className="space-y-4 w-full mb-6">
                      <ListItem text={<><strong className="text-slate-900 font-semibold">Technischer Support</strong> zu Hosting, Domain und CMS-System</>} />
                      <ListItem text={<><strong className="text-slate-900 font-semibold">Reaktionszeit</strong> in der Regel 1-2 Werktage</>} />
                      <ListItem text={<><strong className="text-slate-900 font-semibold">Support inklusive</strong> bis zu 30 Minuten pro Monat</>} />
                      <ListItem text={<><strong className="text-slate-900 font-semibold">1 optische Änderung pro Monat</strong> inklusive (max. 30 Minuten)</>} />
                      <ListItem text={<><strong className="text-slate-900 font-semibold">Gesamt inklusive</strong> bis zu 60 Minuten pro Monat</>} />
                      <ListItem text={<span className="text-slate-500">Weitere Leistungen nach Aufwand (95 € netto/Stunde)</span>} />
                    </ul>
                    <div className="pt-5 border-t border-slate-100">
                      <p className="text-[0.65rem] text-slate-400 md:whitespace-nowrap">
                        Hinweis: Nicht genutzte Inklusivminuten verfallen am Monatsende. Details zu den Leistungen finden Sie in den <a href="/agb" className="underline hover:text-slate-600 transition-colors">AGB</a>.
                      </p>
                    </div>
                  </div>
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
                <p className="text-slate-600">Transparente Antworten zu Ablauf, Kosten und technischen Details Ihrer neuen Praxis-Website.</p>
              </div>
            </Reveal>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  delay={(index + 1) * 100}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER & CTA --- */}
      <footer id="kontakt" className="bg-[#0f172a] text-slate-300 pt-20 pb-10 relative overflow-hidden">
        {/* Decorative background glow (subtle) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-sm p-8 md:p-12 mb-16 shadow-lg shadow-slate-900/50 max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                   <Mail className="text-blue-400 w-6 h-6" />
                </div>
                <h2 className="font-serif text-2xl md:text-4xl text-white mb-4">Bereit für Ihren digitalen Aufstieg?</h2>
                <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                  Lassen Sie uns unverbindlich besprechen, wie wir Ihre Patientenanfragen messbar steigern.
                </p>
              </div>

              {formStatus === 'success' ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-sm p-6 mb-8 text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-400 w-6 h-6" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">Vielen Dank für Ihre Anfrage!</h3>
                  <p className="text-slate-400 text-sm">
                    Ich melde mich in der Regel innerhalb von 24 Stunden (werktags) bei Ihnen.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-4 text-blue-400 hover:text-blue-300 text-sm underline transition-colors"
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              ) : (
                <form className="space-y-4 mb-8" onSubmit={handleFormSubmit}>
                  <div className="flex items-center justify-end mb-6">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <span className="text-slate-500 text-xs font-medium group-hover:text-slate-300 transition-colors">
                        Entwurf lokal speichern
                      </span>
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={saveFormOnDevice}
                          onChange={handleSavePreferenceChange}
                          disabled={formStatus === 'submitting'}
                        />
                        <div className="w-8 h-4 bg-slate-800/80 rounded-full peer-checked:bg-blue-600 transition-colors duration-300 border border-slate-600/50 peer-checked:border-blue-500 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/50 disabled:opacity-50"></div>
                        <div className="absolute left-[2px] w-3 h-3 bg-slate-400 rounded-full transition-all duration-300 peer-checked:translate-x-4 peer-checked:bg-white disabled:opacity-50"></div>
                      </div>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">E-Mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium text-slate-300 mb-1.5">Telefon <span className="text-slate-500 font-normal">(optional)</span></label>
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleFormChange}
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                    <div>
                      <label htmlFor="rueckrufzeit" className="block text-sm font-medium text-slate-300 mb-1.5">Beste Rückrufzeit <span className="text-slate-500 font-normal">(optional)</span></label>
                      <input
                        type="text"
                        id="rueckrufzeit"
                        name="rueckrufzeit"
                        value={formData.rueckrufzeit}
                        onChange={handleFormChange}
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                        placeholder="z.B. Vormittags, ab 17 Uhr..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-slate-300 mb-1.5">Bestehende Website / Domain <span className="text-slate-500 font-normal">(optional)</span></label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleFormChange}
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                      placeholder="z.B. www.meine-praxis.de"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="interessiert_an" className="block text-sm font-medium text-slate-300 mb-1.5">Interessiert an</label>
                      <CustomSelect
                        id="interessiert_an"
                        name="interessiert_an"
                        value={formData.interessiert_an}
                        onChange={handleFormChange}
                        required
                        disabled={formStatus === 'submitting'}
                        placeholder="Bitte auswählen..."
                        options={[
                          { value: 'Digitale Visitenkarte (One-Pager)', label: 'Digitale Visitenkarte (One-Pager)' },
                          { value: 'Umfassende Praxis-Website (Multi-Pager)', label: 'Umfassende Praxis-Website (Multi-Pager)' },
                          { value: 'Wartung & Support', label: 'Wartung / Rundum-Sorglos-Paket' },
                          { value: 'Anderes Anliegen', label: 'Anderes Anliegen' }
                        ]}
                      />
                    </div>

                    <div>
                      <label htmlFor="tools" className="block text-sm font-medium text-slate-300 mb-1.5">Gewünschte Tool-Integrationen <span className="text-slate-500 font-normal">(optional)</span></label>
                      <input
                        type="text"
                        id="tools"
                        name="tools"
                        value={formData.tools}
                        onChange={handleFormChange}
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                        placeholder="z.B. Doctolib, Jameda, Treatwell..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="anliegen" className="block text-sm font-medium text-slate-300 mb-1.5">Projekt / Anliegen</label>
                    <textarea
                      id="anliegen"
                      name="anliegen"
                      rows="4"
                      value={formData.anliegen}
                      onChange={handleFormChange}
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none disabled:opacity-50"
                      placeholder="Beschreiben Sie kurz Ihr Vorhaben oder lassen Sie eine Nachricht da..."
                    ></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-sm p-3 text-red-400 text-sm">
                      {formError}
                    </div>
                  )}

                  <div className="bg-blue-900/20 border border-blue-900/30 rounded-sm p-3 text-slate-300 text-xs flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <p>Bitte geben Sie in diesem Formular <strong>keine sensiblen Gesundheitsdaten</strong> (wie Diagnosen oder Behandlungsdetails)&nbsp;an.</p>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="unternehmerBestaetigt"
                      checked={formData.unternehmerBestaetigt}
                      onChange={handleFormChange}
                      required
                      disabled={formStatus === 'submitting'}
                      className="mt-0.5 w-4 h-4 rounded-sm border-slate-600 bg-slate-900/50 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900 disabled:opacity-50 cursor-pointer shrink-0"
                    />
                    <span className="text-slate-400 text-xs leading-relaxed">
                      Ich handle als Unternehmer im Sinne des <strong>§ 14 BGB</strong> und nicht als Verbraucher.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group pb-2">
                    <input
                      type="checkbox"
                      name="datenschutzAkzeptiert"
                      checked={formData.datenschutzAkzeptiert}
                      onChange={handleFormChange}
                      required
                      disabled={formStatus === 'submitting'}
                      className="mt-0.5 w-4 h-4 rounded-sm border-slate-600 bg-slate-900/50 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900 disabled:opacity-50 cursor-pointer shrink-0"
                    />
                    <span className="text-slate-400 text-xs leading-relaxed">
                      Ich habe die <a href="/datenschutz" className="text-blue-400 hover:text-blue-300 underline transition-colors" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> zur Kenntnis genommen.
                    </span>
                  </label>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 px-8 rounded-sm transition-all shadow-md shadow-blue-900/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          Kostenloses Erstgespräch anfragen <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-slate-400 text-xs flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      Antwort in der Regel innerhalb von 24h werktags
                    </p>
                  </div>
                </form>
              )}

              <div className="text-center border-t border-slate-700/50 pt-6">
                <p className="text-slate-400 text-sm">
                  Oder per E-Mail: <a href="mailto:kontakt@gilbert-webdesign.de" className="text-blue-400 hover:text-blue-300 transition-colors">kontakt@gilbert-webdesign.de</a>
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 mb-8">
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
            
            <div className="flex gap-6 text-sm">
              <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
              <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="/agb" className="hover:text-white transition-colors">AGB</a>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-800/80 text-[0.7rem] text-slate-500 text-center md:text-left flex flex-col gap-2 leading-relaxed">
            <p>Alle Angebote auf dieser Webseite richten sich ausschließlich an Gewerbetreibende, Freiberufler sowie juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen (B2B). Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.</p>
            <p>Die Marken Doctolib, Jameda und Treatwell sind Eigentum ihrer jeweiligen Inhaber. Die Nennung dient lediglich der Beschreibung der technischen Integrationsmöglichkeiten.</p>
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

function CustomSelect({ options, value, onChange, placeholder, disabled, id, required }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative" ref={selectRef}>
      {/* Hidden native select for form validation/submission via web3forms */}
      <select id={id} name={id} required={required} value={value} onChange={() => {}} className="hidden" aria-hidden="true">
        <option value="" disabled hidden>{placeholder}</option>
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
      
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-slate-900/50 border ${isOpen ? 'border-blue-500 ring-1 ring-blue-500' : 'border-slate-700'} rounded-sm px-4 py-2.5 text-left text-white focus:outline-none transition-colors disabled:opacity-50 flex items-center justify-between group`}
      >
        <span className={value ? 'text-white' : 'text-slate-400'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : 'group-hover:text-slate-300'}`} />
      </button>

      <div className={`absolute z-50 w-full mt-1 bg-slate-800 border border-slate-700 rounded-sm shadow-xl overflow-hidden transition-all duration-200 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <div className="max-h-60 overflow-y-auto no-scrollbar py-1">
          {options.map((option) => (
            <button
              type="button"
              key={option.value}
              onClick={() => {
                onChange({ target: { name: id, value: option.value } });
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2.5 ${value === option.value ? 'bg-blue-600/20 text-blue-400' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
            >
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${value === option.value ? 'border-blue-400 bg-blue-400/10' : 'border-slate-600'}`}>
                 {value === option.value && <div className="w-2 h-2 rounded-full bg-blue-400"></div>}
              </div>
              <span className={value === option.value ? 'font-medium' : ''}>{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
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
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        delayPassed.current = true;
      } else {
        const timer = setTimeout(() => {
          delayPassed.current = true;
        }, 3000);
        return () => clearTimeout(timer);
      }
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
