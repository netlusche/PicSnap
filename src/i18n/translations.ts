// Flat key/value translations, keyed by language. Mirrors the MelodyMatch i18n shape.
export const translations = {
  en: {
    appName: 'PicSnap',
    tagline: 'See it. Snap it. Score it.',
    theme: 'Theme',
    language: 'Language',

    // Setup screen
    setupPlayers: 'Players',
    player: 'Player',
    addPlayer: 'Add Player',
    setupRounds: 'Rounds',
    setupLanguage: 'Language',
    next: 'Next',

    // Category screen
    categoriesTitle: 'Categories',
    categoryHelper: 'Choose one or more categories to build your image pool.',
    start: 'Start Game',
    noticeTitle: 'Notice',
    selectAtLeastOne: 'Please select at least one category before starting the game.',
    ok: 'OK',
    back: 'Back',

    // Misc / game shell
    startOver: 'Start over',
    comingSoon: 'Game loop coming in the next step.',
    roundLabel: 'Round',

    // Category names
    cat_places: 'Places & Cities',
    cat_geo: 'Geo-Roulette',
    cat_people: 'Famous People',
    cat_bands: 'Bands & Musicians',
    cat_movies: 'Movies & Series',
    cat_sport: 'Sports',
    cat_history: 'History',

    // Category field hints (what the player answers)
    cat_places_fields: 'What is it? / Which country?',
    cat_geo_fields: 'Which city? / Which country?',
    cat_people_fields: 'Who is it? / Known for?',
    cat_bands_fields: 'Who / which band? / Genre?',
    cat_movies_fields: 'Which movie / series?',
    cat_sport_fields: 'Who / what? / Which club or country?',
    cat_history_fields: 'What is shown? / When (roughly)?',
  },
  de: {
    appName: 'PicSnap',
    tagline: 'Sehen. Tippen. Punkten.',
    theme: 'Theme',
    language: 'Sprache',

    // Setup screen
    setupPlayers: 'Spieler',
    player: 'Spieler',
    addPlayer: 'Spieler hinzufügen',
    setupRounds: 'Runden',
    setupLanguage: 'Sprache',
    next: 'Weiter',

    // Category screen
    categoriesTitle: 'Kategorien',
    categoryHelper: 'Wähle eine oder mehrere Kategorien, um den Bild-Pool zu bestimmen.',
    start: 'Spiel starten',
    noticeTitle: 'Hinweis',
    selectAtLeastOne: 'Bitte wähle mindestens eine Kategorie aus, bevor du das Spiel startest.',
    ok: 'OK',
    back: 'Zurück',

    // Misc / game shell
    startOver: 'Neu starten',
    comingSoon: 'Die Spielschleife folgt im nächsten Schritt.',
    roundLabel: 'Runde',

    // Category names
    cat_places: 'Orte & Städte',
    cat_geo: 'Geo-Roulette',
    cat_people: 'Berühmte Personen',
    cat_bands: 'Bands & Musiker',
    cat_movies: 'Film & Serien',
    cat_sport: 'Sport',
    cat_history: 'Geschichte',

    // Category field hints (what the player answers)
    cat_places_fields: 'Was ist das? / Welches Land?',
    cat_geo_fields: 'Welche Stadt? / Welches Land?',
    cat_people_fields: 'Wer ist das? / Womit bekannt?',
    cat_bands_fields: 'Wer / welche Band? / Genre?',
    cat_movies_fields: 'Welcher Film / Serie?',
    cat_sport_fields: 'Wer / was? / Welcher Verein oder Land?',
    cat_history_fields: 'Was ist zu sehen? / Wann (grob)?',
  },
} as const;

export type TranslationKey = keyof typeof translations['en'];
