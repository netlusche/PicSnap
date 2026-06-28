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

  // ── More Football (Soccer) ─────────────────────────────────────────────────
  { name: 'Roberto Carlos',        category: 'Roberto Carlos',                country: { en: 'Brazil',           de: 'Brasilien' } },
  { name: 'Luka Modrić',           category: 'Luka Modrić',                   country: { en: 'Croatia',          de: 'Kroatien' } },
  { name: 'Andrés Iniesta',        category: 'Andrés Iniesta',                country: { en: 'Spain',            de: 'Spanien' } },
  { name: 'Xavi',                  category: 'Xavi',                          country: { en: 'Spain',            de: 'Spanien' } },
  { name: 'Robert Lewandowski',    category: 'Robert Lewandowski',            country: { en: 'Poland',           de: 'Polen' } },
  { name: 'Mohamed Salah',         category: 'Mohamed Salah',                 country: { en: 'Egypt',            de: 'Ägypten' } },
  { name: 'Erling Haaland',        category: 'Erling Haaland',                country: { en: 'Norway',           de: 'Norwegen' } },
  { name: 'Marco van Basten',      category: 'Marco van Basten',              country: { en: 'Netherlands',      de: 'Niederlande' } },
  { name: 'Eusébio',               category: 'Eusébio',                       country: { en: 'Portugal',         de: 'Portugal' } },
  { name: 'Didier Drogba',         category: 'Didier Drogba',                 country: { en: 'Ivory Coast',      de: 'Elfenbeinküste' } },
  { name: 'Gareth Bale',           category: 'Gareth Bale',                   country: { en: 'Wales',            de: 'Wales' } },

  // ── More Basketball ────────────────────────────────────────────────────────
  { name: 'Charles Barkley',       category: 'Charles Barkley',               country: { en: 'USA',              de: 'USA' } },
  { name: 'Kevin Durant',          category: 'Kevin Durant',                  country: { en: 'USA',              de: 'USA' } },
  { name: 'Dirk Nowitzki',         category: 'Dirk Nowitzki',                 country: { en: 'Germany',          de: 'Deutschland' } },
  { name: 'Giannis Antetokounmpo', category: 'Giannis Antetokounmpo',         country: { en: 'Greece',           de: 'Griechenland' } },

  // ── More Tennis ────────────────────────────────────────────────────────────
  { name: 'John McEnroe',          category: 'John McEnroe',                  country: { en: 'USA',              de: 'USA' } },
  { name: 'Björn Borg',            category: 'Björn Borg',                    country: { en: 'Sweden',           de: 'Schweden' } },
  { name: 'Jimmy Connors',         category: 'Jimmy Connors',                 country: { en: 'USA',              de: 'USA' } },
  { name: 'Iga Świątek',           category: 'Iga Świątek',                   country: { en: 'Poland',           de: 'Polen' } },

  // ── More Boxing ────────────────────────────────────────────────────────────
  { name: 'Sugar Ray Leonard',     category: 'Sugar Ray Leonard',             country: { en: 'USA',              de: 'USA' } },
  { name: 'Manny Pacquiao',        category: 'Manny Pacquiao',                country: { en: 'Philippines',      de: 'Philippinen' } },
  { name: 'Oscar De La Hoya',      category: 'Oscar De La Hoya',              country: { en: 'USA',              de: 'USA' } },
  { name: 'Lennox Lewis',          category: 'Lennox Lewis',                  country: { en: 'United Kingdom',   de: 'Großbritannien' } },

  // ── More Swimming ──────────────────────────────────────────────────────────
  { name: 'Mark Spitz',            category: 'Mark Spitz',                    country: { en: 'USA',              de: 'USA' } },

  // ── More Cycling ───────────────────────────────────────────────────────────
  { name: 'Bernard Hinault',       category: 'Bernard Hinault',               country: { en: 'France',           de: 'Frankreich' } },
  { name: 'Miguel Indurain',       category: 'Miguel Induráin',               country: { en: 'Spain',            de: 'Spanien' } },
  { name: 'Tadej Pogačar',         category: 'Tadej Pogačar',                 country: { en: 'Slovenia',         de: 'Slowenien' } },

  // ── Baseball ───────────────────────────────────────────────────────────────
  { name: 'Mickey Mantle',         category: 'Mickey Mantle',                 country: { en: 'USA',              de: 'USA' } },
  { name: 'Hank Aaron',            category: 'Hank Aaron',                    country: { en: 'USA',              de: 'USA' } },
  { name: 'Willie Mays',           category: 'Willie Mays',                   country: { en: 'USA',              de: 'USA' } },

  // ── Rugby ──────────────────────────────────────────────────────────────────
  { name: 'Jonah Lomu',            category: 'Jonah Lomu',                    country: { en: 'New Zealand',      de: 'Neuseeland' } },
  { name: 'Martin Johnson',        category: 'Martin Johnson (rugby union)',   country: { en: 'United Kingdom',   de: 'Großbritannien' } },

  // ── Cricket ────────────────────────────────────────────────────────────────
  { name: 'Sachin Tendulkar',      category: 'Sachin Tendulkar',              country: { en: 'India',            de: 'Indien' } },

  // ── American Football ──────────────────────────────────────────────────────
  { name: 'Jerry Rice',            category: 'Jerry Rice',                    country: { en: 'USA',              de: 'USA' } },
  { name: 'Patrick Mahomes',       category: 'Patrick Mahomes',               country: { en: 'USA',              de: 'USA' } },

  // ── Ice Hockey ─────────────────────────────────────────────────────────────
  { name: 'Mario Lemieux',         category: 'Mario Lemieux',                 country: { en: 'Canada',           de: 'Kanada' } },
  { name: 'Gordie Howe',           category: 'Gordie Howe',                   country: { en: 'Canada',           de: 'Kanada' } },

  // ── Winter Sports ──────────────────────────────────────────────────────────
  { name: 'Lindsey Vonn',          category: 'Lindsey Vonn',                  country: { en: 'USA',              de: 'USA' } },
  { name: 'Hermann Maier',         category: 'Hermann Maier',                 country: { en: 'Austria',          de: 'Österreich' } },
];
