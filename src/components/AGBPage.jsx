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
                    <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und sonstigen Leistungen von Laurenz Gilbert, Gilbert Webdesign (nachfolgend „Auftragnehmer“), gegenüber ihren Kunden (nachfolgend „Auftraggeber“).</p>
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

                {/* § 3 Wartungs- und Supportleistungen („Rundum-Sorglos-Paket“) */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 3 Wartungs- und Supportleistungen („Rundum-Sorglos-Paket“)</h2>
                  <div className="space-y-4">
                    <p>(1) Bucht der Auftraggeber optional das fortlaufende Wartungs- und Supportpaket („Rundum-Sorglos-Paket“), kommt hierüber ein separater Vertrag über laufende Dienstleistungen (Dauerschuldverhältnis) zustande.</p>
                    <p>(2) Der Leistungsumfang umfasst die technische Beratung und den Support zu Hosting, Domain und dem eingesetzten CMS sowie die Umsetzung kleinerer optischer Änderungen. Die reguläre Reaktionszeit des Auftragnehmers auf Support-Anfragen beträgt in der Regel 1 bis 2 Werktage.</p>
                    <p>(3) Im Rahmen der monatlichen Pauschale sind Support- und Anpassungsleistungen im Umfang von insgesamt bis zu 60 Minuten pro Kalendermonat (davon max. 30 Minuten für optische Änderungen) inklusive. Nicht in Anspruch genommene Inklusivminuten verfallen am Ende des jeweiligen Kalendermonats und können nicht in den Folgemonat übertragen oder ausbezahlt werden.</p>
                    <p>(4) Leistungen, die über die inkludierten 60 Minuten hinausgehen, werden nur nach vorheriger Absprache mit dem Auftraggeber erbracht. Diese Zusatzleistungen werden nach tatsächlichem Aufwand mit einem Stundensatz von 95,00 € netto abgerechnet.</p>
                    <p>(5) Die monatliche Vergütung für das Wartungspaket in Höhe von 59,00 € netto wird jeweils monatlich im Voraus in Rechnung gestellt und ist ohne Abzug sofort fällig.</p>
                    <p>(6) Der Wartungsvertrag wird auf unbestimmte Zeit geschlossen. Er hat keine Mindestlaufzeit und kann von beiden Parteien jederzeit mit einer Frist von 14 Tagen zum Ende des jeweiligen Abrechnungsmonats in Textform (z. B. per E-Mail) gekündigt werden. Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt hiervon unberührt.</p>
                    <p>(7) Soweit der Auftragnehmer im Rahmen der Supportarbeiten im Auftrag des Kunden auf personenbezogene Daten (z. B. in Formularen oder Buchungssystemen) zugreift, wird der Auftraggeber darauf hingewiesen, dass hierfür der Abschluss eines separaten Vertrags zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO erforderlich ist. Dieser wird vom Auftragnehmer auf Anfrage bereitgestellt.</p>
                  </div>
                </section>

                {/* § 4 Mitwirkungspflichten des Auftraggebers & Hosting */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 4 Mitwirkungspflichten des Auftraggebers & Hosting</h2>
                  <div className="space-y-4">
                    <p>Das Hosting der Website sowie die Code-Verwaltung erfolgen über Drittanbieter (z. B. Cloudflare Pages, GitHub). Der Auftraggeber verpflichtet sich, die hierfür notwendigen Konten auf eigenen Namen und eigene Rechnung anzulegen. Vertragspartner dieser Drittanbieter wird ausschließlich der Auftraggeber.</p>
                    <p>Zur Gewährleistung der Entwicklung sowie vertraglich vereinbarter Wartungs- und Support-Leistungen räumt der Auftraggeber dem Auftragnehmer einen administrativen Zugang bzw. Mitwirkenden-Zugang („Collaborator“) zu diesen Konten ein.</p>
                    <p>Der Auftraggeber stellt dem Auftragnehmer alle für die Erstellung der Website erforderlichen Inhalte (Texte, Bilder, Logos) in digitaler Form rechtzeitig zur Verfügung. Für die rechtliche Zulässigkeit (insb. Urheber- und Markenrechte) dieser Inhalte ist allein der Auftraggeber verantwortlich.</p>
                  </div>
                </section>

                {/* § 5 Vergütung und Zahlungsbedingungen */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 5 Vergütung und Zahlungsbedingungen</h2>
                  <div className="space-y-4">
                    <p>Sofern im Angebot nicht anders vereinbart, erfolgt die Abrechnung der vereinbarten Gesamtvergütung für die Erstellung der Website in zwei Raten:</p>
                    <p>50 % der vereinbarten Vergütung werden als Anzahlung unmittelbar nach Vertragsabschluss in Rechnung gestellt. Der Auftragnehmer beginnt mit den vertraglich vereinbarten Entwicklungsarbeiten erst nach vollständigem Zahlungseingang dieser ersten Rate.</p>
                    <p>Die restlichen 50 % der Vergütung werden nach erfolgreicher Abnahme der Website (gemäß § 6) bzw. unmittelbar vor der finalen Live-Schaltung (Übertragung auf die Hauptdomain) in Rechnung gestellt.</p>
                    <p>Alle genannten Preise verstehen sich netto zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer. Rechnungen sind ohne Abzug nach Erhalt zahlbar.</p>
                  </div>
                </section>

                {/* § 6 Abnahme (Werkvertragliche Leistungen) */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 6 Abnahme (Werkvertragliche Leistungen)</h2>
                  <div className="space-y-4">
                    <p>(1) Nach Fertigstellung stellt der Auftragnehmer die Website auf einer Testumgebung (Staging-Domain) oder der finalen Domain zur Prüfung bereit und fordert den Auftraggeber in Textform zur Abnahme auf. Die Abnahmefrist beträgt 14 Kalendertage ab Zugang der Aufforderung.</p>
                    <p>(2) Die Website gilt als abgenommen, wenn der Auftraggeber die Abnahme nicht innerhalb der Abnahmefrist unter Angabe mindestens eines Mangels in Textform verweigert. Auf diese Rechtsfolge wird der Auftragnehmer in der Abnahmeaufforderung hinweisen.</p>
                    <p>(3) Unabhängig von Abs. 2 gilt die Website ebenfalls als abgenommen, sobald der Auftraggeber sie produktiv nutzt (z. B. durch Freischaltung auf der Hauptdomain oder aktive Bewerbung der URL), sofern nicht zuvor ein wesentlicher Mangel angezeigt wurde.</p>
                  </div>
                </section>

                {/* § 7 Nutzungsrechte und Open-Source-Software */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 7 Nutzungsrechte und Open-Source-Software</h2>
                  <div className="space-y-4">
                    <p>(1) Mit vollständiger Bezahlung der vereinbarten Vergütung räumt der Auftragnehmer dem Auftraggeber das ausschließliche, räumliche, zeitliche und inhaltlich unbeschränkte Nutzungsrecht an den individuell für den Auftraggeber erstellten Arbeitsergebnissen (insbesondere kundenspezifischer Programmcode und Design) ein. Der Auftraggeber erhält das Recht, diese Arbeitsergebnisse zu verändern und zu nutzen.</p>
                    <p>(2) Von der vorstehenden Rechteübertragung ausgenommen sind vorbestehende oder unabhängig vom konkreten Auftrag entwickelte Bestandteile des Auftragnehmers (insbesondere Frameworks, Bibliotheken, Module, Templates, Snippets, Build- und Deployment-Konfigurationen, Tools, Methoden und Know-how), soweit diese nicht individuell für den Auftraggeber erstellt wurden. Hieran verbleiben sämtliche Rechte beim Auftragnehmer. Der Auftraggeber erhält daran ein einfaches, räumlich und zeitlich unbeschränktes Nutzungsrecht, soweit dies für die vertragsgemäße Nutzung der Website erforderlich ist.</p>
                    <p>(3) Soweit im Rahmen der Entwicklung Open-Source-Software (z. B. Astro.js, React, Keystatic) verwendet wird, unterliegt diese den jeweiligen Open-Source-Lizenzen.</p>
                  </div>
                </section>

                {/* § 8 Haftung und rechtliche Verantwortung */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 8 Haftung und rechtliche Verantwortung</h2>
                  <div className="space-y-4">
                    <p>(1) Der Auftragnehmer haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.</p>
                    <p>(2) Bei einfacher Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht). In diesem Fall ist die Haftung auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.</p>
                    <p>(3) Die Haftung nach dem Produkthaftungsgesetz sowie nach sonstigen zwingenden gesetzlichen Vorschriften bleibt unberührt.</p>
                    <p>(4) Für Störungen, Ausfälle, Datenverluste, Sperrungen oder Mehrkosten, die auf Leistungen oder Änderungen von Drittanbietern (insbesondere Cloudflare, GitHub sowie Domain- und Hosting-Provider) oder auf Eingriffe des Auftraggebers bzw. Dritter zurückzuführen sind, haftet der Auftragnehmer nicht, soweit ihn daran kein Verschulden trifft.</p>
                    <p>Die rechtliche Verantwortung für die Inhalte der Website, insbesondere das Impressum, die Datenschutzerklärung und rechtskonforme Cookie-Banner, liegt allein beim Auftraggeber. Der Auftragnehmer führt keine Rechtsberatung durch.</p>
                  </div>
                </section>

                {/* § 9 Referenznennung */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 9 Referenznennung</h2>
                  <div className="space-y-4">
                    <p>Der Auftraggeber räumt dem Auftragnehmer ein einfaches, räumlich unbeschränktes Recht ein, den Auftraggeber auf der eigenen Website sowie in eigenen Werbemedien (z. B. Social Media, Portfolio-Präsentationen) als Referenzkunden zu nennen und in diesem Zusammenhang den Namen des Auftraggebers, dessen Logo und Screenshots der erstellten Website zu verwenden.</p>
                    <p>Der Auftraggeber kann der Referenznutzung jederzeit mit Wirkung für die Zukunft in Textform (z. B. per E-Mail) widersprechen. Ab Zugang des Widerspruchs wird der Auftragnehmer die weitere Nutzung innerhalb einer angemessenen Frist einstellen.</p>
                  </div>
                </section>

                {/* § 10 Schlussbestimmungen */}
                <section>
                  <h2 className="font-serif text-2xl text-slate-900 mb-6 pb-2 border-b border-slate-100">§ 10 Schlussbestimmungen</h2>
                  <div className="space-y-4">
                    <p>Hinweis nach § 36 VSBG: Der Auftragnehmer ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
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
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
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
