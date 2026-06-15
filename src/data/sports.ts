// Curated list of famous athletes for the "Sport" category.
// `name` is both the display answer and the Wikipedia article title.
// `wikiTitle` overrides when disambiguation is needed.
// Secondary answer is country (matches q_sport_secondary: "Which club or country?").

export interface SportEntry {
  name: string;
  wikiTitle?: string;
  country: { en: string; de: string };
}

export const SPORTS: SportEntry[] = [
  // ── Football (Soccer) ──────────────────────────────────────────────────────
  { name: 'Pelé',                                        country: { en: 'Brazil',      de: 'Brasilien' } },
  { name: 'Diego Maradona',                              country: { en: 'Argentina',   de: 'Argentinien' } },
  { name: 'Lionel Messi',                                country: { en: 'Argentina',   de: 'Argentinien' } },
  { name: 'Cristiano Ronaldo',                           country: { en: 'Portugal',    de: 'Portugal' } },
  { name: 'Zinedine Zidane',                             country: { en: 'France',      de: 'Frankreich' } },
  { name: 'Ronaldo',  wikiTitle: 'Ronaldo',              country: { en: 'Brazil',      de: 'Brasilien' } },
  { name: 'Ronaldinho',                                  country: { en: 'Brazil',      de: 'Brasilien' } },
  { name: 'Neymar',                                      country: { en: 'Brazil',      de: 'Brasilien' } },
  { name: 'Kylian Mbappé',                               country: { en: 'France',      de: 'Frankreich' } },
  { name: 'Thierry Henry',                               country: { en: 'France',      de: 'Frankreich' } },
  { name: 'David Beckham',                               country: { en: 'England',     de: 'England' } },
  { name: 'Franz Beckenbauer',                           country: { en: 'Germany',     de: 'Deutschland' } },
  { name: 'Johan Cruyff',                                country: { en: 'Netherlands', de: 'Niederlande' } },
  { name: 'George Best',                                 country: { en: 'Northern Ireland', de: 'Nordirland' } },
  { name: 'Marta',    wikiTitle: 'Marta (footballer)',   country: { en: 'Brazil',      de: 'Brasilien' } },
  { name: 'Zlatan Ibrahimović',                          country: { en: 'Sweden',      de: 'Schweden' } },

  // ── Basketball ─────────────────────────────────────────────────────────────
  { name: 'Michael Jordan',                              country: { en: 'USA',         de: 'USA' } },
  { name: 'LeBron James',                                country: { en: 'USA',         de: 'USA' } },
  { name: 'Kobe Bryant',                                 country: { en: 'USA',         de: 'USA' } },
  { name: 'Magic Johnson',                               country: { en: 'USA',         de: 'USA' } },
  { name: 'Shaquille O\'Neal',                           country: { en: 'USA',         de: 'USA' } },
  { name: 'Larry Bird',                                  country: { en: 'USA',         de: 'USA' } },

  // ── Tennis ─────────────────────────────────────────────────────────────────
  { name: 'Roger Federer',                               country: { en: 'Switzerland', de: 'Schweiz' } },
  { name: 'Rafael Nadal',                                country: { en: 'Spain',       de: 'Spanien' } },
  { name: 'Novak Djokovic',                              country: { en: 'Serbia',      de: 'Serbien' } },
  { name: 'Serena Williams',                             country: { en: 'USA',         de: 'USA' } },
  { name: 'Venus Williams',                              country: { en: 'USA',         de: 'USA' } },
  { name: 'Steffi Graf',                                 country: { en: 'Germany',     de: 'Deutschland' } },
  { name: 'Martina Navratilova',                         country: { en: 'USA',         de: 'USA' } },
  { name: 'Billie Jean King',                            country: { en: 'USA',         de: 'USA' } },
  { name: 'Pete Sampras',                                country: { en: 'USA',         de: 'USA' } },

  // ── Athletics ──────────────────────────────────────────────────────────────
  { name: 'Usain Bolt',                                  country: { en: 'Jamaica',     de: 'Jamaika' } },
  { name: 'Jesse Owens',                                 country: { en: 'USA',         de: 'USA' } },
  { name: 'Carl Lewis',                                  country: { en: 'USA',         de: 'USA' } },
  { name: 'Florence Griffith-Joyner',                    country: { en: 'USA',         de: 'USA' } },
  { name: 'Michael Johnson',  wikiTitle: 'Michael Johnson (sprinter)', country: { en: 'USA', de: 'USA' } },
  { name: 'Haile Gebrselassie',                          country: { en: 'Ethiopia',    de: 'Äthiopien' } },
  { name: 'Eliud Kipchoge',                              country: { en: 'Kenya',       de: 'Kenia' } },

  // ── Boxing ─────────────────────────────────────────────────────────────────
  { name: 'Muhammad Ali',                                country: { en: 'USA',         de: 'USA' } },
  { name: 'Mike Tyson',                                  country: { en: 'USA',         de: 'USA' } },
  { name: 'Floyd Mayweather Jr.',                        country: { en: 'USA',         de: 'USA' } },

  // ── Swimming ───────────────────────────────────────────────────────────────
  { name: 'Michael Phelps',                              country: { en: 'USA',         de: 'USA' } },
  { name: 'Katie Ledecky',                               country: { en: 'USA',         de: 'USA' } },

  // ── Gymnastics ─────────────────────────────────────────────────────────────
  { name: 'Simone Biles',                                country: { en: 'USA',         de: 'USA' } },
  { name: 'Nadia Comaneci',                              country: { en: 'Romania',     de: 'Rumänien' } },

  // ── Formula One ────────────────────────────────────────────────────────────
  { name: 'Ayrton Senna',                                country: { en: 'Brazil',      de: 'Brasilien' } },
  { name: 'Michael Schumacher',                          country: { en: 'Germany',     de: 'Deutschland' } },
  { name: 'Lewis Hamilton',                              country: { en: 'United Kingdom', de: 'Großbritannien' } },
  { name: 'Sebastian Vettel',                            country: { en: 'Germany',     de: 'Deutschland' } },
  { name: 'Niki Lauda',                                  country: { en: 'Austria',     de: 'Österreich' } },

  // ── Cycling ────────────────────────────────────────────────────────────────
  { name: 'Eddy Merckx',                                 country: { en: 'Belgium',     de: 'Belgien' } },
  { name: 'Lance Armstrong',                             country: { en: 'USA',         de: 'USA' } },

  // ── Golf ───────────────────────────────────────────────────────────────────
  { name: 'Tiger Woods',                                 country: { en: 'USA',         de: 'USA' } },
  { name: 'Jack Nicklaus',                               country: { en: 'USA',         de: 'USA' } },

  // ── Baseball / Ice Hockey / American Football ──────────────────────────────
  { name: 'Babe Ruth',                                   country: { en: 'USA',         de: 'USA' } },
  { name: 'Wayne Gretzky',                               country: { en: 'Canada',      de: 'Kanada' } },
  { name: 'Tom Brady',                                   country: { en: 'USA',         de: 'USA' } },

  // ── Figure Skating / Winter ────────────────────────────────────────────────
  { name: 'Katarina Witt',                               country: { en: 'Germany',     de: 'Deutschland' } },

  // ── Motorcycling ───────────────────────────────────────────────────────────
  { name: 'Valentino Rossi',                             country: { en: 'Italy',       de: 'Italien' } },
];
