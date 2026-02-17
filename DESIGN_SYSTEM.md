# Design System - CO2 Sparhalt / Förderberatung

## Colorboard

### Primärfarben

**Deep Forest Green** `#1B4D3E`
- **Verwendung**: Hauptnavigation, CTAs, Trust-Elemente
- **Begründung**: Symbolisiert Nachhaltigkeit, Vertrauen und Langlebigkeit. Grün ist die Farbe der Energiewende und vermittelt Kompetenz im Bereich klimafreundliche Heiztechnik.

**Warm Copper** `#D17A3E`
- **Verwendung**: Akzente, Hover-States, wichtige Highlights
- **Begründung**: Wärme (Heizung), Energie, freundliche Seriosität. Copper als Metall in Heizungssystemen schafft thematischen Bezug.

**Clean White** `#FFFFFF`
- **Verwendung**: Backgrounds, Text auf dunklen Flächen
- **Begründung**: Klarheit, Professionalität, maximale Lesbarkeit

**Slate Gray** `#2D3748`
- **Verwendung**: Body-Text, sekundäre Elemente
- **Begründung**: Moderne Neutralität, hoher Kontrast für Accessibility

### Sekundärfarben

**Ice Blue** `#E8F4F8`
- **Verwendung**: Subtle Backgrounds, Sections
- **Begründung**: Frische, Effizienz, beruhigend

**Success Green** `#10B981`
- **Verwendung**: Erfolgsmeldungen, positive Indikatoren
- **Begründung**: Bestätigung, Fortschritt

**Alert Amber** `#F59E0B`
- **Verwendung**: Wichtige Hinweise, Deadlines
- **Begründung**: Aufmerksamkeit ohne Alarm

**Error Red** `#EF4444`
- **Verwendung**: Fehler, kritische Warnungen
- **Begründung**: Klare Kommunikation von Problemen

## Typografie

### Schriftarten

**Headings**: Inter (Google Fonts)
- Font Weights: 600 (Semibold), 700 (Bold), 800 (Extrabold)
- Modern, professionell, exzellente Lesbarkeit

**Body**: Inter (Google Fonts)
- Font Weights: 400 (Regular), 500 (Medium)
- Konsistenz mit Headlines, optimale Lesbarkeit

**Zahlen/Fakten**: JetBrains Mono (für Förderquoten im Kalkulator)
- Monospace für präzise numerische Darstellung

### Type Scale

```
h1: 3.5rem (56px) / line-height: 1.1 / weight: 800
h2: 2.5rem (40px) / line-height: 1.2 / weight: 700
h3: 2rem (32px) / line-height: 1.3 / weight: 600
h4: 1.5rem (24px) / line-height: 1.4 / weight: 600
h5: 1.25rem (20px) / line-height: 1.5 / weight: 600
body-large: 1.125rem (18px) / line-height: 1.6 / weight: 400
body: 1rem (16px) / line-height: 1.6 / weight: 400
body-small: 0.875rem (14px) / line-height: 1.5 / weight: 400
```

## Spacing System

Basierend auf 8px-Grid:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px

## Components

### Buttons

**Primary CTA**
- Background: Deep Forest Green (#1B4D3E)
- Hover: Warm Copper (#D17A3E)
- Text: Clean White
- Border-radius: 8px
- Padding: 16px 32px
- Font-size: 1.125rem
- Font-weight: 600
- Shadow: 0 4px 14px rgba(27, 77, 62, 0.25)

**Secondary CTA**
- Background: Transparent
- Border: 2px solid Deep Forest Green
- Text: Deep Forest Green
- Hover: Deep Forest Green background + White text

### Cards

- Background: White
- Border-radius: 12px
- Shadow: 0 2px 20px rgba(0, 0, 0, 0.08)
- Padding: 32px
- Hover: Shadow uplift to 0 8px 30px rgba(0, 0, 0, 0.12)

### Trust Badges

- Circular icons mit Checkmark
- Background: Success Green
- Icon: White
- Size: 64px
- Shadow: subtle

## Animation Principles

**Framer Motion Variants:**
- Fade-in: opacity 0 → 1, duration 0.5s
- Slide-up: y: 20 → 0, duration 0.6s
- Scale: scale 0.95 → 1, duration 0.4s

**Hover Transitions:**
- Duration: 0.3s
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

## Grid System

**Desktop (1280px+)**: 12 columns, 24px gutter
**Tablet (768px - 1279px)**: 8 columns, 20px gutter
**Mobile (<768px)**: 4 columns, 16px gutter

## Responsive Breakpoints

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## Accessibility

- Minimum contrast ratio: 4.5:1 für Text
- Focus states: 3px solid outline in Warm Copper
- Keyboard navigation: Alle interaktiven Elemente erreichbar
- ARIA labels: Für alle wichtigen UI-Elemente
- Screen reader friendly: Semantisches HTML

## Design Philosophy

**Award-Winning Principles:**
1. **Klarheit über Komplexität** - Förderung ist kompliziert, Design ist klar
2. **Trust through Transparency** - Offene Kommunikation, klare Prozesse
3. **Conversion-First** - Jede Seite führt zu einem CTA
4. **Mobile-First** - 60%+ Traffic kommt mobil
5. **Performance** - Schnelle Ladezeiten = bessere Conversion
6. **Storytelling** - Jede Section erzählt einen Teil der Customer Journey
