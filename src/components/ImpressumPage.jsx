import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Code2, ArrowLeft } from "lucide-react";

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
      case "up":
        return "translate-y-8";
      case "down":
        return "-translate-y-8";
      case "left":
        return "translate-x-8";
      case "right":
        return "-translate-x-8";
      default:
        return "translate-y-8";
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

export default function Impressum() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden flex flex-col">
      <nav
        className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all"
        aria-label="Hauptnavigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-sm group"
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
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="/#philosophie" className="hover:text-blue-900 transition-colors">
              Philosophie
            </a>
            <a href="/#referenzen" className="hover:text-blue-900 transition-colors">
              Referenzen
            </a>
            <a href="/#about" className="hover:text-blue-900 transition-colors">
              Über mich
            </a>
            <a href="/#leistungen" className="hover:text-blue-900 transition-colors">
              Leistungen
            </a>
            <a href="/#faq" className="hover:text-blue-900 transition-colors">
              FAQ
            </a>
            <a
              href="/#kontakt"
              className="bg-blue-900 text-white px-5 py-2.5 rounded-sm hover:bg-blue-800 transition-colors"
            >
              Gespräch vereinbaren
            </a>
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

        <div
          className={`md:hidden bg-white border-b border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-4 text-center">
            <a href="/#philosophie" className="text-slate-600 py-2">
              Philosophie
            </a>
            <a href="/#referenzen" className="text-slate-600 py-2">
              Referenzen
            </a>
            <a href="/#about" className="text-slate-600 py-2">
              Über mich
            </a>
            <a href="/#leistungen" className="text-slate-600 py-2">
              Leistungen
            </a>
            <a href="/#faq" className="text-slate-600 py-2">
              FAQ
            </a>
            <a href="/#kontakt" className="bg-blue-900 text-white px-5 py-3 rounded-sm w-full">
              Gespräch vereinbaren
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-900 transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Zurück zur Startseite
            </a>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white p-8 md:p-12 border border-slate-200 rounded-sm shadow-sm">
              <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-8 pb-4 border-b border-slate-100">
                Impressum
              </h1>

              <div className="space-y-8 text-slate-600 leading-relaxed">
                <section>
                  <p>
                    Laurenz Cornelius Gilbert
                    <br />
                    Argentinische Allee 93
                    <br />
                    14163 Berlin
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-slate-900 mb-3">Kontakt</h2>
                  <p>
                    Telefon: 017655156501
                    <br />
                    E-Mail:{" "}
                    <a
                      href="mailto:kontakt@lcg-webdesign.de"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      kontakt@lcg-webdesign.de
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-slate-900 mb-3">Umsatzsteuer-ID</h2>
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                    <br />
                    DE341503939
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-slate-900 mb-3">
                    Verbraucherstreitbeilegung / Universalschlichtungsstelle
                  </h2>
                  <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-slate-900 mb-3">
                    Zentrale Kontaktstelle nach dem Digital Services Act - DSA (Verordnung (EU)
                    2022/265)
                  </h2>
                  <p className="mb-4">
                    Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA
                    erreichen Sie wie folgt:
                  </p>
                  <p className="mb-4">
                    E-Mail:{" "}
                    <a
                      href="mailto:kontakt@lcg-webdesign.de"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      kontakt@lcg-webdesign.de
                    </a>
                    <br />
                    Telefon: 017655156501
                  </p>
                  <p>Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch.</p>
                </section>

                <section className="pt-8 border-t border-slate-100 text-sm text-slate-500">
                  <p>
                    Quelle:{" "}
                    <a
                      href="https://www.e-recht24.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      e-recht24.de
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <footer className="bg-[#0f172a] text-slate-300 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Code2 size={16} />
              <span>Handcrafted by LCG Webdesign</span>
            </div>
            <div className="flex gap-6">
              <a href="/impressum" className="text-white transition-colors">
                Impressum
              </a>
              <a href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </a>
              <a href="/agb" className="hover:text-white transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
