// Curated historical-subject categories on Wikimedia Commons for "History".
// Each is its own Commons category with many direct photos; the answer (what is
// shown + roughly when) comes from this config. Kept distinct from the "Places"
// landmark list to avoid duplicate subjects.

export interface HistoryEntry {
  category: string;
  /** Primary answer: what is shown */
  name: string;
  /** Secondary answer: roughly when, localized */
  era: { en: string; de: string };
}

export const HISTORY: HistoryEntry[] = [
  // ── Ancient Egypt ──────────────────────────────────────────────────────────
  { category: 'Tutankhamun',              name: 'Tutankhamun',                    era: { en: 'Ancient Egypt',  de: 'Altes Ägypten' } },
  { category: 'Rosetta Stone',            name: 'Rosetta Stone',                  era: { en: 'Ancient Egypt',  de: 'Altes Ägypten' } },
  { category: 'Pyramids',                 name: 'Egyptian Pyramids',              era: { en: 'Ancient Egypt',  de: 'Altes Ägypten' } },
  { category: 'Valley of the Kings',      name: 'Valley of the Kings',            era: { en: 'Ancient Egypt',  de: 'Altes Ägypten' } },
  { category: 'Karnak',                   name: 'Karnak Temple',                  era: { en: 'Ancient Egypt',  de: 'Altes Ägypten' } },
  { category: 'Abu Simbel',               name: 'Abu Simbel Temples',             era: { en: 'Ancient Egypt',  de: 'Altes Ägypten' } },
  { category: 'Luxor Temple',             name: 'Luxor Temple',                   era: { en: 'Ancient Egypt',  de: 'Altes Ägypten' } },
  { category: 'Cleopatra VII',            name: 'Cleopatra',                      era: { en: 'Ancient Egypt',  de: 'Altes Ägypten' } },
  { category: 'Egyptian Book of the Dead', name: 'Book of the Dead',             era: { en: 'Ancient Egypt',  de: 'Altes Ägypten' } },
  { category: 'Pyramids of Giza',         name: 'Pyramids of Giza',               era: { en: 'Ancient Egypt',  de: 'Altes Ägypten' } },

  // ── Antiquity: Greece ──────────────────────────────────────────────────────
  { category: 'Parthenon',                name: 'Parthenon',                      era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Knossos',                  name: 'Knossos',                        era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Mycenae',                  name: 'Mycenae',                        era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Ephesus',                  name: 'Ephesus',                        era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Delphi',                   name: 'Oracle of Delphi',               era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Olympia, Greece',          name: 'Ancient Olympia',                era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Alexander the Great',      name: 'Alexander the Great',            era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Battle of Thermopylae',    name: 'Battle of Thermopylae',          era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Troy',                     name: 'Troy',                           era: { en: 'Antiquity',      de: 'Antike' } },

  // ── Antiquity: Rome ────────────────────────────────────────────────────────
  { category: "Trajan's Column",          name: "Trajan's Column",                era: { en: 'Roman Empire',   de: 'Römisches Reich' } },
  { category: "Hadrian's Wall",           name: "Hadrian's Wall",                 era: { en: 'Roman Empire',   de: 'Römisches Reich' } },
  { category: 'Herculaneum',              name: 'Herculaneum',                    era: { en: 'Roman Empire',   de: 'Römisches Reich' } },
  { category: 'Aqueduct of Segovia',      name: 'Aqueduct of Segovia',            era: { en: 'Roman Empire',   de: 'Römisches Reich' } },
  { category: 'Baalbek',                  name: 'Baalbek',                        era: { en: 'Roman Empire',   de: 'Römisches Reich' } },
  { category: 'Roman Baths (Bath)',        name: 'Roman Baths of Bath',           era: { en: 'Roman Empire',   de: 'Römisches Reich' } },
  { category: 'Leptis Magna',             name: 'Leptis Magna',                   era: { en: 'Roman Empire',   de: 'Römisches Reich' } },
  { category: 'Pont du Gard',             name: 'Pont du Gard',                   era: { en: 'Roman Empire',   de: 'Römisches Reich' } },
  { category: 'Pantheon, Rome',           name: 'Pantheon Rome',                  era: { en: 'Roman Empire',   de: 'Römisches Reich' } },
  { category: "Diocletian's Palace",      name: "Diocletian's Palace",            era: { en: 'Roman Empire',   de: 'Römisches Reich' } },
  { category: 'Ara Pacis',                name: 'Ara Pacis',                      era: { en: 'Roman Empire',   de: 'Römisches Reich' } },
  { category: 'Julius Caesar',            name: 'Julius Caesar',                  era: { en: 'Roman Empire',   de: 'Römisches Reich' } },
  { category: 'Pompeii',                  name: 'Pompeii',                        era: { en: 'Roman Empire',   de: 'Römisches Reich' } },

  // ── Antiquity: Near East & Asia ────────────────────────────────────────────
  { category: 'Persepolis',               name: 'Persepolis',                     era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Masada',                   name: 'Masada',                         era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Terracotta Army',          name: 'Terracotta Army',                era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Great Wall of China',      name: 'Great Wall of China',            era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Palmyra',                  name: 'Palmyra',                        era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Petra, Jordan',            name: 'Petra',                          era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Hannibal Barca',           name: 'Hannibal',                       era: { en: 'Antiquity',      de: 'Antike' } },
  { category: 'Silk Road',                name: 'Silk Road',                      era: { en: 'Antiquity',      de: 'Antike' } },

  // ── Prehistory ─────────────────────────────────────────────────────────────
  { category: 'Newgrange',                name: 'Newgrange',                      era: { en: 'Prehistory',     de: 'Vorgeschichte' } },
  { category: 'Göbekli Tepe',             name: 'Göbekli Tepe',                   era: { en: 'Prehistory',     de: 'Vorgeschichte' } },
  { category: 'Lascaux cave',             name: 'Lascaux Cave Paintings',         era: { en: 'Prehistory',     de: 'Vorgeschichte' } },
  { category: 'Altamira cave',            name: 'Altamira Cave Paintings',        era: { en: 'Prehistory',     de: 'Vorgeschichte' } },
  { category: 'Skara Brae',               name: 'Skara Brae',                     era: { en: 'Prehistory',     de: 'Vorgeschichte' } },
  { category: 'Avebury',                  name: 'Avebury Stone Circle',           era: { en: 'Prehistory',     de: 'Vorgeschichte' } },
  { category: 'Carnac stones',            name: 'Carnac Stones',                  era: { en: 'Prehistory',     de: 'Vorgeschichte' } },
  { category: 'Stonehenge',               name: 'Stonehenge',                     era: { en: 'Prehistory',     de: 'Vorgeschichte' } },

  // ── Middle Ages ────────────────────────────────────────────────────────────
  { category: 'Bayeux Tapestry',          name: 'Bayeux Tapestry',                era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Sutton Hoo',               name: 'Sutton Hoo',                     era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Mesa Verde National Park', name: 'Mesa Verde cliff dwellings',     era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Borobudur',                name: 'Borobudur',                      era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Tikal',                    name: 'Tikal',                          era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Angkor Wat',               name: 'Angkor Wat',                     era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Carcassonne',              name: 'Carcassonne',                    era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Conwy Castle',             name: 'Conwy Castle',                   era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Mont Saint-Michel',        name: 'Mont Saint-Michel',              era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Chartres Cathedral',       name: 'Chartres Cathedral',             era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Hagia Sophia',             name: 'Hagia Sophia',                   era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Magna Carta',              name: 'Magna Carta',                    era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Joan of Arc',              name: 'Joan of Arc',                    era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Genghis Khan',             name: 'Genghis Khan',                   era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Vikings',                  name: 'Vikings',                        era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Black Death',              name: 'Black Death',                    era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Crusades',                 name: 'The Crusades',                   era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Ottoman Empire',           name: 'Ottoman Empire',                 era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Marco Polo',               name: 'Marco Polo',                     era: { en: 'Middle Ages',    de: 'Mittelalter' } },
  { category: 'Aztecs',                   name: 'Aztec Civilization',             era: { en: 'Middle Ages',    de: 'Mittelalter' } },

  // ── Early Modern ───────────────────────────────────────────────────────────
  { category: 'Alhambra',                 name: 'Alhambra',                       era: { en: 'Early Modern',   de: 'Frühe Neuzeit' } },
  { category: 'Forbidden City',           name: 'Forbidden City',                 era: { en: 'Early Modern',   de: 'Frühe Neuzeit' } },
  { category: 'Taj Mahal',                name: 'Taj Mahal',                      era: { en: 'Early Modern',   de: 'Frühe Neuzeit' } },
  { category: 'Palace of Versailles',     name: 'Palace of Versailles',           era: { en: 'Early Modern',   de: 'Frühe Neuzeit' } },
  { category: 'Machu Picchu',             name: 'Machu Picchu',                   era: { en: 'Early Modern',   de: 'Frühe Neuzeit' } },
  { category: 'Gutenberg Bible',          name: 'Gutenberg Bible',                era: { en: 'Early Modern',   de: 'Frühe Neuzeit' } },
  { category: 'Sistine Chapel',           name: 'Sistine Chapel ceiling',         era: { en: 'Early Modern',   de: 'Frühe Neuzeit' } },
  { category: 'Martin Luther',            name: 'Martin Luther',                  era: { en: 'Early Modern',   de: 'Frühe Neuzeit' } },
  { category: 'Spanish Armada',           name: 'Spanish Armada',                 era: { en: 'Early Modern',   de: 'Frühe Neuzeit' } },
  { category: 'Christopher Columbus',     name: 'Christopher Columbus',           era: { en: 'Early Modern',   de: 'Frühe Neuzeit' } },
  { category: 'Vasco da Gama',            name: 'Vasco da Gama',                  era: { en: 'Early Modern',   de: 'Frühe Neuzeit' } },

  // ── 18th–19th Century ──────────────────────────────────────────────────────
  { category: 'French Revolution',        name: 'French Revolution',              era: { en: '18th century',   de: '18. Jahrhundert' } },
  { category: 'American Revolutionary War', name: 'American Revolution',          era: { en: '18th century',   de: '18. Jahrhundert' } },
  { category: 'Battle of Waterloo',       name: 'Battle of Waterloo',             era: { en: '19th century',   de: '19. Jahrhundert' } },
  { category: 'Industrial Revolution',    name: 'Industrial Revolution',          era: { en: '19th century',   de: '19. Jahrhundert' } },
  { category: 'Transcontinental Railroad', name: 'Transcontinental Railroad',     era: { en: '19th century',   de: '19. Jahrhundert' } },
  { category: 'Suez Canal',               name: 'Suez Canal',                     era: { en: '19th century',   de: '19. Jahrhundert' } },
  { category: 'American Civil War',       name: 'American Civil War',             era: { en: '19th century',   de: '19. Jahrhundert' } },
  { category: 'California Gold Rush',     name: 'California Gold Rush',           era: { en: '19th century',   de: '19. Jahrhundert' } },
  { category: 'Great Exhibition',         name: 'Great Exhibition 1851',          era: { en: '19th century',   de: '19. Jahrhundert' } },

  // ── 20th Century ───────────────────────────────────────────────────────────
  { category: 'Wright Brothers',          name: 'Wright Brothers first flight',   era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Titanic',                  name: 'RMS Titanic',                    era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'World War I',              name: 'World War I',                    era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Russian Revolution',       name: 'Russian Revolution',             era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Great Depression',         name: 'Great Depression',               era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'D-Day',                    name: 'D-Day Normandy',                 era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Auschwitz concentration camp', name: 'Auschwitz',                 era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Manhattan Project',        name: 'Manhattan Project',              era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Hiroshima Peace Memorial', name: 'Hiroshima Peace Memorial',       era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Cold War',                 name: 'Cold War',                       era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Space Race',               name: 'Space Race',                     era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Cuban Missile Crisis',     name: 'Cuban Missile Crisis',           era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Civil rights movement',    name: 'Civil Rights Movement',          era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Apollo 11',               name: 'Apollo 11 Moon landing',         era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Vietnam War',              name: 'Vietnam War',                    era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Berlin Wall',              name: 'Berlin Wall',                    era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Chernobyl disaster',       name: 'Chernobyl',                      era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Space Shuttle',            name: 'Space Shuttle',                  era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Concorde',                 name: 'Concorde',                       era: { en: '20th century',   de: '20. Jahrhundert' } },
  { category: 'Moon',                     name: 'Moon Exploration',               era: { en: '20th century',   de: '20. Jahrhundert' } },
];
