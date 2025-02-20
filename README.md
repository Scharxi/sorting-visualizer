# Sortieralgorithmen Visualizer

Eine interaktive Web-Anwendung zur Visualisierung von Sortieralgorithmen, entwickelt mit Next.js 14, TypeScript und Tailwind CSS.

## 🚀 Features

- **Interaktive Visualisierung** verschiedener Sortieralgorithmen in Echtzeit
- **Algorithmen**:
  - Bubble Sort (O(n²))
  - Quick Sort (O(n log n))
- **Anpassbare Darstellung**:
  - Farbwahl für die Balken
  - Dark/Light Mode
  - Responsive Design
- **Detaillierte Informationen** zu jedem Algorithmus:
  - Zeitkomplexität
  - Speicherkomplexität
  - Stabilität
  - Funktionsweise

## 🛠 Technologien

- **Framework**: Next.js 14 (App Router)
- **Sprache**: TypeScript
- **Styling**: 
  - Tailwind CSS
  - Shadcn UI
  - Radix UI
- **State Management**: React Hooks
- **Theme Management**: next-themes

## 🏗 Projektstruktur
```
src/
├── app/ # Next.js App Router
├── components/
│ ├── sorting/ # Sortieralgorithmen Komponenten
│ │ ├── array-bars.tsx
│ │ ├── color-picker.tsx
│ │ └── ...
│ └── ui/ # UI Komponenten (shadcn)
├── hooks/ # Custom React Hooks
└── lib/ # Utilities und Algorithmen
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## 🎯 Funktionsweise

- **Algorithmenauswahl**: Wählen Sie zwischen verschiedenen Sortieralgorithmen
- **Visualisierung**: 
  - Aktive Elemente werden hervorgehoben
  - Abgeschlossene Sortierung wird durch Animation bestätigt
  - Tooltips zeigen die Werte der einzelnen Elemente
- **Steuerung**:
  - Start/Stop der Sortierung
  - Array neu generieren
  - Farbauswahl für die Balken

## 🔄 Algorithmen

### Bubble Sort
- **Zeitkomplexität**: O(n²)
- **Speicherkomplexität**: O(1)
- **Stabil**: Ja
- **Funktionsweise**: Vergleicht benachbarte Elemente und tauscht sie bei Bedarf

### Quick Sort
- **Zeitkomplexität**: O(n log n)
- **Speicherkomplexität**: O(log n)
- **Stabil**: Nein
- **Funktionsweise**: Teilt das Array rekursiv anhand von Pivot-Elementen

## 🎨 Anpassung

- **Farben**: Nutzen Sie den Color Picker für individuelle Balkenfarben
- **Theme**: Wählen Sie zwischen Light, Dark und System Theme
- **Responsive**: Optimiert für verschiedene Bildschirmgrößen

## 🤝 Beitragen

Beiträge sind willkommen! Mögliche Erweiterungen:
- Weitere Sortieralgorithmen
- Zusätzliche Visualisierungsoptionen
- Performance-Optimierungen
- Internationalisierung

## 📝 Lizenz

MIT

## 👥 Autor

BxfferOverflow

---

Entwickelt als Lernprojekt zur Visualisierung von Algorithmen und modernen Web-Technologien.
