# Gilbert Webdesign - Agent Context

## Projektüberblick

**Gilbert Webdesign** ist eine professionelle Marketing-/Portfolio-Website für ein gewerbliches Einzelunternehmen im Bereich Webdesign. Die Website richtet sich an B2B-Kunden im Gesundheits- und Wellness-Bereich (Arztpraxen, Physiotherapie, Wellness-Studios) in Berlin.

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
Die Startseite wird über [src/pages/index.astro] komponiert und verwendet:

- `BaseLayout` für Meta-Tags, Canonical, Open Graph und strukturierte Daten
- einzelne JSX-Komponenten pro Homepage-Section
- `FAQSection` als React-Insel mit `client:visible`
- `ContactSection` als React-Insel mit `client:visible`

### Homepage-Workflow
Die Homepage ist bewusst in kleine JSX-Dateien pro Section aufgeteilt. Der Hauptgrund ist nicht nur Code-Organisation, sondern auch die Bearbeitbarkeit durch LLMs wie Gemini und Codex.

- kleine Dateien sind leichter gezielt zu ändern
- eine Section soll möglichst nur einen klaren Verantwortungsbereich haben
- auch aktuell statische Sections dürfen als `.jsx` bestehen bleiben, wenn sie später erweitert werden könnten
- statische JSX-Komponenten sollen **ohne** `client:*` verwendet werden
- `client:load`, `client:visible` oder andere Hydration-Direktiven nur dann einsetzen, wenn eine Section echten Client-State, Events oder Browser-APIs braucht
- neue Homepage-Bereiche bevorzugt als eigene Datei in `src/components/home/` anlegen statt bestehende grosse Dateien weiter aufzublähen

### Rechtliche Seiten
Die Seiten `/impressum`, `/datenschutz` und `/agb` sind Astro-Seiten, die jeweils eine statisch gerenderte React-Komponente innerhalb von `BaseLayout` rendern. Gemeinsame Navigation, Rücklink und Footer liegen in `LegalPageShell.jsx`.

### Kontaktformular
Die API-Route [src/pages/api/contact.js] verarbeitet Formularanfragen serverseitig:

- `export const prerender = false`
- Validierung und Normalisierung der Eingaben
- HTML-Escaping für Mailinhalt
- Versand über Resend API
- Antwort als JSON

### Content-Daten
FAQ-Inhalte liegen zentral in [src/data/faqData.js]. Rechtstexte werden aktuell direkt in den React-Komponenten gepflegt, nicht mehr in separaten `.txt`-Quelldateien.

---

## Wichtige Dateien

### `src/pages/index.astro`
SEO-Einstiegspunkt der Homepage. Hier werden Title, Description, Canonical-URL, OG-Bild und JSON-LD definiert.

### `src/layouts/BaseLayout.astro`
Zentrale Layout-Datei für:

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
- Über-mich-Bereich
- Leistungen

Diese Aufteilung ist absichtlich LLM-freundlich. Wenn neue Inhalte oder neue Logik hinzukommen, sollte bevorzugt die betroffene Section-Datei angepasst werden statt mehrere Homepage-Bereiche in einer Datei zu mischen.

### `src/components/home/FAQSection.jsx`
Accordion für den FAQ-Bereich. Bezieht die Inhalte aus `faqData.js`.

### `src/components/home/ContactSection.jsx`
Footer und Kontaktformular mit:

- LocalStorage-Opt-in für Formularentwurf
- nativem `select` für das Anfragefeld
- Formularstatus für `idle`, `submitting`, `success`, `error`
- POST auf `/api/contact`

### `src/components/LegalPageShell.jsx`
Gemeinsame statische Hülle für Impressum, Datenschutz und AGB:

- einheitliche Navigation
- Rücklink zur Startseite
- konsistenter Footer
- kein clientseitiges Hydration-JavaScript für die Rechtstext-Seiten

---

## Seiten & Routing

| Route | Datei | Beschreibung |
|-------|-------|--------------|
| `/` | `src/pages/index.astro` | Homepage |
| `/impressum` | `src/pages/impressum.astro` | Impressum |
| `/datenschutz` | `src/pages/datenschutz.astro` | Datenschutzerklärung |
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
- Sitemap wird über `@astrojs/sitemap` generiert
- `robots.txt` und `llms.txt` liegen in `public/`
- WebP-Bilder für schnelle Ladezeiten
- FAQ- und Kontaktbereich werden nur bei Sichtbarkeit hydratisiert

---

## Stilrichtlinien & Design-System

Das Design ist auf eine seriöse B2B-Zielgruppe ausgerichtet: modern, aufgeräumt, minimalistisch und vertrauenerweckend.

- **Farbpalette:**
  - Slate-Töne für Hintergründe, Copy und Borders
  - Tiefes Blau für Buttons, Links, Akzente und Icon-Flächen
- **Typografie:**
  - `font-serif` für Headlines
  - `font-sans` für Fließtext
- **Formensprache & Layout:**
  - Kleine Rundungen (`rounded-sm`)
  - Großzügiger Weißraum
  - Subtile Borders und Schatten
- **Interaktion:**
  - Zurückhaltende Hover-Effekte
  - Mobile-First-Layout
  - Blur-Navigation und klare CTA-Führung
- **Inhaltlicher Ton:**
  - Professionell
  - Direkt
  - B2B-orientiert
  - Keine Emojis

---

## Hinweise für Agents

1. **Homepage-Änderungen passieren in der Regel in `src/components/home/*` und `src/pages/index.astro`.**
2. **Auch statische Homepage-Sections dürfen als `.jsx` angelegt bleiben, wenn das die künftige Bearbeitung mit LLMs vereinfacht.**
3. **Statische JSX-Sections sollen keine Hooks und keine `client:*`-Direktiven bekommen, solange sie keine echte Interaktivität brauchen.**
4. **SEO-/Meta-Änderungen gehören in `src/layouts/BaseLayout.astro` oder `src/pages/index.astro`.**
5. **FAQ-Inhalte werden in `src/data/faqData.js` gepflegt.**
6. **Das Kontaktformular hängt an `src/pages/api/contact.js` und benötigt `RESEND_API_KEY`.**
7. **Rechtliche Texte liegen aktuell in den React-Komponenten unter `src/components/`, nicht in Root-`.txt`-Dateien.**
8. **Die Rechtstext-Seiten laufen über `LegalPageShell.jsx` plus die jeweiligen Content-Komponenten und sollen ohne Client-Hydration bleiben, solange kein echter Interaktionsbedarf entsteht.**
9. **Bilder gehören in `public/` und sollten bevorzugt als WebP eingebunden werden.**
10. **Website-Texte bleiben auf Deutsch und klar im B2B-Kontext.**
11. **Alle Preise sind Nettopreise.**
