import React from 'react';
import LegalPageShell from './LegalPageShell.jsx';

export default function LegalPage() {
  return (
    <LegalPageShell
      title="Impressum"
      activePath="/impressum"
      maxWidth="max-w-3xl"
      cardClassName="bg-white p-8 md:p-12 border border-slate-200 rounded-sm shadow-sm"
      headingClassName="font-serif text-3xl md:text-4xl text-slate-900 mb-8 pb-4 border-b border-slate-100"
    >
              <div className="space-y-8 text-slate-600 leading-relaxed">
                
                {/* Name & Anschrift */}
                <section>
                  <p>
                    Gilbert Webdesign<br />
                    (Inh. Laurenz Cornelius Gilbert)<br />
                    Argentinische Allee 93<br />
                    14163 Berlin
                  </p>
                </section>

                {/* Kontakt */}
                <section>
                  <h2 className="font-serif text-xl text-slate-900 mb-3">Kontakt</h2>
                  <p>
                    Telefon: +49 176 55156501<br />
                    E-Mail: <a href="mailto:kontakt@gilbert-webdesign.de" className="text-blue-600 hover:text-blue-800 transition-colors">kontakt@gilbert-webdesign.de</a>
                  </p>
                </section>

                {/* Umsatzsteuer-ID */}
                <section>
                  <h2 className="font-serif text-xl text-slate-900 mb-3">Umsatzsteuer-ID</h2>
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    DE341503939
                  </p>
                </section>

                {/* Verantwortlich für den Inhalt */}
                <section>
                  <h2 className="font-serif text-xl text-slate-900 mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                  <p>
                    Laurenz Cornelius Gilbert<br />
                    Argentinische Allee 93<br />
                    14163 Berlin
                  </p>
                </section>

                {/* Streitschlichtung */}
                <section>
                  <h2 className="font-serif text-xl text-slate-900 mb-3">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                  <p>
                    Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>

              </div>
    </LegalPageShell>
  );
}
