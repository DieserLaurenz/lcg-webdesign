import React from 'react';
import LegalPageShell from './LegalPageShell.jsx';

export default function LegalPage() {
  return (
    <LegalPageShell
      title="Allgemeine Geschäftsbedingungen (AGB)"
      activePath="/agb"
      maxWidth="max-w-4xl"
      cardClassName="bg-white p-8 md:p-14 border border-slate-200 rounded-sm shadow-sm"
      headingClassName="font-serif text-3xl md:text-5xl text-slate-900 mb-10 pb-6 border-b border-slate-100"
    >
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
    </LegalPageShell>
  );
}
