import React, { useState, useEffect } from 'react';
import { CheckCircle, ShieldCheck, ArrowRight, Mail, Code2, ChevronDown, Info } from 'lucide-react';

const FORM_STORAGE_KEY = 'gilbertContactForm';
const FORM_STORAGE_OPT_IN_KEY = 'gilbertContactFormAutosaveOptIn';

export default function ContactSection() {
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
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState('');

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

  useEffect(() => {
    if (!hasSavedFormPreference) return;
    localStorage.setItem(FORM_STORAGE_OPT_IN_KEY, saveFormOnDevice ? 'true' : 'false');
    if (!saveFormOnDevice) {
      localStorage.removeItem(FORM_STORAGE_KEY);
    }
  }, [saveFormOnDevice, hasSavedFormPreference]);

  useEffect(() => {
    if (!saveFormOnDevice) return;
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
  }, [formData, saveFormOnDevice]);

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

  return (
    <footer id="kontakt" className="bg-[#0f172a] text-slate-300 pt-20 pb-[calc(2.5rem+env(safe-area-inset-bottom))] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-sm p-8 md:p-12 mb-16 shadow-lg shadow-slate-900/50 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <Mail className="text-blue-400 w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl md:text-4xl text-white mb-4">Bereit für Ihren digitalen Aufstieg?</h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Lassen Sie uns unverbindlich besprechen, wie wir Ihre digitale Sichtbarkeit und Ihre Anfragen verbessern können.
            </p>
            <div className="mt-6 bg-blue-900/30 border border-blue-800 text-blue-200 px-4 py-3 rounded-sm max-w-xl mx-auto text-sm flex items-start gap-3 text-left">
              <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <p><strong>Hinweis:</strong> Ich bin vom 16.03. bis 30.03. im Urlaub und in dieser Zeit nicht erreichbar. Ihre Anfragen werden im Anschluss schnellstmöglich bearbeitet.</p>
            </div>
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
                  <div className="relative">
                    <select
                      id="interessiert_an"
                      name="interessiert_an"
                      value={formData.interessiert_an}
                      onChange={handleFormChange}
                      required
                      disabled={formStatus === 'submitting'}
                      className={`w-full appearance-none bg-slate-950 border border-slate-500 rounded-sm px-4 py-2.5 pr-10 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors disabled:opacity-50 ${
                        formData.interessiert_an ? 'text-white' : 'text-slate-300'
                      }`}
                    >
                      <option value="" disabled className="bg-slate-950 text-slate-300">Bitte auswählen...</option>
                      <option value="Digitale Visitenkarte (One-Pager)" className="bg-slate-950 text-white">Digitale Visitenkarte (One-Pager)</option>
                      <option value="Umfassende Praxis-Website (Multi-Pager)" className="bg-slate-950 text-white">Umfassende Praxis-Website (Multi-Pager)</option>
                      <option value="Wartung & Support" className="bg-slate-950 text-white">Wartung / Rundum-Sorglos-Paket</option>
                      <option value="Anderes Anliegen" className="bg-slate-950 text-white">Anderes Anliegen</option>
                    </select>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-200"
                    />
                  </div>
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
                <p>Bitte geben Sie in diesem Formular <strong>keine sensiblen Gesundheitsdaten</strong> (wie Diagnosen oder Behandlungsdetails) an.</p>
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
  );
}
