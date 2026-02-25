import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code2, ArrowLeft } from 'lucide-react';

// --- CUSTOM HOOKS & COMPONENTS FOR ANIMATION ---
const Reveal = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(id);
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

// --- MAIN APPLICATION COMPONENT (AGB) ---
export default function AGB() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden flex flex-col">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all" aria-label="Hauptnavigation">
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="/#philosophie" className="hover:text-blue-900 transition-colors">Philosophie</a>
            <a href="/#referenzen" className="hover:text-blue-900 transition-colors">Referenzen</a>
            <a href="/#about" className="hover:text-blue-900 transition-colors">Über mich</a>
            <a href="/#leistungen" className="hover:text-blue-900 transition-colors">Leistungen</a>
            <a href="/#faq" className="hover:text-blue-900 transition-colors">FAQ</a>
            <a href="/#kontakt" className="bg-blue-900 text-white px-5 py-2.5 rounded-sm hover:bg-blue-800 transition-colors">
              Gespräch vereinbaren
            </a>
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
            <a href="/#philosophie" className="text-slate-600 py-2">Philosophie</a>
            <a href="/#referenzen" className="text-slate-600 py-2">Referenzen</a>
            <a href="/#about" className="text-slate-600 py-2">Über mich</a>
            <a href="/#leistungen" className="text-slate-600 py-2">Leistungen</a>
            <a href="/#faq" className="text-slate-600 py-2">FAQ</a>
            <a href="/#kontakt" className="bg-blue-900 text-white px-5 py-3 rounded-sm w-full">
              Gespräch vereinbaren
            </a>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT: AGB --- */}
      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          
          <Reveal>
            <a href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-900 transition-colors mb-8 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Zurück zur Startseite
            </a>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white p-8 md:p-14 border border-slate-200 rounded-sm shadow-sm">
              <h1 className="font-serif text-3xl md:text-5xl text-slate-900 mb-10 pb-6 border-b border-slate-100">
                Allgemeine Geschäftsbedingungen (AGB)
              </h1>

              <div className="space-y-12 text-slate-600 leading-relaxed">
                
                {/* § 1 Geltungsbereich */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 1 Geltungsbereich</h2>
                  <div className="space-y-4">
                    <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und sonstigen Leistungen von Laurenz Gilbert, LCG Webdesign (nachfolgend „Auftragnehmer“), gegenüber ihren Kunden (nachfolgend „Auftraggeber“).</p>
                    <p>Das Angebot richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB, juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen (B2B). Ein Vertragsabschluss mit Verbrauchern (§ 13 BGB) ist ausgeschlossen.</p>
                    <p>Abweichende AGB des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
                  </div>
                </section>

                {/* § 2 Vertragsgegenstand und Leistungen */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 2 Vertragsgegenstand und Leistungen</h2>
                  <div className="space-y-4">
                    <p>Gegenstand des Vertrages ist die Entwicklung von individuellen Webseiten auf Basis moderner Web-Technologien (z. B. Astro.js, React) sowie die Einrichtung eines Content-Management-Systems (z. B. Keystatic).</p>
                    <p>Der genaue Leistungsumfang ergibt sich aus dem jeweiligen individuellen Angebot.</p>
                    <p>Der Auftragnehmer übernimmt die technische On-Page-Optimierung (SEO) nach aktuellen Standards. Der Auftragnehmer schuldet jedoch keinen bestimmten Erfolg (z. B. eine spezifische Platzierung in den Suchergebnissen bei Google), da dieser von Algorithmen der Suchmaschinenbetreiber abhängt.</p>
                  </div>
                </section>

                {/* § 3 Mitwirkungspflichten des Auftraggebers & Hosting */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 3 Mitwirkungspflichten des Auftraggebers & Hosting</h2>
                  <div className="space-y-4">
                    <p>Das Hosting der Website sowie die Code-Verwaltung erfolgen über Drittanbieter (z. B. Cloudflare Pages, GitHub). Der Auftraggeber verpflichtet sich, die hierfür notwendigen Konten auf eigenen Namen und eigene Rechnung anzulegen. Vertragspartner dieser Drittanbieter wird ausschließlich der Auftraggeber.</p>
                    <p>Zur Gewährleistung der Entwicklung sowie vertraglich vereinbarter Wartungs- und Support-Leistungen räumt der Auftraggeber dem Auftragnehmer einen administrativen Zugang bzw. Mitwirkenden-Zugang („Collaborator“) zu diesen Konten ein.</p>
                    <p>Der Auftraggeber stellt dem Auftragnehmer alle für die Erstellung der Website erforderlichen Inhalte (Texte, Bilder, Logos) in digitaler Form rechtzeitig zur Verfügung. Für die rechtliche Zulässigkeit (insb. Urheber- und Markenrechte) dieser Inhalte ist allein der Auftraggeber verantwortlich.</p>
                  </div>
                </section>

                {/* § 4 Vergütung und Zahlungsbedingungen */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 4 Vergütung und Zahlungsbedingungen</h2>
                  <div className="space-y-4">
                    <p>Sofern im Angebot nicht anders vereinbart, ist die vereinbarte Gesamtvergütung für die Erstellung der Website vollständig im Voraus (Vorkasse) fällig.</p>
                    <p>Die Rechnungsstellung erfolgt unmittelbar nach Vertragsabschluss. Der Auftragnehmer beginnt mit den vertraglich vereinbarten Entwicklungsarbeiten erst nach vollständigem Zahlungseingang.</p>
                    <p>Alle genannten Preise verstehen sich netto zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer.</p>
                  </div>
                </section>

                {/* § 5 Abnahme (Werkvertragliche Leistungen) */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 5 Abnahme (Werkvertragliche Leistungen)</h2>
                  <div className="space-y-4">
                    <p>Nach Fertigstellung der Website stellt der Auftragnehmer diese dem Auftraggeber auf einer Testumgebung (Staging-Domain) oder der finalen Domain zur Prüfung zur Verfügung und fordert den Auftraggeber zur Abnahme auf.</p>
                    <p>Die Abnahme hat innerhalb von 14 Tagen nach Aufforderung zu erfolgen.</p>
                    <p>Die Website gilt als stillschweigend abgenommen, wenn der Auftraggeber nicht innerhalb dieser 14-Tage-Frist wesentliche Mängel schriftlich rügt oder wenn er die Website produktiv nutzt (z. B. durch aktive Bewerbung der URL).</p>
                  </div>
                </section>

                {/* § 6 Nutzungsrechte und Open-Source-Software */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 6 Nutzungsrechte und Open-Source-Software</h2>
                  <div className="space-y-4">
                    <p>Mit vollständiger Bezahlung der vereinbarten Vergütung räumt der Auftragnehmer dem Auftraggeber das ausschließliche, räumliche, zeitliche und inhaltlich unbeschränkte Nutzungsrecht an dem individuell erstellten Programmcode und Design ein. Der Auftraggeber erhält das Recht, den Code nach Belieben zu verändern und zu nutzen.</p>
                    <p>Soweit im Rahmen der Entwicklung Open-Source-Software (z. B. Astro.js, React, Keystatic) verwendet wird, unterliegt diese den jeweiligen Open-Source-Lizenzen. Die Einräumung der Nutzungsrechte bezieht sich ausschließlich auf den individuell durch den Auftragnehmer erstellten Code.</p>
                  </div>
                </section>

                {/* § 7 Haftung und rechtliche Verantwortung */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 7 Haftung und rechtliche Verantwortung</h2>
                  <div className="space-y-4">
                    <p>Der Auftragnehmer haftet bei Vorsatz und grober Fahrlässigkeit unbeschränkt. Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), beschränkt auf den vertragstypisch vorhersehbaren Schaden.</p>
                    <p>Der Auftragnehmer übernimmt keine Haftung für Ausfälle, Datenverluste, Sperrungen oder etwaige Kosten, die durch die Nutzung der Drittanbieter (z. B. Cloudflare, GitHub) entstehen.</p>
                    <p>
                      Die rechtliche Verantwortung für die Inhalte der Website, insbesondere das Impressum, die Datenschutzerklärung und rechtskonforme Cookie-Banner, liegt allein beim Auftraggeber. Der Auftragnehmer führt keine Rechtsberatung durch.
                    </p>
                  </div>
                </section>

                {/* § 8 Schlussbestimmungen */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 8 Schlussbestimmungen</h2>
                  <div className="space-y-4">
                    <p>Es gilt das Recht der Bundesrepublik Deutschland.</p>
                    <p>Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist der Sitz des Auftragnehmers (Berlin), sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
                    <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen wirksam.</p>
                  </div>
                </section>

              </div>
            </div>
          </Reveal>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0f172a] text-slate-300 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Code2 size={16} />
              <span>Handcrafted by LCG Webdesign</span>
            </div>
            <div className="flex gap-6">
              <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
              <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="/agb" className="text-white transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
