// Curated list of films for the "Movies & Series" category.
// Uses Wikimedia Commons categories (film stills, production photos) rather
// than Wikipedia lead images, which are mostly non-free for modern films.
// `category` is the Wikimedia Commons category (without "Category:" prefix).
// `decade` is the release decade base year (e.g. 1970 → "1970s" / "1970er").

export interface MovieEntry {
  title: string;
  category: string;
  decade: number;
}

export const MOVIES: MovieEntry[] = [
  // ── Silent Era ─────────────────────────────────────────────────────────────
  { title: 'The Birth of a Nation',            category: 'The Birth of a Nation (film)',               decade: 1910 },
  { title: 'Intolerance',                       category: 'Intolerance (film)',                         decade: 1910 },
  { title: 'Metropolis',                        category: 'Metropolis (film)',                          decade: 1920 },
  { title: 'Nosferatu',                         category: 'Nosferatu',                                  decade: 1920 },
  { title: 'The Cabinet of Dr. Caligari',      category: 'Das Cabinet des Dr. Caligari',               decade: 1920 },
  { title: 'The General',                       category: 'The General',                                decade: 1920 },

  // ── 1930s ──────────────────────────────────────────────────────────────────
  { title: 'City Lights',                       category: 'City Lights',                                decade: 1930 },
  { title: 'Modern Times',                      category: 'Modern Times (film)',                        decade: 1930 },
  { title: 'Snow White and the Seven Dwarfs',   category: 'Snow White and the Seven Dwarfs (1937 film)', decade: 1930 },
  { title: 'Gone with the Wind',                category: 'Gone with the Wind (film)',                  decade: 1930 },
  { title: 'The Wizard of Oz',                  category: 'The Wizard of Oz (1939 film)',               decade: 1930 },
  { title: 'King Kong',                         category: 'King Kong (1933 film)',                      decade: 1930 },
  { title: 'Frankenstein',                      category: 'Frankenstein (1931 film)',                   decade: 1930 },
  { title: 'Dracula',                           category: 'Dracula (1931 film)',                        decade: 1930 },
  { title: 'The Adventures of Robin Hood',      category: 'The Adventures of Robin Hood',               decade: 1930 },

  // ── 1940s ──────────────────────────────────────────────────────────────────
  { title: 'Pinocchio',                         category: 'Pinocchio (1940 film)',                      decade: 1940 },
  { title: 'Fantasia',                          category: 'Fantasia (1940 film)',                       decade: 1940 },
  { title: 'Dumbo',                             category: 'Dumbo (film)',                               decade: 1940 },
  { title: 'Bambi',                             category: 'Bambi (film)',                               decade: 1940 },
  { title: 'Casablanca',                        category: 'Casablanca (film)',                          decade: 1940 },
  { title: 'Citizen Kane',                      category: 'Citizen Kane',                               decade: 1940 },
  { title: 'The Maltese Falcon',                category: 'The Maltese Falcon (1941 film)',             decade: 1940 },
  { title: 'Double Indemnity',                  category: 'Double Indemnity (film)',                    decade: 1940 },
  { title: 'Bicycle Thieves',                   category: 'Ladri di biciclette',                        decade: 1940 },
  { title: "It's a Wonderful Life",             category: "It's a Wonderful Life",                      decade: 1940 },
  { title: 'The Third Man',                     category: 'The Third Man (film)',                       decade: 1940 },
  { title: 'Notorious',                         category: 'Notorious (1946 film)',                      decade: 1940 },

  // ── 1950s ──────────────────────────────────────────────────────────────────
  { title: 'Sleeping Beauty',                   category: 'Sleeping Beauty (1959 film)',                decade: 1950 },
  { title: 'Sunset Boulevard',                  category: 'Sunset Boulevard',                           decade: 1950 },
  { title: "Singin' in the Rain",               category: "Singin' in the Rain",                        decade: 1950 },
  { title: 'Rear Window',                       category: 'Rear Window',                                decade: 1950 },
  { title: 'Rashomon',                          category: 'Rashomon',                                   decade: 1950 },
  { title: 'Seven Samurai',                     category: 'Seven Samurai',                              decade: 1950 },
  { title: '12 Angry Men',                      category: '12 Angry Men (film)',                        decade: 1950 },
  { title: 'Some Like It Hot',                  category: 'Some Like It Hot',                           decade: 1950 },
  { title: 'Vertigo',                           category: 'Vertigo (film)',                             decade: 1950 },
  { title: 'North by Northwest',                category: 'North by Northwest',                         decade: 1950 },
  { title: 'Ben-Hur',                           category: 'Ben-Hur (1959 film)',                        decade: 1950 },
  { title: 'The Bridge on the River Kwai',      category: 'The Bridge on the River Kwai',              decade: 1950 },
  { title: 'The Seventh Seal',                  category: 'The Seventh Seal',                           decade: 1950 },
  { title: 'The 400 Blows',                     category: 'The 400 Blows',                              decade: 1950 },

  // ── 1960s ──────────────────────────────────────────────────────────────────
  { title: 'The Jungle Book',                   category: 'The Jungle Book (1967 film)',                decade: 1960 },
  { title: 'Psycho',                            category: 'Psycho (1960 film)',                         decade: 1960 },
  { title: 'Lawrence of Arabia',                category: 'Lawrence of Arabia (film)',                  decade: 1960 },
  { title: '8½',                                category: '8½ (film)',                                   decade: 1960 },
  { title: 'Dr. Strangelove',                   category: 'Dr. Strangelove',                            decade: 1960 },
  { title: 'The Sound of Music',                category: 'The Sound of Music (film)',                  decade: 1960 },
  { title: 'The Good, the Bad and the Ugly',    category: 'Il buono, il brutto, il cattivo',            decade: 1960 },
  { title: 'A Fistful of Dollars',              category: 'Per un pugno di dollari',                    decade: 1960 },
  { title: '2001: A Space Odyssey',             category: '2001: A Space Odyssey',                      decade: 1960 },
  { title: 'Once Upon a Time in the West',      category: "C'era una volta il West",                    decade: 1960 },
  { title: 'The Graduate',                      category: 'The Graduate (film)',                        decade: 1960 },
  { title: 'Bonnie and Clyde',                  category: 'Bonnie and Clyde (film)',                    decade: 1960 },
  { title: 'Spartacus',                         category: 'Spartacus (film)',                           decade: 1960 },

  // ── 1970s ──────────────────────────────────────────────────────────────────
  { title: 'The Godfather',                     category: 'The Godfather',                              decade: 1970 },
  { title: 'Apocalypse Now',                    category: 'Apocalypse Now',                             decade: 1970 },
  { title: 'Jaws',                              category: 'Jaws (film)',                                decade: 1970 },
  { title: 'Taxi Driver',                       category: 'Taxi Driver',                                decade: 1970 },
  { title: 'Chinatown',                         category: 'Chinatown (1974 film)',                      decade: 1970 },
  { title: 'Rocky',                             category: 'Rocky (film)',                               decade: 1970 },
  { title: 'A Clockwork Orange',                category: 'A Clockwork Orange (film)',                  decade: 1970 },
  { title: 'Star Wars',                         category: 'Star Wars',                                  decade: 1970 },
  { title: 'The Exorcist',                      category: 'The Exorcist (film)',                        decade: 1970 },
  { title: "One Flew Over the Cuckoo's Nest",   category: "One Flew Over the Cuckoo's Nest (film)",    decade: 1970 },
  { title: 'Annie Hall',                        category: 'Annie Hall',                                 decade: 1970 },
  { title: 'Barry Lyndon',                      category: 'Barry Lyndon',                               decade: 1970 },
  { title: 'Alien',                             category: 'Alien (film)',                               decade: 1970 },

  // ── 1980s ──────────────────────────────────────────────────────────────────
  { title: 'The Empire Strikes Back',           category: 'The Empire Strikes Back (film)',             decade: 1980 },
  { title: 'Raiders of the Lost Ark',           category: 'Raiders of the Lost Ark',                   decade: 1980 },
  { title: 'E.T. the Extra-Terrestrial',        category: 'E.T. the Extra-Terrestrial',                decade: 1980 },
  { title: 'Blade Runner',                      category: 'Blade Runner',                               decade: 1980 },
  { title: 'Scarface',                          category: 'Scarface (1983 film)',                       decade: 1980 },
  { title: 'The Terminator',                    category: 'The Terminator',                             decade: 1980 },
  { title: 'Back to the Future',                category: 'Back to the Future',                         decade: 1980 },
  { title: 'Platoon',                           category: 'Platoon (film)',                             decade: 1980 },
  { title: 'Full Metal Jacket',                 category: 'Full Metal Jacket',                          decade: 1980 },
  { title: 'Die Hard',                          category: 'Die Hard',                                   decade: 1980 },

  // ── 1990s ──────────────────────────────────────────────────────────────────
  { title: 'Goodfellas',                        category: 'Goodfellas',                                 decade: 1990 },
  { title: 'The Silence of the Lambs',          category: 'The Silence of the Lambs (film)',            decade: 1990 },
  { title: "Schindler's List",                  category: "Schindler's List",                           decade: 1990 },
  { title: 'Pulp Fiction',                      category: 'Pulp Fiction (film)',                        decade: 1990 },
  { title: 'Forrest Gump',                      category: 'Forrest Gump',                               decade: 1990 },
  { title: 'The Shawshank Redemption',          category: 'The Shawshank Redemption',                  decade: 1990 },
  { title: 'Fargo',                             category: 'Fargo (1996 film)',                          decade: 1990 },
  { title: 'Titanic',                           category: 'Titanic (1997 film)',                        decade: 1990 },
  { title: 'The Matrix',                        category: 'The Matrix (film)',                          decade: 1990 },
];
