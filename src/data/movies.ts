// Curated list of films for the "Movies & Series" category.
// Uses Wikimedia Commons categories (film stills, production photos) rather
// than Wikipedia lead images, which are mostly non-free for modern films.
// `category` is the Wikimedia Commons category (without "Category:" prefix).
// Category names were verified against the Commons API to have direct JPEG/PNG files.

export interface MovieEntry {
  title: string;
  category: string;
}

export const MOVIES: MovieEntry[] = [
  // ── Silent Era ─────────────────────────────────────────────────────────────
  { title: 'Metropolis',                      category: 'Metropolis (film)' },
  { title: 'Nosferatu',                        category: 'Nosferatu' },
  { title: 'The Cabinet of Dr. Caligari',     category: 'Das Cabinet des Dr. Caligari' },
  { title: 'The General',                      category: 'The General' },
  { title: 'City Lights',                      category: 'City Lights' },
  { title: 'Modern Times',                     category: 'Modern Times (film)' },
  { title: 'The Birth of a Nation',            category: 'The Birth of a Nation (film)' },
  { title: 'Intolerance',                      category: 'Intolerance (film)' },

  // ── 1930s ──────────────────────────────────────────────────────────────────
  { title: 'Gone with the Wind',               category: 'Gone with the Wind (film)' },
  { title: 'The Wizard of Oz',                 category: 'The Wizard of Oz (1939 film)' },
  { title: 'King Kong',                        category: 'King Kong (1933 film)' },
  { title: 'Snow White and the Seven Dwarfs',  category: 'Snow White and the Seven Dwarfs (1937 film)' },
  { title: 'Frankenstein',                     category: 'Frankenstein (1931 film)' },
  { title: 'Dracula',                          category: 'Dracula (1931 film)' },
  { title: 'The Adventures of Robin Hood',     category: 'The Adventures of Robin Hood' },

  // ── 1940s ──────────────────────────────────────────────────────────────────
  { title: 'Casablanca',                       category: 'Casablanca (film)' },
  { title: 'Citizen Kane',                     category: 'Citizen Kane' },
  { title: 'The Maltese Falcon',               category: 'The Maltese Falcon (1941 film)' },
  { title: 'Double Indemnity',                 category: 'Double Indemnity (film)' },
  { title: 'Rebecca',                          category: 'Rebecca (1940 film)' },
  { title: 'Bicycle Thieves',                  category: 'Ladri di biciclette' },
  { title: "It's a Wonderful Life",            category: "It's a Wonderful Life" },
  { title: 'The Third Man',                    category: 'The Third Man (film)' },
  { title: 'Notorious',                        category: 'Notorious (1946 film)' },

  // ── 1950s ──────────────────────────────────────────────────────────────────
  { title: 'Sunset Boulevard',                 category: 'Sunset Boulevard' },
  { title: "Singin' in the Rain",              category: "Singin' in the Rain" },
  { title: 'Rear Window',                      category: 'Rear Window' },
  { title: 'Rashomon',                         category: 'Rashomon' },
  { title: 'Seven Samurai',                    category: 'Seven Samurai' },
  { title: '12 Angry Men',                     category: '12 Angry Men (film)' },
  { title: 'Some Like It Hot',                 category: 'Some Like It Hot' },
  { title: 'Vertigo',                          category: 'Vertigo (film)' },
  { title: 'North by Northwest',               category: 'North by Northwest' },
  { title: 'Ben-Hur',                          category: 'Ben-Hur (1959 film)' },
  { title: 'The Bridge on the River Kwai',     category: 'The Bridge on the River Kwai' },
  { title: 'The Seventh Seal',                 category: 'The Seventh Seal' },

  // ── 1960s ──────────────────────────────────────────────────────────────────
  { title: 'Psycho',                           category: 'Psycho (1960 film)' },
  { title: 'Lawrence of Arabia',               category: 'Lawrence of Arabia (film)' },
  { title: '8½',                               category: '8½ (film)' },
  { title: 'The 400 Blows',                    category: 'The 400 Blows' },
  { title: 'Dr. Strangelove',                  category: 'Dr. Strangelove' },
  { title: 'The Sound of Music',               category: 'The Sound of Music (film)' },
  { title: 'The Good, the Bad and the Ugly',   category: 'Il buono, il brutto, il cattivo' },
  { title: 'A Fistful of Dollars',             category: 'Per un pugno di dollari' },
  { title: '2001: A Space Odyssey',            category: '2001: A Space Odyssey' },
  { title: 'Once Upon a Time in the West',     category: "C'era una volta il West" },
  { title: 'The Graduate',                     category: 'The Graduate (film)' },
  { title: 'Bonnie and Clyde',                 category: 'Bonnie and Clyde (film)' },
  { title: 'Spartacus',                        category: 'Spartacus (film)' },

  // ── 1970s ──────────────────────────────────────────────────────────────────
  { title: 'The Godfather',                    category: 'The Godfather' },
  { title: 'Apocalypse Now',                   category: 'Apocalypse Now' },
  { title: 'Jaws',                             category: 'Jaws (film)' },
  { title: 'Taxi Driver',                      category: 'Taxi Driver' },
  { title: 'Chinatown',                        category: 'Chinatown (1974 film)' },
  { title: 'Rocky',                            category: 'Rocky (film)' },
  { title: 'A Clockwork Orange',               category: 'A Clockwork Orange (film)' },
  { title: 'Star Wars',                        category: 'Star Wars' },
  { title: 'The Exorcist',                     category: 'The Exorcist (film)' },
  { title: "One Flew Over the Cuckoo's Nest",  category: "One Flew Over the Cuckoo's Nest (film)" },
  { title: 'Annie Hall',                       category: 'Annie Hall' },
  { title: 'Barry Lyndon',                     category: 'Barry Lyndon' },
  { title: 'Alien',                            category: 'Alien (film)' },
];
