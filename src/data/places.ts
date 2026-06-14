// Curated landmark categories on Wikimedia Commons for the "Places & Cities" category.
// Each entry is its own Commons category with many direct image files, so the answer
// (landmark name + country) comes from this config — reliable, not guessed from filenames.
// Verified to have >=30 direct image files each, most with pagination tokens.

export interface PlaceEntry {
  /** Wikimedia Commons category title (without the "Category:" prefix) */
  category: string;
  /** Primary answer: the landmark name (same in both languages) */
  name: string;
  /** Secondary answer: the country, localized */
  country: { en: string; de: string };
}

export const PLACES: PlaceEntry[] = [
  { category: 'Colosseum',                         name: 'Colosseum',           country: { en: 'Italy', de: 'Italien' } },
  { category: 'Leaning Tower of Pisa',             name: 'Leaning Tower of Pisa', country: { en: 'Italy', de: 'Italien' } },
  { category: 'Brandenburg Gate',                  name: 'Brandenburg Gate',    country: { en: 'Germany', de: 'Deutschland' } },
  { category: 'Neuschwanstein Castle',             name: 'Neuschwanstein Castle', country: { en: 'Germany', de: 'Deutschland' } },
  { category: 'Statue of Liberty',                 name: 'Statue of Liberty',   country: { en: 'United States', de: 'USA' } },
  { category: 'Gateway Arch',                      name: 'Gateway Arch',        country: { en: 'United States', de: 'USA' } },
  { category: 'Mount Rushmore National Memorial',  name: 'Mount Rushmore',      country: { en: 'United States', de: 'USA' } },
  { category: 'Taj Mahal',                         name: 'Taj Mahal',           country: { en: 'India', de: 'Indien' } },
  { category: 'Sydney Opera House',                name: 'Sydney Opera House',  country: { en: 'Australia', de: 'Australien' } },
  { category: 'Tower Bridge',                      name: 'Tower Bridge',        country: { en: 'United Kingdom', de: 'Großbritannien' } },
  { category: 'Stonehenge',                        name: 'Stonehenge',          country: { en: 'United Kingdom', de: 'Großbritannien' } },
  { category: 'Charles Bridge',                    name: 'Charles Bridge',      country: { en: 'Czech Republic', de: 'Tschechien' } },
  { category: 'Hagia Sophia',                      name: 'Hagia Sophia',        country: { en: 'Turkey', de: 'Türkei' } },
  { category: 'Atomium',                           name: 'Atomium',             country: { en: 'Belgium', de: 'Belgien' } },
  { category: 'Marina Bay Sands',                  name: 'Marina Bay Sands',    country: { en: 'Singapore', de: 'Singapur' } },
  { category: 'Petronas Towers',                   name: 'Petronas Towers',     country: { en: 'Malaysia', de: 'Malaysia' } },
  { category: 'Great Sphinx of Giza',             name: 'Great Sphinx of Giza', country: { en: 'Egypt', de: 'Ägypten' } },
  { category: 'Acropolis of Athens',               name: 'Acropolis of Athens', country: { en: 'Greece', de: 'Griechenland' } },
  { category: "Arc de Triomphe de l'Étoile",       name: 'Arc de Triomphe',     country: { en: 'France', de: 'Frankreich' } },
  { category: 'Forbidden City',                    name: 'Forbidden City',      country: { en: 'China', de: 'China' } },
  { category: 'Temple of Heaven',                  name: 'Temple of Heaven',    country: { en: 'China', de: 'China' } },
  { category: 'Angkor Wat',                        name: 'Angkor Wat',          country: { en: 'Cambodia', de: 'Kambodscha' } },
  { category: 'Table Mountain',                    name: 'Table Mountain',      country: { en: 'South Africa', de: 'Südafrika' } },
  { category: 'Moai',                              name: 'Moai (Easter Island)', country: { en: 'Chile', de: 'Chile' } },
  { category: 'Machu Picchu',                      name: 'Machu Picchu',        country: { en: 'Peru', de: 'Peru' } },
];
