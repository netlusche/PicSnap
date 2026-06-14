// Flat key/value translations, keyed by language. Mirrors the MelodyMatch i18n shape.
// Extended in later steps as screens are built.
export const translations = {
  en: {
    appName: 'PicSnap',
    tagline: 'See it. Snap it. Score it.',
    scaffoldNotice: 'Project scaffold is ready. Game screens coming next.',
    theme: 'Theme',
    language: 'Language',
  },
  de: {
    appName: 'PicSnap',
    tagline: 'Sehen. Tippen. Punkten.',
    scaffoldNotice: 'Projekt-Grundgerüst steht. Spielbildschirme folgen als Nächstes.',
    theme: 'Theme',
    language: 'Sprache',
  },
} as const;

export type TranslationKey = keyof typeof translations['en'];
