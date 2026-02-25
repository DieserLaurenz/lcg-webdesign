import React from 'react';
import { ArrowLeft, Code2 } from 'lucide-react';

export default function AGB() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      
      {/* --- MINIMAL NAVIGATION --- */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200" aria-label="Hauptnavigation">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo / Zurück zur Startseite */}
          <a 
            href="/" 
            className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-sm group no-underline"
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

          {/* Back Button */}
          <a 
            href="/" 
            className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Zurück zur Startseite
          </a>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 md:p-14 border border-slate-200 rounded-sm shadow-sm relative overflow-hidden">
            {/* Minimalistischer Akzentbalken oben für den Premium-Look */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-slate-800"></div>
            
            <h1 className="font-serif text-3xl md:text-5xl text-slate-900 mb-12">Allgemeine Geschäftsbedingungen (AGB)</h1>

            {/* --- § 1 --- */}
            <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mt-12 mb-6 border-b border-slate-100 pb-4">§ 1 Geltungsbereich</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und sonstigen Leistungen von Laurenz Gilbert, LCG Webdesign (nachfolgend „Auftragnehmer“), gegenüber ihren Kunden (nachfolgend „Auftraggeber“).
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Das Angebot richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB, juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen (B2B). Ein Vertragsabschluss mit Verbrauchern (§ 13 BGB) ist ausgeschlossen.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Abweichende AGB des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>

            {/* --- § 2 --- */}
            <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mt-16 mb-6 border-b border-slate-100 pb-4">§ 2 Vertragsgegenstand und Leistungen</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Gegenstand des Vertrages ist die Entwicklung von individuellen Webseiten auf Basis moderner Web-Technologien (z. B. Astro.js, React) sowie die Einrichtung eines Content-Management-Systems (z. B. Keystatic).
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Der genaue Leistungsumfang ergibt sich aus dem jeweiligen individuellen Angebot.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Der Auftragnehmer übernimmt die technische On-Page-Optimierung (SEO) nach aktuellen Standards. Der Auftragnehmer schuldet jedoch keinen bestimmten Erfolg (z. B. eine spezifische Platzierung in den Suchergebnissen bei Google), da dieser von Algorithmen der Suchmaschinenbetreiber abhängt.
            </p>

            {/* --- § 3 --- */}
            <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mt-16 mb-6 border-b border-slate-100 pb-4">§ 3 Mitwirkungspflichten des Auftraggebers & Hosting</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Das Hosting der Website sowie die Code-Verwaltung erfolgen über Drittanbieter (z. B. Cloudflare Pages, GitHub). Der Auftraggeber verpflichtet sich, die hierfür notwendigen Konten auf eigenen Namen und eigene Rechnung anzulegen. Vertragspartner dieser Drittanbieter wird ausschließlich der Auftraggeber.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Zur Gewährleistung der Entwicklung sowie vertraglich vereinbarter Wartungs- und Support-Leistungen räumt der Auftraggeber dem Auftragnehmer einen administrativen Zugang bzw. Mitwirkenden-Zugang („Collaborator“) zu diesen Konten ein.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Der Auftraggeber stellt dem Auftragnehmer alle für die Erstellung der Website erforderlichen Inhalte (Texte, Bilder, Logos) in digitaler Form rechtzeitig zur Verfügung. Für die rechtliche Zulässigkeit (insb. Urheber- und Markenrechte) dieser Inhalte ist allein der Auftraggeber verantwortlich.
            </p>

            {/* --- § 4 --- */}
            <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mt-16 mb-6 border-b border-slate-100 pb-4">§ 4 Vergütung und Zahlungsbedingungen</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Sofern im Angebot nicht anders vereinbart, ist die vereinbarte Gesamtvergütung für die Erstellung der Website vollständig im Voraus (Vorkasse) fällig.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Die Rechnungsstellung erfolgt unmittelbar nach Vertragsabschluss. Der Auftragnehmer beginnt mit den vertraglich vereinbarten Entwicklungsarbeiten erst nach vollständigem Zahlungseingang.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Alle genannten Preise verstehen sich netto zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer.
            </p>

            {/* --- § 5 --- */}
            <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mt-16 mb-6 border-b border-slate-100 pb-4">§ 5 Abnahme (Werkvertragliche Leistungen)</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Nach Fertigstellung der Website stellt der Auftragnehmer diese dem Auftraggeber auf einer Testumgebung (Staging-Domain) oder der finalen Domain zur Prüfung zur Verfügung und fordert den Auftraggeber zur Abnahme auf.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Die Abnahme hat innerhalb von 14 Tagen nach Aufforderung zu erfolgen.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Die Website gilt als stillschweigend abgenommen, wenn der Auftraggeber nicht innerhalb dieser 14-Tage-Frist wesentliche Mängel schriftlich rügt oder wenn er die Website produktiv nutzt (z. B. durch aktive Bewerbung der URL).
            </p>

            {/* --- § 6 --- */}
            <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mt-16 mb-6 border-b border-slate-100 pb-4">§ 6 Nutzungsrechte und Open-Source-Software</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Mit vollständiger Bezahlung der vereinbarten Vergütung räumt der Auftragnehmer dem Auftraggeber das ausschließliche, räumliche, zeitliche und inhaltlich unbeschränkte Nutzungsrecht an dem individuell erstellten Programmcode und Design ein. Der Auftraggeber erhält das Recht, den Code nach Belieben zu verändern und zu nutzen.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Soweit im Rahmen der Entwicklung Open-Source-Software (z. B. Astro.js, React, Keystatic) verwendet wird, unterliegt diese den jeweiligen Open-Source-Lizenzen. Die Einräumung der Nutzungsrechte bezieht sich ausschließlich auf den individuell durch den Auftragnehmer erstellten Code.
            </p>

            {/* --- § 7 --- */}
            <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mt-16 mb-6 border-b border-slate-100 pb-4">§ 7 Haftung und rechtliche Verantwortung</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Der Auftragnehmer haftet bei Vorsatz und grober Fahrlässigkeit unbeschränkt. Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), beschränkt auf den vertragstypisch vorhersehbaren Schaden.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Der Auftragnehmer übernimmt keine Haftung für Ausfälle, Datenverluste, Sperrungen oder etwaige Kosten, die durch die Nutzung der Drittanbieter (z. B. Cloudflare, GitHub) entstehen.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Die rechtliche Verantwortung für die Inhalte der Website, insbesondere das Impressum, die Datenschutzerklärung und rechtskonforme Cookie-Banner, liegt allein beim Auftraggeber. Der Auftragnehmer führt keine Rechtsberatung durch.
            </p>

            {/* --- § 8 --- */}
            <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mt-16 mb-6 border-b border-slate-100 pb-4">§ 8 Schlussbestimmungen</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Es gilt das Recht der Bundesrepublik Deutschland.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist der Sitz des Auftragnehmers (Berlin), sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen wirksam.
            </p>

          </div>
        </div>
      </main>

      {/* --- MINIMAL FOOTER --- */}
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
              <a href="/agb" className="text-white hover:text-blue-400 transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
