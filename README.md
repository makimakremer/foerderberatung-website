# CO2 Sparhalt - Förderberatung Website

Professionelle Förderberatungs-Website für Fuchs Heizungen. Multi-Page Next.js App mit Tailwind CSS und award-winning Design.

## 🎯 Features

- **Förder-Kalkulator** - Gated Lead-Generator mit korrekter BEG-Berechnung
- **Wissen/Blog** - Alle Förderprogramme (BEG, KfW, KWKG) ausführlich erklärt
- **Regionalbanken** - Übersicht über Landesförderbanken
- **Testimonials** - Erfolgsgeschichten mit echten Zahlen
- **Responsive Design** - Mobile-First, optimiert für alle Geräte
- **SEO-optimiert** - Meta-Tags, semantisches HTML

## 🎨 Design System

Siehe `DESIGN_SYSTEM.md` für:
- Definiertes Colorboard mit Begründung
- Typografie-System (Inter + JetBrains Mono)
- Component-Library
- Animation Principles (Framer Motion)
- Accessibility-Standards

## 🛠️ Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animationen)
- **Heroicons** (Icons)
- **Static Export** für GitHub Pages

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
```

Statische Dateien werden in `out/` generiert.

## 📤 Deployment

Die Website wird automatisch via GitHub Actions bei jedem Push auf `main` deployt.

**Live URL:** [https://makimakremer.github.io/foerderberatung-website](https://makimakremer.github.io/foerderberatung-website)

### Manuelle Deployment-Schritte

1. Repository auf GitHub erstellen
2. GitHub Pages aktivieren (Settings > Pages > Source: GitHub Actions)
3. Push auf `main` triggert automatisches Deployment

## 📚 Seiten-Struktur

```
/                   - Homepage mit Hero, Trust-Elementen, CTAs
/kalkulator         - Förder-Kalkulator (gated)
/wissen             - Blog/Wissenssektion mit Suchfunktion
/wissen/[slug]      - Einzelartikel (BEG, KfW 458, KWKG etc.)
/regionalbanken     - Landesförderbanken-Bibliothek
/testimonials       - Ausführliche Testimonials
/ueber-uns          - Über uns
/kontakt            - Kontaktformular
/impressum          - Impressum
/datenschutz        - Datenschutzerklärung
```

## 🧮 Förder-Kalkulator Logik

**BEG Einzelmaßnahme 2025/2026:**
- Basis: 30%
- Klima-Geschwindigkeitsbonus: +20% (bei Austausch fossiler Heizung)
- Einkommensbonus: +30% (≤40.000€ zu versteuerndes Haushaltseinkommen)
- **Maximum: 70%**

**Maximale förderfähige Kosten:**
- Wärmepumpen: 60.000€
- Biomasse: 60.000€
- Solarthermie: 25.000€
- Fernwärme: 40.000€
- KWK: 50.000€

Rechtsquellen: GEG, EEG, KWKG, BEG EM Richtlinie vom 21.12.2023

## ✅ Fachliche Korrektheit

Alle Fördersätze und rechtlichen Informationen basieren auf:
- BAFA BEG EM Richtlinie (Stand Feb 2025)
- Gebäudeenergiegesetz (GEG) 2024
- KWKG (Kraft-Wärme-Kopplungsgesetz)
- Bundesanzeiger Förderrichtlinien

## 📞 Impressum

Fuchs Holding GmbH  
(Fuchs Heizungen)  
E-Mail: m.kremer@fuchs-heizungen.de  
Tel: +49 2389 900 5451

## 📄 Lizenz

© 2025 Fuchs Holding GmbH. Alle Rechte vorbehalten.
