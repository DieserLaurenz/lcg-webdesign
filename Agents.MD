# Gilbert Webdesign - Agent Context

## Projektueberblick

**Gilbert Webdesign** ist eine professionelle Marketing-/Portfolio-Website fuer eine freiberufliche Webdesign-Agentur. Die Website richtet sich an B2B-Kunden im Gesundheits- und Wellness-Bereich (Arztpraxen, Physiotherapie, Wellness-Studios) in Berlin.

**Inhaber:** Laurenz Gilbert  
**Domain:** gilbert-webdesign.de  
**Kontakt:** kontakt@gilbert-webdesign.de

---

## Tech Stack

| Technologie | Version | Verwendung |
|-------------|---------|------------|
| Astro | 5.17.3 | Hauptframework / Routing / Build |
| React | 19.2.4 | Interaktive UI-Komponenten |
| Tailwind CSS | 3.4.19 | Styling |
| Lucide React | 0.575.0 | Icons |
| Cloudflare Adapter | 12.6.12 | Deployment auf Cloudflare Pages |

### Deployment
- **Hosting:** Cloudflare Pages
- **CI/CD:** GitHub Actions (`.github/workflows/cloudflare-pages.yml`)
- **Build:** `npm run build` -> `/dist`
- **Kontaktformular:** API-Route mit Resend (`RESEND_API_KEY` erforderlich)

---

## Projektstruktur

```text
gilbert-webdesign.de/
|-- src/
|   |-- components/
|   |   |-- home/
|   |   |   |-- HomeNavigation.jsx
|   |   |   |-- HeroSection.jsx
|   |   |   |-- PhilosophySection.jsx
|   |   |   |-- ReferencesSection.jsx
|   |   |   |-- AboutSection.jsx
|   |   |   |-- PricingSection.jsx
|   |   |   |-- FAQSection.jsx
|   |   |   |-- FeatureCard.jsx
|   |   |   |-- ListItem.jsx
|   |   |   |-- StaticPhoneMockup.jsx
|   |   |   `-- ContactSection.jsx
|   |   |-- LegalPageShell.jsx
|   |   |-- ImpressumPage.jsx
|   |   |-- DatenschutzPage.jsx
|   |   `-- AGBPage.jsx
|   |
|   |-- data/
|   |   `-- faqData.js
|   |
|   |-- layouts/
|   |   `-- BaseLayout.astro
|   |
|   |-- pages/
|   |   |-- api/
|   |   |   `-- contact.js
|   |   |-- index.astro
|   |   |-- impressum.astro
|   |   |-- datenschutz.astro
|   |   `-- agb.astro
|   |
|   `-- styles/
|       `-- global.css
|
|-- public/
|   |-- robots.txt
|   |-- llms.txt
|   |-- site.webmanifest
|   |-- favicon.svg
|   `-- *.webp
|
|-- astro.config.mjs
|-- tailwind.config.mjs
|-- package.json
`-- package-lock.json
```

---

## Architektur

### Homepage
Die Startseite wird ueber [src/pages/index.astro] komponiert und verwendet:

- `BaseLayout` fuer Meta-Tags, Canonical, Open Graph und strukturierte Daten
- einzelne JSX-Komponenten pro Homepage-Section
- `FAQSection` als React-Insel mit `client:visible`
- `ContactSection` als React-Insel mit `client:visible`

### Rechtliche Seiten
Die Seiten `/impressum`, `/datenschutz` und `/agb` sind Astro-Seiten, die jeweils eine statisch gerenderte React-Komponente innerhalb von `BaseLayout` rendern. Gemeinsame Navigation, Ruecklink und Footer liegen in `LegalPageShell.jsx`.

### Kontaktformular
Die API-Route [src/pages/api/contact.js] verarbeitet Formularanfragen serverseitig:

- `export const prerender = false`
- Validierung und Normalisierung der Eingaben
- HTML-Escaping fuer Mailinhalt
- Versand ueber Resend API
- Antwort als JSON

### Content-Daten
FAQ-Inhalte liegen zentral in [src/data/faqData.js]. Rechtstexte werden aktuell direkt in den React-Komponenten gepflegt, nicht mehr in separaten `.txt`-Quelldateien.

---

## Wichtige Dateien

### `src/pages/index.astro`
SEO-Einstiegspunkt der Homepage. Hier werden Title, Description, Canonical-URL, OG-Bild und JSON-LD definiert.

### `src/layouts/BaseLayout.astro`
Zentrale Layout-Datei fuer:

- `<title>` und Meta-Description
- Canonical-Tag
- Open-Graph- und Twitter-Meta-Tags
- JSON-LD via `structuredData`
- globale Dokumentstruktur

