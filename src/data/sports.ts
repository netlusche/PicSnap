// Curated list of famous athletes for the "Sport" category.
// `category` is the Wikimedia Commons category (without "Category:" prefix).
// Commons athlete categories contain action shots, press photos, award ceremonies.
// Secondary answer is country (matches q_sport_secondary: "Which club or country?").

export interface SportEntry {
  name: string;
  category: string;
  country: { en: string; de: string };
}

export const SPORTS: SportEntry[] = [
  // ── Football (Soccer) ──────────────────────────────────────────────────────
  { name: 'Pelé',                  category: 'Pelé',                          country: { en: 'Brazil',           de: 'Brasilien' } },
  { name: 'Diego Maradona',        category: 'Diego Maradona',                country: { en: 'Argentina',        de: 'Argentinien' } },
  { name: 'Lionel Messi',          category: 'Lionel Messi',                  country: { en: 'Argentina',        de: 'Argentinien' } },
  { name: 'Cristiano Ronaldo',     category: 'Cristiano Ronaldo',             country: { en: 'Portugal',         de: 'Portugal' } },
  { name: 'Zinedine Zidane',       category: 'Zinedine Zidane',               country: { en: 'France',           de: 'Frankreich' } },
  { name: 'Ronaldo',               category: 'Ronaldo',                       country: { en: 'Brazil',           de: 'Brasilien' } },
  { name: 'Ronaldinho',            category: 'Ronaldinho',                    country: { en: 'Brazil',           de: 'Brasilien' } },
  { name: 'Neymar',                category: 'Neymar',                        country: { en: 'Brazil',           de: 'Brasilien' } },
  { name: 'Kylian Mbappé',         category: 'Kylian Mbappé',                 country: { en: 'France',           de: 'Frankreich' } },
  { name: 'Thierry Henry',         category: 'Thierry Henry',                 country: { en: 'France',           de: 'Frankreich' } },
  { name: 'David Beckham',         category: 'David Beckham',                 country: { en: 'England',          de: 'England' } },
  { name: 'Franz Beckenbauer',     category: 'Franz Beckenbauer',             country: { en: 'Germany',          de: 'Deutschland' } },
  { name: 'Johan Cruyff',          category: 'Johan Cruyff',                  country: { en: 'Netherlands',      de: 'Niederlande' } },
  { name: 'George Best',           category: 'George Best',                   country: { en: 'Northern Ireland', de: 'Nordirland' } },
  { name: 'Marta',                 category: 'Marta (footballer)',             country: { en: 'Brazil',           de: 'Brasilien' } },
  { name: 'Zlatan Ibrahimović',    category: 'Zlatan Ibrahimović',            country: { en: 'Sweden',           de: 'Schweden' } },
  { name: 'Gerd Müller',           category: 'Gerd Müller',                   country: { en: 'Germany',          de: 'Deutschland' } },
  { name: 'Michel Platini',        category: 'Michel Platini',                country: { en: 'France',           de: 'Frankreich' } },
  { name: 'Roberto Baggio',        category: 'Roberto Baggio',                country: { en: 'Italy',            de: 'Italien' } },
  { name: 'Ronaldo Nazário',       category: 'Ronaldo Nazário',               country: { en: 'Brazil',           de: 'Brasilien' } },

  // ── Basketball ─────────────────────────────────────────────────────────────
  { name: 'Michael Jordan',        category: 'Michael Jordan',                country: { en: 'USA',              de: 'USA' } },
  { name: 'LeBron James',          category: 'LeBron James',                  country: { en: 'USA',              de: 'USA' } },
  { name: 'Kobe Bryant',           category: 'Kobe Bryant',                   country: { en: 'USA',              de: 'USA' } },
  { name: 'Magic Johnson',         category: 'Magic Johnson',                 country: { en: 'USA',              de: 'USA' } },
  { name: "Shaquille O'Neal",      category: "Shaquille O'Neal",              country: { en: 'USA',              de: 'USA' } },
  { name: 'Larry Bird',            category: 'Larry Bird',                    country: { en: 'USA',              de: 'USA' } },
  { name: 'Stephen Curry',         category: 'Stephen Curry',                 country: { en: 'USA',              de: 'USA' } },

  // ── Tennis ─────────────────────────────────────────────────────────────────
  { name: 'Roger Federer',         category: 'Roger Federer',                 country: { en: 'Switzerland',      de: 'Schweiz' } },
  { name: 'Rafael Nadal',          category: 'Rafael Nadal',                  country: { en: 'Spain',            de: 'Spanien' } },
  { name: 'Novak Djokovic',        category: 'Novak Djokovic',                country: { en: 'Serbia',           de: 'Serbien' } },
  { name: 'Serena Williams',       category: 'Serena Williams',               country: { en: 'USA',              de: 'USA' } },
  { name: 'Venus Williams',        category: 'Venus Williams',                country: { en: 'USA',              de: 'USA' } },
  { name: 'Steffi Graf',           category: 'Steffi Graf',                   country: { en: 'Germany',          de: 'Deutschland' } },
  { name: 'Martina Navratilova',   category: 'Martina Navratilova',           country: { en: 'USA',              de: 'USA' } },
  { name: 'Billie Jean King',      category: 'Billie Jean King',              country: { en: 'USA',              de: 'USA' } },
  { name: 'Pete Sampras',          category: 'Pete Sampras',                  country: { en: 'USA',              de: 'USA' } },
  { name: 'Boris Becker',          category: 'Boris Becker',                  country: { en: 'Germany',          de: 'Deutschland' } },
  { name: 'Andre Agassi',          category: 'Andre Agassi',                  country: { en: 'USA',              de: 'USA' } },

  // ── Athletics ──────────────────────────────────────────────────────────────
  { name: 'Usain Bolt',            category: 'Usain Bolt',                    country: { en: 'Jamaica',          de: 'Jamaika' } },
  { name: 'Jesse Owens',           category: 'Jesse Owens',                   country: { en: 'USA',              de: 'USA' } },
  { name: 'Carl Lewis',            category: 'Carl Lewis',                    country: { en: 'USA',              de: 'USA' } },
  { name: 'Florence Griffith-Joyner', category: 'Florence Griffith-Joyner',  country: { en: 'USA',              de: 'USA' } },
  { name: 'Michael Johnson',       category: 'Michael Johnson (sprinter)',    country: { en: 'USA',              de: 'USA' } },
  { name: 'Haile Gebrselassie',    category: 'Haile Gebrselassie',            country: { en: 'Ethiopia',         de: 'Äthiopien' } },
  { name: 'Eliud Kipchoge',        category: 'Eliud Kipchoge',                country: { en: 'Kenya',            de: 'Kenia' } },

  // ── Boxing ─────────────────────────────────────────────────────────────────
  { name: 'Muhammad Ali',          category: 'Muhammad Ali',                  country: { en: 'USA',              de: 'USA' } },
  { name: 'Mike Tyson',            category: 'Mike Tyson',                    country: { en: 'USA',              de: 'USA' } },
  { name: 'Floyd Mayweather Jr.',  category: 'Floyd Mayweather Jr.',          country: { en: 'USA',              de: 'USA' } },
  { name: 'Joe Louis',             category: 'Joe Louis',                     country: { en: 'USA',              de: 'USA' } },

  // ── Swimming ───────────────────────────────────────────────────────────────
  { name: 'Michael Phelps',        category: 'Michael Phelps',                country: { en: 'USA',              de: 'USA' } },
  { name: 'Katie Ledecky',         category: 'Katie Ledecky',                 country: { en: 'USA',              de: 'USA' } },

  // ── Gymnastics ─────────────────────────────────────────────────────────────
  { name: 'Simone Biles',          category: 'Simone Biles',                  country: { en: 'USA',              de: 'USA' } },
  { name: 'Nadia Comaneci',        category: 'Nadia Comaneci',                country: { en: 'Romania',          de: 'Rumänien' } },

  // ── Formula One ────────────────────────────────────────────────────────────
  { name: 'Ayrton Senna',          category: 'Ayrton Senna',                  country: { en: 'Brazil',           de: 'Brasilien' } },
  { name: 'Michael Schumacher',    category: 'Michael Schumacher',            country: { en: 'Germany',          de: 'Deutschland' } },
  { name: 'Lewis Hamilton',        category: 'Lewis Hamilton',                country: { en: 'United Kingdom',   de: 'Großbritannien' } },
  { name: 'Sebastian Vettel',      category: 'Sebastian Vettel',              country: { en: 'Germany',          de: 'Deutschland' } },
  { name: 'Niki Lauda',            category: 'Niki Lauda',                    country: { en: 'Austria',          de: 'Österreich' } },
  { name: 'Max Verstappen',        category: 'Max Verstappen',                country: { en: 'Netherlands',      de: 'Niederlande' } },

  // ── Cycling ────────────────────────────────────────────────────────────────
  { name: 'Eddy Merckx',           category: 'Eddy Merckx',                   country: { en: 'Belgium',          de: 'Belgien' } },
  { name: 'Lance Armstrong',       category: 'Lance Armstrong',               country: { en: 'USA',              de: 'USA' } },

  // ── Golf ───────────────────────────────────────────────────────────────────
  { name: 'Tiger Woods',           category: 'Tiger Woods',                   country: { en: 'USA',              de: 'USA' } },
  { name: 'Jack Nicklaus',         category: 'Jack Nicklaus',                 country: { en: 'USA',              de: 'USA' } },

  // ── Baseball / Ice Hockey / American Football ──────────────────────────────
  { name: 'Babe Ruth',             category: 'Babe Ruth',                     country: { en: 'USA',              de: 'USA' } },
  { name: 'Wayne Gretzky',         category: 'Wayne Gretzky',                 country: { en: 'Canada',           de: 'Kanada' } },
  { name: 'Tom Brady',             category: 'Tom Brady',                     country: { en: 'USA',              de: 'USA' } },

  // ── Figure Skating / Winter ────────────────────────────────────────────────
  { name: 'Katarina Witt',         category: 'Katarina Witt',                 country: { en: 'Germany',          de: 'Deutschland' } },

  // ── Motorcycling ───────────────────────────────────────────────────────────
  { name: 'Valentino Rossi',       category: 'Valentino Rossi',               country: { en: 'Italy',            de: 'Italien' } },
];
