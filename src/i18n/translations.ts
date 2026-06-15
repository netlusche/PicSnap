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
    loadingImages: 'Loading images…',
    poolTooFew: 'Too few images for this configuration — please choose fewer rounds or enable more categories.',
    ok: 'OK',
    back: 'Back',

    // Misc / game shell
    startOver: 'Start over',
    comingSoon: 'Game loop coming in the next step.',
    roundLabel: 'Round',
    selectedCategories: 'Selected categories',
    scoreBtn: 'Score',
    currentScore: 'Current score',
    restartTitle: 'Do you really want to restart?',
    restartBody: 'Your current progress will be lost.',
    cancel: 'Cancel',
    yesRestart: 'Yes, restart',

    // Game loop
    passTo: 'Pass the device to',
    beginTurn: 'Begin Turn',
    getReady: 'Get ready…',
    correct: 'Correct!',
    wrong: 'Wrong!',
    timeUp: "Time's up!",
    points: 'points',
    totalScore: 'Total Score',
    nextPlayer: 'Next',
    answer: 'Answer',
    winner: 'Winner!',
    playedImages: 'Played images',
    playedBy: 'Played by',
    likedImages: 'Liked ❤️',
    noLikedImages: 'No liked images yet. Tap ❤️ on the result screen to save them!',

    // Per-step question prompts
    q_places_primary: 'What is it?',
    q_places_secondary: 'Which country?',
    q_geo_primary: 'Which city?',
    q_geo_secondary: 'Which country?',
    q_people_primary: 'Who is it?',
    q_people_secondary: 'Known for?',
    q_bands_primary: 'Who / which band?',
    q_bands_secondary: 'Genre?',
    q_movies_primary: 'Which movie / series?',
    q_sport_primary: 'Who / what?',
    q_sport_secondary: 'Which club or country?',
    q_history_primary: 'What is shown?',
    q_history_secondary: 'When (roughly)?',

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
    loadingImages: 'Bilder werden geladen…',
    poolTooFew: 'Zu wenige Bilder für diese Konfiguration — bitte weniger Runden wählen oder weitere Kategorien aktivieren.',
    ok: 'OK',
    back: 'Zurück',

    // Misc / game shell
    startOver: 'Neu starten',
    comingSoon: 'Die Spielschleife folgt im nächsten Schritt.',
    roundLabel: 'Runde',
    selectedCategories: 'Aktive Kategorien',
    scoreBtn: 'Punkte',
    currentScore: 'Aktueller Spielstand',
    restartTitle: 'Wirklich neu starten?',
    restartBody: 'Dein Fortschritt geht verloren.',
    cancel: 'Abbrechen',
    yesRestart: 'Ja, neu starten',

    // Game loop
    passTo: 'Gerät weitergeben an',
    beginTurn: 'Runde starten',
    getReady: 'Bereit machen…',
    correct: 'Richtig!',
    wrong: 'Falsch!',
    timeUp: 'Zeit abgelaufen!',
    points: 'Punkte',
    totalScore: 'Punktestand',
    nextPlayer: 'Weiter',
    answer: 'Antwort',
    winner: 'Gewinner!',
    playedImages: 'Gespielte Bilder',
    playedBy: 'Gespielt von',
    likedImages: 'Gemerkt ❤️',
    noLikedImages: 'Noch keine gemerkten Bilder. Tippe ❤️ auf dem Ergebnis-Screen!',

    // Per-step question prompts
    q_places_primary: 'Was ist das?',
    q_places_secondary: 'Welches Land?',
    q_geo_primary: 'Welche Stadt?',
    q_geo_secondary: 'Welches Land?',
    q_people_primary: 'Wer ist das?',
    q_people_secondary: 'Womit bekannt?',
    q_bands_primary: 'Wer / welche Band?',
    q_bands_secondary: 'Genre?',
    q_movies_primary: 'Welcher Film / Serie?',
    q_sport_primary: 'Wer / was?',
    q_sport_secondary: 'Welcher Verein oder Land?',
    q_history_primary: 'Was ist zu sehen?',
    q_history_secondary: 'Wann (grob)?',

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