### `src/components/home/HomeNavigation.jsx` und `src/components/home/*Section.jsx`
Die statischen Hauptbereiche der Homepage sind in kleine JSX-Dateien aufgeteilt:

- Navigation
- Hero
- Philosophie
- Referenzprojekt
- Ueber-mich-Bereich
- Leistungen

### `src/components/home/FAQSection.jsx`
Accordion fuer den FAQ-Bereich. Bezieht die Inhalte aus `faqData.js`.

### `src/components/home/ContactSection.jsx`
Footer und Kontaktformular mit:

- LocalStorage-Opt-in fuer Formularentwurf
- nativem `select` fuer das Anfragefeld
- Formularstatus fuer `idle`, `submitting`, `success`, `error`
- POST auf `/api/contact`

### `src/components/LegalPageShell.jsx`
Gemeinsame statische Huelle fuer Impressum, Datenschutz und AGB:

- einheitliche Navigation
- Ruecklink zur Startseite
- konsistenter Footer
- kein clientseitiges Hydration-JavaScript fuer die Rechtstext-Seiten

---

## Seiten & Routing

| Route | Datei | Beschreibung |
|-------|-------|--------------|
| `/` | `src/pages/index.astro` | Homepage |
| `/impressum` | `src/pages/impressum.astro` | Impressum |
| `/datenschutz` | `src/pages/datenschutz.astro` | Datenschutzerklaerung |
| `/agb` | `src/pages/agb.astro` | AGB |
| `/api/contact` | `src/pages/api/contact.js` | Formular-Endpoint |

---

## Preismodell

### Hauptpakete
1. **Digitale Visitenkarte** (One-Pager): EUR 1.290 netto
2. **Umfassende Praxis-Website** (Multi-Pager): EUR 2.290 netto

### Wartungspaket (optional)
- **Technischer Support:** EUR 59/Monat
- Fokus auf Support, CMS-Hilfe und kleine Anpassungen
- Kein Hosting und kein rechtlicher DSGVO-Schutz inkludiert

---

## Commands

```bash
npm run dev
npm run build
npm run preview
```

---

## Deployment-Workflow

1. Push auf `main`
2. GitHub Action startet den Build
3. Deployment auf Cloudflare Pages via Wrangler

**Relevante Secrets / Bindings:**
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `RESEND_API_KEY`

---

## SEO & Performance

- Strukturierte Daten auf der Startseite: `FAQPage`, `WebSite`, `Organization`, `LocalBusiness`
- Sitemap wird ueber `@astrojs/sitemap` generiert
- `robots.txt` und `llms.txt` liegen in `public/`
- WebP-Bilder fuer schnelle Ladezeiten
- FAQ- und Kontaktbereich werden nur bei Sichtbarkeit hydratisiert

---

## Stilrichtlinien & Design-System

Das Design ist auf eine serioese B2B-Zielgruppe ausgerichtet: modern, aufgeraeumt, minimalistisch und vertrauenserweckend.

- **Farbpalette:**
  - Slate-Toene fuer Hintergruende, Copy und Borders
  - Tiefes Blau fuer Buttons, Links, Akzente und Icon-Flaechen
- **Typografie:**
  - `font-serif` fuer Headlines
  - `font-sans` fuer Fliesstext
- **Formensprache & Layout:**
  - Kleine Rundungen (`rounded-sm`)
  - Grosszuegiger Weissraum
  - Subtile Borders und Schatten
- **Interaktion:**
  - Zurueckhaltende Hover-Effekte
  - Mobile-First-Layout
  - Blur-Navigation und klare CTA-Fuehrung
- **Inhaltlicher Ton:**
  - Professionell
  - Direkt
  - B2B-orientiert
  - Keine Emojis

---

## Hinweise fuer Agents

1. **Homepage-Aenderungen passieren in der Regel in `src/components/home/*` und `src/pages/index.astro`.**
2. **SEO-/Meta-Aenderungen gehoeren in `src/layouts/BaseLayout.astro` oder `src/pages/index.astro`.**
3. **FAQ-Inhalte werden in `src/data/faqData.js` gepflegt.**
4. **Das Kontaktformular haengt an `src/pages/api/contact.js` und benoetigt `RESEND_API_KEY`.**
5. **Rechtliche Texte liegen aktuell in den React-Komponenten unter `src/components/`, nicht in Root-`.txt`-Dateien.**
6. **Die Rechtstext-Seiten laufen ueber `LegalPageShell.jsx` plus die jeweiligen Content-Komponenten und sollen ohne Client-Hydration bleiben, solange kein echter Interaktionsbedarf entsteht.**
7. **Bilder gehoeren in `public/` und sollten bevorzugt als WebP eingebunden werden.**
8. **Website-Texte bleiben auf Deutsch und klar im B2B-Kontext.**
9. **Alle Preise sind Nettopreise.**
