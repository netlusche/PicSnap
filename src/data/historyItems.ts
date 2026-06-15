// Curated historical-subject categories on Wikimedia Commons for "History".
// Each is its own Commons category with many direct photos; the answer (what is
// shown + roughly when) comes from this config. Verified >=30 direct images each.
// Kept distinct from the "Places" landmark list to avoid duplicate subjects.

export interface HistoryEntry {
  category: string;
  /** Primary answer: what is shown */
  name: string;
  /** Secondary answer: roughly when, localized */
  era: { en: string; de: string };
}

export const HISTORY: HistoryEntry[] = [
  { category: 'Apollo 11',          name: 'Apollo 11 Moon landing', era: { en: '20th century', de: '20. Jahrhundert' } },
  { category: 'Great Wall of China', name: 'Great Wall of China',   era: { en: 'Antiquity', de: 'Antike' } },
  { category: 'Terracotta Army',    name: 'Terracotta Army',        era: { en: 'Antiquity', de: 'Antike' } },
  { category: "Trajan's Column",    name: "Trajan's Column",        era: { en: 'Roman Empire', de: 'Römisches Reich' } },
  { category: 'Pont du Gard',       name: 'Pont du Gard',           era: { en: 'Roman Empire', de: 'Römisches Reich' } },
  { category: "Hadrian's Wall",     name: "Hadrian's Wall",         era: { en: 'Roman Empire', de: 'Römisches Reich' } },
  { category: 'Alhambra',           name: 'Alhambra',               era: { en: 'Middle Ages', de: 'Mittelalter' } },
  { category: 'Borobudur',          name: 'Borobudur',              era: { en: 'Middle Ages', de: 'Mittelalter' } },
  { category: 'Mesa Verde National Park', name: 'Mesa Verde cliff dwellings', era: { en: 'Middle Ages', de: 'Mittelalter' } },
  { category: 'Tutankhamun',        name: 'Tutankhamun',            era: { en: 'Ancient Egypt', de: 'Altes Ägypten' } },
  { category: 'Rosetta Stone',      name: 'Rosetta Stone',          era: { en: 'Ancient Egypt', de: 'Altes Ägypten' } },
  { category: 'Pyramids',           name: 'Egyptian Pyramids',      era: { en: 'Ancient Egypt', de: 'Altes Ägypten' } },
  { category: 'Valley of the Kings', name: 'Valley of the Kings',   era: { en: 'Ancient Egypt', de: 'Altes Ägypten' } },
  { category: 'Karnak',             name: 'Karnak Temple',          era: { en: 'Ancient Egypt', de: 'Altes Ägypten' } },
  { category: 'Herculaneum',        name: 'Herculaneum',            era: { en: 'Roman Empire', de: 'Römisches Reich' } },
  { category: 'Aqueduct of Segovia', name: 'Aqueduct of Segovia',   era: { en: 'Roman Empire', de: 'Römisches Reich' } },
  { category: 'Baalbek',            name: 'Baalbek',                era: { en: 'Roman Empire', de: 'Römisches Reich' } },
  { category: 'Roman Baths (Bath)', name: 'Roman Baths of Bath',    era: { en: 'Roman Empire', de: 'Römisches Reich' } },
  { category: 'Parthenon',          name: 'Parthenon',              era: { en: 'Antiquity', de: 'Antike' } },
  { category: 'Knossos',            name: 'Knossos',                era: { en: 'Antiquity', de: 'Antike' } },
  { category: 'Mycenae',            name: 'Mycenae',                era: { en: 'Antiquity', de: 'Antike' } },
  { category: 'Ephesus',            name: 'Ephesus',                era: { en: 'Antiquity', de: 'Antike' } },
  { category: 'Persepolis',         name: 'Persepolis',             era: { en: 'Antiquity', de: 'Antike' } },
  { category: 'Masada',             name: 'Masada',                 era: { en: 'Antiquity', de: 'Antike' } },
  { category: 'Bayeux Tapestry',    name: 'Bayeux Tapestry',        era: { en: 'Middle Ages', de: 'Mittelalter' } },
  { category: 'Sutton Hoo',         name: 'Sutton Hoo',             era: { en: 'Middle Ages', de: 'Mittelalter' } },
  { category: 'Tikal',              name: 'Tikal',                  era: { en: 'Middle Ages', de: 'Mittelalter' } },
  { category: 'Newgrange',          name: 'Newgrange',              era: { en: 'Prehistory', de: 'Vorgeschichte' } },
  { category: 'Göbekli Tepe',       name: 'Göbekli Tepe',           era: { en: 'Prehistory', de: 'Vorgeschichte' } },
  { category: 'Auschwitz concentration camp', name: 'Auschwitz',    era: { en: '20th century', de: '20. Jahrhundert' } },
];
