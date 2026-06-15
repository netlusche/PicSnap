// Curated landmark categories on Wikimedia Commons for the "Places & Cities" category.
// Each entry is its own Commons category with many direct image files, so the answer
// (landmark name + country) comes from this config — reliable, not guessed from filenames.

export interface PlaceEntry {
  /** Wikimedia Commons category title (without the "Category:" prefix) */
  category: string;
  /** Primary answer: the landmark name (same in both languages) */
  name: string;
  /** Secondary answer: the country, localized */
  country: { en: string; de: string };
}

export const PLACES: PlaceEntry[] = [
  // ── Italy ──────────────────────────────────────────────────────────────────
  { category: 'Colosseum',                         name: 'Colosseum',                 country: { en: 'Italy', de: 'Italien' } },
  { category: 'Leaning Tower of Pisa',             name: 'Leaning Tower of Pisa',     country: { en: 'Italy', de: 'Italien' } },
  { category: 'Trevi Fountain',                    name: 'Trevi Fountain',            country: { en: 'Italy', de: 'Italien' } },
  { category: 'Pantheon, Rome',                    name: 'Pantheon Rome',             country: { en: 'Italy', de: 'Italien' } },
  { category: 'St. Peter\'s Basilica',             name: "St. Peter's Basilica",      country: { en: 'Italy', de: 'Italien' } },
  { category: 'Sistine Chapel',                    name: 'Sistine Chapel',            country: { en: 'Italy', de: 'Italien' } },
  { category: 'Doge\'s Palace',                    name: "Doge's Palace",             country: { en: 'Italy', de: 'Italien' } },
  { category: 'Piazza San Marco',                  name: 'Piazza San Marco',          country: { en: 'Italy', de: 'Italien' } },
  { category: 'Canal Grande',                      name: 'Grand Canal Venice',        country: { en: 'Italy', de: 'Italien' } },
  { category: 'Florence Cathedral',                name: 'Florence Cathedral',        country: { en: 'Italy', de: 'Italien' } },
  { category: 'Uffizi Gallery',                    name: 'Uffizi Gallery',            country: { en: 'Italy', de: 'Italien' } },
  { category: 'Pompeii',                           name: 'Pompeii',                   country: { en: 'Italy', de: 'Italien' } },
  { category: 'Amalfi Coast',                      name: 'Amalfi Coast',              country: { en: 'Italy', de: 'Italien' } },

  // ── Germany ────────────────────────────────────────────────────────────────
  { category: 'Brandenburg Gate',                  name: 'Brandenburg Gate',          country: { en: 'Germany', de: 'Deutschland' } },
  { category: 'Neuschwanstein Castle',             name: 'Neuschwanstein Castle',     country: { en: 'Germany', de: 'Deutschland' } },
  { category: 'Berliner Fernsehturm',              name: 'Berlin TV Tower',           country: { en: 'Germany', de: 'Deutschland' } },
  { category: 'Cologne Cathedral',                 name: 'Cologne Cathedral',         country: { en: 'Germany', de: 'Deutschland' } },
  { category: 'Heidelberg Castle',                 name: 'Heidelberg Castle',         country: { en: 'Germany', de: 'Deutschland' } },
  { category: 'Reichstag building',               name: 'Reichstag Building',        country: { en: 'Germany', de: 'Deutschland' } },
  { category: 'Checkpoint Charlie',                name: 'Checkpoint Charlie',        country: { en: 'Germany', de: 'Deutschland' } },
  { category: 'Sanssouci',                         name: 'Sanssouci Palace',          country: { en: 'Germany', de: 'Deutschland' } },
  { category: 'Oktoberfest',                       name: 'Oktoberfest',               country: { en: 'Germany', de: 'Deutschland' } },

  // ── France ─────────────────────────────────────────────────────────────────
  { category: "Arc de Triomphe de l'Étoile",       name: 'Arc de Triomphe',           country: { en: 'France', de: 'Frankreich' } },
  { category: 'Palace of Versailles',              name: 'Palace of Versailles',      country: { en: 'France', de: 'Frankreich' } },
  { category: 'Mont Saint-Michel',                 name: 'Mont Saint-Michel',         country: { en: 'France', de: 'Frankreich' } },
  { category: 'Chartres Cathedral',                name: 'Chartres Cathedral',        country: { en: 'France', de: 'Frankreich' } },
  { category: 'Pont du Gard',                      name: 'Pont du Gard',              country: { en: 'France', de: 'Frankreich' } },
  { category: 'Carcassonne',                       name: 'Carcassonne',               country: { en: 'France', de: 'Frankreich' } },
  { category: 'Palace of the Popes',              name: 'Palace of the Popes',       country: { en: 'France', de: 'Frankreich' } },
  { category: 'Loire Valley castles',             name: 'Loire Valley Castles',      country: { en: 'France', de: 'Frankreich' } },

  // ── United Kingdom ─────────────────────────────────────────────────────────
  { category: 'Tower Bridge',                      name: 'Tower Bridge',              country: { en: 'United Kingdom', de: 'Großbritannien' } },
  { category: 'Stonehenge',                        name: 'Stonehenge',                country: { en: 'United Kingdom', de: 'Großbritannien' } },
  { category: 'Tower of London',                   name: 'Tower of London',           country: { en: 'United Kingdom', de: 'Großbritannien' } },
  { category: 'Buckingham Palace',                 name: 'Buckingham Palace',         country: { en: 'United Kingdom', de: 'Großbritannien' } },
  { category: 'Edinburgh Castle',                  name: 'Edinburgh Castle',          country: { en: 'United Kingdom', de: 'Großbritannien' } },
  { category: 'Windsor Castle',                    name: 'Windsor Castle',            country: { en: 'United Kingdom', de: 'Großbritannien' } },
  { category: 'Palace of Westminster',             name: 'Palace of Westminster',     country: { en: 'United Kingdom', de: 'Großbritannien' } },
  { category: 'St Paul\'s Cathedral',              name: "St Paul's Cathedral",       country: { en: 'United Kingdom', de: 'Großbritannien' } },
  { category: 'Loch Ness',                         name: 'Loch Ness',                 country: { en: 'United Kingdom', de: 'Großbritannien' } },
  { category: 'Cliffs of Moher',                   name: 'Cliffs of Moher',           country: { en: 'Ireland', de: 'Irland' } },
  { category: 'Giant\'s Causeway',                 name: "Giant's Causeway",          country: { en: 'United Kingdom', de: 'Großbritannien' } },

  // ── Spain ──────────────────────────────────────────────────────────────────
  { category: 'Alhambra',                          name: 'Alhambra',                  country: { en: 'Spain', de: 'Spanien' } },
  { category: 'Sagrada Família',                   name: 'Sagrada Família',           country: { en: 'Spain', de: 'Spanien' } },
  { category: 'Park Güell',                        name: 'Park Güell',                country: { en: 'Spain', de: 'Spanien' } },
  { category: 'Alcázar of Seville',               name: 'Alcázar of Seville',        country: { en: 'Spain', de: 'Spanien' } },
  { category: 'Mezquita-Catedral de Córdoba',     name: 'Mezquita of Córdoba',       country: { en: 'Spain', de: 'Spanien' } },
  { category: 'Toledo, Spain',                     name: 'Toledo',                    country: { en: 'Spain', de: 'Spanien' } },
  { category: 'Guggenheim Museum Bilbao',          name: 'Guggenheim Bilbao',         country: { en: 'Spain', de: 'Spanien' } },
  { category: 'Aqueduct of Segovia',               name: 'Aqueduct of Segovia',       country: { en: 'Spain', de: 'Spanien' } },

  // ── Portugal ───────────────────────────────────────────────────────────────
  { category: 'Belém Tower',                       name: 'Belém Tower',               country: { en: 'Portugal', de: 'Portugal' } },
  { category: 'Jerónimos Monastery',               name: 'Jerónimos Monastery',       country: { en: 'Portugal', de: 'Portugal' } },
  { category: 'Sintra National Palace',            name: 'Sintra Palace',             country: { en: 'Portugal', de: 'Portugal' } },
  { category: 'Pena Palace',                       name: 'Pena Palace',               country: { en: 'Portugal', de: 'Portugal' } },

  // ── Greece ─────────────────────────────────────────────────────────────────
  { category: 'Acropolis of Athens',               name: 'Acropolis of Athens',       country: { en: 'Greece', de: 'Griechenland' } },
  { category: 'Santorini',                         name: 'Santorini',                 country: { en: 'Greece', de: 'Griechenland' } },
  { category: 'Meteora',                           name: 'Meteora',                   country: { en: 'Greece', de: 'Griechenland' } },
  { category: 'Delphi',                            name: 'Delphi',                    country: { en: 'Greece', de: 'Griechenland' } },

  // ── Turkey ─────────────────────────────────────────────────────────────────
  { category: 'Hagia Sophia',                      name: 'Hagia Sophia',              country: { en: 'Turkey', de: 'Türkei' } },
  { category: 'Cappadocia',                        name: 'Cappadocia',                country: { en: 'Turkey', de: 'Türkei' } },
  { category: 'Topkapı Palace',                    name: 'Topkapi Palace',            country: { en: 'Turkey', de: 'Türkei' } },
  { category: 'Blue Mosque',                       name: 'Blue Mosque',               country: { en: 'Turkey', de: 'Türkei' } },
  { category: 'Pamukkale',                         name: 'Pamukkale',                 country: { en: 'Turkey', de: 'Türkei' } },
  { category: 'Library of Celsus',                 name: 'Library of Celsus',         country: { en: 'Turkey', de: 'Türkei' } },

  // ── Czech Republic / Central Europe ────────────────────────────────────────
  { category: 'Charles Bridge',                    name: 'Charles Bridge',            country: { en: 'Czech Republic', de: 'Tschechien' } },
  { category: 'Prague Castle',                     name: 'Prague Castle',             country: { en: 'Czech Republic', de: 'Tschechien' } },
  { category: 'Ceský Krumlov Castle',             name: 'Český Krumlov Castle',      country: { en: 'Czech Republic', de: 'Tschechien' } },
  { category: 'Schönbrunn Palace',                 name: 'Schönbrunn Palace',         country: { en: 'Austria', de: 'Österreich' } },
  { category: 'Hallstatt',                         name: 'Hallstatt',                 country: { en: 'Austria', de: 'Österreich' } },
  { category: 'Wawel Castle',                      name: 'Wawel Castle',              country: { en: 'Poland', de: 'Polen' } },

  // ── Netherlands / Belgium / Switzerland ────────────────────────────────────
  { category: 'Atomium',                           name: 'Atomium',                   country: { en: 'Belgium', de: 'Belgien' } },
  { category: 'Bruges',                            name: 'Bruges',                    country: { en: 'Belgium', de: 'Belgien' } },
  { category: 'Keukenhof',                         name: 'Keukenhof Gardens',         country: { en: 'Netherlands', de: 'Niederlande' } },
  { category: 'Rijksmuseum Amsterdam',             name: 'Rijksmuseum',               country: { en: 'Netherlands', de: 'Niederlande' } },
  { category: 'Matterhorn',                        name: 'Matterhorn',                country: { en: 'Switzerland', de: 'Schweiz' } },
  { category: 'Château de Chillon',                name: 'Chillon Castle',            country: { en: 'Switzerland', de: 'Schweiz' } },
  { category: 'Chapel Bridge, Lucerne',            name: 'Chapel Bridge Lucerne',     country: { en: 'Switzerland', de: 'Schweiz' } },

  // ── Scandinavia ────────────────────────────────────────────────────────────
  { category: 'Geirangerfjord',                    name: 'Geirangerfjord',            country: { en: 'Norway', de: 'Norwegen' } },
  { category: 'Northern lights',                   name: 'Northern Lights',           country: { en: 'Norway', de: 'Norwegen' } },
  { category: 'Bryggen',                           name: 'Bryggen Bergen',            country: { en: 'Norway', de: 'Norwegen' } },
  { category: 'Nyhavn',                            name: 'Nyhavn Copenhagen',         country: { en: 'Denmark', de: 'Dänemark' } },
  { category: 'Gamla Stan',                        name: 'Gamla Stan Stockholm',      country: { en: 'Sweden', de: 'Schweden' } },

  // ── Eastern Europe / Russia ────────────────────────────────────────────────
  { category: 'Moscow Kremlin',                    name: 'Moscow Kremlin',            country: { en: 'Russia', de: 'Russland' } },
  { category: 'Saint Basil\'s Cathedral',          name: "Saint Basil's Cathedral",   country: { en: 'Russia', de: 'Russland' } },
  { category: 'Trans-Siberian Railway',            name: 'Trans-Siberian Railway',    country: { en: 'Russia', de: 'Russland' } },
  { category: 'Hermitage Museum',                  name: 'Hermitage Museum',          country: { en: 'Russia', de: 'Russland' } },
  { category: 'Bled, Slovenia',                    name: 'Lake Bled',                 country: { en: 'Slovenia', de: 'Slowenien' } },
  { category: 'Dubrovnik',                         name: 'Dubrovnik',                 country: { en: 'Croatia', de: 'Kroatien' } },
  { category: 'Plitvice Lakes National Park',      name: 'Plitvice Lakes',            country: { en: 'Croatia', de: 'Kroatien' } },

  // ── Middle East ────────────────────────────────────────────────────────────
  { category: 'Great Sphinx of Giza',              name: 'Great Sphinx of Giza',      country: { en: 'Egypt', de: 'Ägypten' } },
  { category: 'Burj Al Arab',                      name: 'Burj Al Arab',              country: { en: 'United Arab Emirates', de: 'VAE' } },
  { category: 'Burj Khalifa',                      name: 'Burj Khalifa',              country: { en: 'United Arab Emirates', de: 'VAE' } },
  { category: 'Petra, Jordan',                     name: 'Petra',                     country: { en: 'Jordan', de: 'Jordanien' } },
  { category: 'Dome of the Rock',                  name: 'Dome of the Rock',          country: { en: 'Israel', de: 'Israel' } },
  { category: 'Western Wall',                      name: 'Western Wall',              country: { en: 'Israel', de: 'Israel' } },

  // ── Asia ───────────────────────────────────────────────────────────────────
  { category: 'Taj Mahal',                         name: 'Taj Mahal',                 country: { en: 'India', de: 'Indien' } },
  { category: 'Amber Fort',                        name: 'Amber Fort',                country: { en: 'India', de: 'Indien' } },
  { category: 'Gateway of India',                  name: 'Gateway of India',          country: { en: 'India', de: 'Indien' } },
  { category: 'Lotus Temple',                      name: 'Lotus Temple',              country: { en: 'India', de: 'Indien' } },
  { category: 'Forbidden City',                    name: 'Forbidden City',            country: { en: 'China', de: 'China' } },
  { category: 'Temple of Heaven',                  name: 'Temple of Heaven',          country: { en: 'China', de: 'China' } },
  { category: 'Great Wall of China',               name: 'Great Wall of China',       country: { en: 'China', de: 'China' } },
  { category: 'Potala Palace',                     name: 'Potala Palace',             country: { en: 'China', de: 'China' } },
  { category: 'Li River',                          name: 'Li River Guilin',           country: { en: 'China', de: 'China' } },
  { category: 'Angkor Wat',                        name: 'Angkor Wat',                country: { en: 'Cambodia', de: 'Kambodscha' } },
  { category: 'Borobudur',                         name: 'Borobudur',                 country: { en: 'Indonesia', de: 'Indonesien' } },
  { category: 'Prambanan',                         name: 'Prambanan Temple',          country: { en: 'Indonesia', de: 'Indonesien' } },
  { category: 'Marina Bay Sands',                  name: 'Marina Bay Sands',          country: { en: 'Singapore', de: 'Singapur' } },
  { category: 'Petronas Towers',                   name: 'Petronas Towers',           country: { en: 'Malaysia', de: 'Malaysia' } },
  { category: 'Shwedagon Pagoda',                  name: 'Shwedagon Pagoda',          country: { en: 'Myanmar', de: 'Myanmar' } },
  { category: 'Wat Phra Kaew',                     name: 'Temple of the Emerald Buddha', country: { en: 'Thailand', de: 'Thailand' } },
  { category: 'Phi Phi Islands',                   name: 'Phi Phi Islands',           country: { en: 'Thailand', de: 'Thailand' } },
  { category: 'Ha Long Bay',                       name: 'Ha Long Bay',               country: { en: 'Vietnam', de: 'Vietnam' } },
  { category: 'Hoi An',                            name: 'Hoi An Ancient Town',       country: { en: 'Vietnam', de: 'Vietnam' } },
  { category: 'Mount Fuji',                        name: 'Mount Fuji',                country: { en: 'Japan', de: 'Japan' } },
  { category: 'Fushimi Inari-taisha',              name: 'Fushimi Inari Shrine',      country: { en: 'Japan', de: 'Japan' } },
  { category: 'Kinkaku-ji',                        name: 'Golden Pavilion Kyoto',     country: { en: 'Japan', de: 'Japan' } },
  { category: 'Himeji Castle',                     name: 'Himeji Castle',             country: { en: 'Japan', de: 'Japan' } },
  { category: 'Shibuya, Tokyo',                    name: 'Shibuya Crossing',          country: { en: 'Japan', de: 'Japan' } },
  { category: 'Gyeongbokgung',                     name: 'Gyeongbokgung Palace',      country: { en: 'South Korea', de: 'Südkorea' } },
  { category: 'Bagan',                             name: 'Bagan Temples',             country: { en: 'Myanmar', de: 'Myanmar' } },

  // ── Africa ─────────────────────────────────────────────────────────────────
  { category: 'Table Mountain',                    name: 'Table Mountain',            country: { en: 'South Africa', de: 'Südafrika' } },
  { category: 'Victoria Falls',                    name: 'Victoria Falls',            country: { en: 'Zimbabwe', de: 'Simbabwe' } },
  { category: 'Serengeti National Park',           name: 'Serengeti',                 country: { en: 'Tanzania', de: 'Tansania' } },
  { category: 'Kilimanjaro',                       name: 'Kilimanjaro',               country: { en: 'Tanzania', de: 'Tansania' } },
  { category: 'Marrakech',                         name: 'Marrakech Medina',          country: { en: 'Morocco', de: 'Marokko' } },
  { category: 'Hassan II Mosque',                  name: 'Hassan II Mosque',          country: { en: 'Morocco', de: 'Marokko' } },

  // ── Americas ───────────────────────────────────────────────────────────────
  { category: 'Statue of Liberty',                 name: 'Statue of Liberty',         country: { en: 'United States', de: 'USA' } },
  { category: 'Gateway Arch',                      name: 'Gateway Arch',              country: { en: 'United States', de: 'USA' } },
  { category: 'Mount Rushmore National Memorial',  name: 'Mount Rushmore',            country: { en: 'United States', de: 'USA' } },
  { category: 'Empire State Building',             name: 'Empire State Building',     country: { en: 'United States', de: 'USA' } },
  { category: 'Space Needle',                      name: 'Space Needle',              country: { en: 'United States', de: 'USA' } },
  { category: 'Golden Gate Bridge',                name: 'Golden Gate Bridge',        country: { en: 'United States', de: 'USA' } },
  { category: 'Grand Canyon',                      name: 'Grand Canyon',              country: { en: 'United States', de: 'USA' } },
  { category: 'Yellowstone National Park',         name: 'Yellowstone',               country: { en: 'United States', de: 'USA' } },
  { category: 'Niagara Falls',                     name: 'Niagara Falls',             country: { en: 'Canada', de: 'Kanada' } },
  { category: 'CN Tower',                          name: 'CN Tower',                  country: { en: 'Canada', de: 'Kanada' } },
  { category: 'Banff National Park',               name: 'Banff National Park',       country: { en: 'Canada', de: 'Kanada' } },
  { category: 'Christ the Redeemer',               name: 'Christ the Redeemer',       country: { en: 'Brazil', de: 'Brasilien' } },
  { category: 'Iguazu Falls',                      name: 'Iguazu Falls',              country: { en: 'Argentina', de: 'Argentinien' } },
  { category: 'Machu Picchu',                      name: 'Machu Picchu',              country: { en: 'Peru', de: 'Peru' } },
  { category: 'Moai',                              name: 'Moai (Easter Island)',       country: { en: 'Chile', de: 'Chile' } },
  { category: 'Chichen Itza',                      name: 'Chichen Itza',              country: { en: 'Mexico', de: 'Mexiko' } },
  { category: 'Teotihuacan',                       name: 'Teotihuacan',               country: { en: 'Mexico', de: 'Mexiko' } },
  { category: 'Palenque',                          name: 'Palenque',                  country: { en: 'Mexico', de: 'Mexiko' } },
  { category: 'Havana',                            name: 'Havana Old Town',           country: { en: 'Cuba', de: 'Kuba' } },

  // ── Australia & Pacific ────────────────────────────────────────────────────
  { category: 'Sydney Opera House',                name: 'Sydney Opera House',        country: { en: 'Australia', de: 'Australien' } },
  { category: 'Sydney Harbour Bridge',             name: 'Sydney Harbour Bridge',     country: { en: 'Australia', de: 'Australien' } },
  { category: 'Uluru',                             name: 'Uluru',                     country: { en: 'Australia', de: 'Australien' } },
  { category: 'Great Barrier Reef',                name: 'Great Barrier Reef',        country: { en: 'Australia', de: 'Australien' } },
  { category: 'Milford Sound',                     name: 'Milford Sound',             country: { en: 'New Zealand', de: 'Neuseeland' } },

  // ── Natural Wonders / Cross-region ─────────────────────────────────────────
  { category: 'Aurora borealis',                   name: 'Aurora Borealis',           country: { en: 'Scandinavia', de: 'Skandinavien' } },
  { category: 'Sahara',                            name: 'Sahara Desert',             country: { en: 'Africa', de: 'Afrika' } },
  { category: 'Amazon River',                      name: 'Amazon River',              country: { en: 'Brazil', de: 'Brasilien' } },
  { category: 'Galápagos Islands',                 name: 'Galápagos Islands',         country: { en: 'Ecuador', de: 'Ecuador' } },
  { category: 'Patagonia',                         name: 'Patagonia',                 country: { en: 'Argentina', de: 'Argentinien' } },
  { category: 'Dead Sea',                          name: 'Dead Sea',                  country: { en: 'Jordan', de: 'Jordanien' } },
  { category: 'Mount Everest',                     name: 'Mount Everest',             country: { en: 'Nepal', de: 'Nepal' } },
  { category: 'Bali',                              name: 'Bali',                      country: { en: 'Indonesia', de: 'Indonesien' } },
  { category: 'Maldives',                          name: 'Maldives',                  country: { en: 'Maldives', de: 'Malediven' } },
  { category: 'Zhangjiajie National Forest Park',  name: 'Zhangjiajie',               country: { en: 'China', de: 'China' } },
  { category: 'Antelope Canyon',                   name: 'Antelope Canyon',           country: { en: 'United States', de: 'USA' } },
  { category: 'Arches National Park',              name: 'Arches National Park',      country: { en: 'United States', de: 'USA' } },
  { category: 'Bryce Canyon National Park',        name: 'Bryce Canyon',              country: { en: 'United States', de: 'USA' } },
  { category: 'Torres del Paine',                  name: 'Torres del Paine',          country: { en: 'Chile', de: 'Chile' } },
  { category: 'Waitomo Caves',                     name: 'Waitomo Caves',             country: { en: 'New Zealand', de: 'Neuseeland' } },

  // ── More Europe ────────────────────────────────────────────────────────────
  { category: 'Parthenon',                          name: 'Parthenon',                 country: { en: 'Greece', de: 'Griechenland' } },
  { category: 'Roman Forum',                        name: 'Roman Forum',               country: { en: 'Italy', de: 'Italien' } },
  { category: 'Rialto Bridge',                     name: 'Rialto Bridge',             country: { en: 'Italy', de: 'Italien' } },
  { category: 'Cinque Terre',                      name: 'Cinque Terre',              country: { en: 'Italy', de: 'Italien' } },
  { category: 'Budapest',                          name: 'Budapest Skyline',          country: { en: 'Hungary', de: 'Ungarn' } },
  { category: 'Buda Castle',                       name: 'Buda Castle',               country: { en: 'Hungary', de: 'Ungarn' } },
  { category: 'Chain Bridge',                      name: 'Chain Bridge Budapest',     country: { en: 'Hungary', de: 'Ungarn' } },
  { category: 'Tallinn',                           name: 'Tallinn Old Town',          country: { en: 'Estonia', de: 'Estland' } },
  { category: 'Riga',                              name: 'Riga Old Town',             country: { en: 'Latvia', de: 'Lettland' } },
  { category: 'Vilnius',                           name: 'Vilnius Old Town',          country: { en: 'Lithuania', de: 'Litauen' } },
  { category: 'Monastery of Batalha',              name: 'Batalha Monastery',         country: { en: 'Portugal', de: 'Portugal' } },
  { category: 'Livraria Lello',                    name: 'Livraria Lello Porto',      country: { en: 'Portugal', de: 'Portugal' } },
  { category: 'Mostar',                            name: 'Mostar Old Bridge',         country: { en: 'Bosnia', de: 'Bosnien' } },
  { category: 'Kotor',                             name: 'Kotor',                     country: { en: 'Montenegro', de: 'Montenegro' } },
  { category: 'Tatra Mountains',                   name: 'Tatra Mountains',           country: { en: 'Poland', de: 'Polen' } },
  { category: 'Mont Blanc',                        name: 'Mont Blanc',                country: { en: 'France', de: 'Frankreich' } },
  { category: 'Dolomites',                         name: 'Dolomites',                 country: { en: 'Italy', de: 'Italien' } },

  // ── More Asia & Africa ─────────────────────────────────────────────────────
  { category: 'Varanasi',                          name: 'Varanasi Ghats',            country: { en: 'India', de: 'Indien' } },
  { category: 'Sigiriya',                          name: 'Sigiriya Rock Fortress',    country: { en: 'Sri Lanka', de: 'Sri Lanka' } },
  { category: 'Temple of the Tooth',               name: 'Temple of the Tooth',       country: { en: 'Sri Lanka', de: 'Sri Lanka' } },
  { category: 'Sagarmatha National Park',          name: 'Everest Base Camp',         country: { en: 'Nepal', de: 'Nepal' } },
  { category: 'Kathmandu',                         name: 'Pashupatinath Temple',      country: { en: 'Nepal', de: 'Nepal' } },
  { category: 'Wadi Rum',                          name: 'Wadi Rum',                  country: { en: 'Jordan', de: 'Jordanien' } },
  { category: 'Socotra',                           name: 'Socotra Island',            country: { en: 'Yemen', de: 'Jemen' } },
  { category: 'Lalibela',                          name: 'Lalibela Rock Churches',    country: { en: 'Ethiopia', de: 'Äthiopien' } },
  { category: 'Leptis Magna',                      name: 'Leptis Magna',              country: { en: 'Libya', de: 'Libyen' } },

  // ── More Americas ──────────────────────────────────────────────────────────
  { category: 'Tikal',                             name: 'Tikal',                     country: { en: 'Guatemala', de: 'Guatemala' } },
  { category: 'Cartagena, Colombia',               name: 'Cartagena de Indias',       country: { en: 'Colombia', de: 'Kolumbien' } },
  { category: 'Sossusvlei',                         name: 'Sossusvlei Dunes',          country: { en: 'Namibia', de: 'Namibia' } },
  { category: 'Salar de Uyuni',                    name: 'Salar de Uyuni',            country: { en: 'Bolivia', de: 'Bolivien' } },
  { category: 'Monteverde Cloud Forest',           name: 'Monteverde Cloud Forest',   country: { en: 'Costa Rica', de: 'Costa Rica' } },
  { category: 'Crater Lake National Park',         name: 'Crater Lake',               country: { en: 'United States', de: 'USA' } },
  { category: 'Monument Valley',                   name: 'Monument Valley',           country: { en: 'United States', de: 'USA' } },
  { category: 'Zion National Park',                name: 'Zion National Park',        country: { en: 'United States', de: 'USA' } },
];
