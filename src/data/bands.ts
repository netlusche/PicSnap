// Curated list of bands and musicians for the "Bands & Musicians" category.
// `category` is the Wikimedia Commons category (without "Category:" prefix).
// Commons person/band categories contain concert photos, press shots, live
// performances — far more images and higher hit rate than Wikipedia lead images.

export interface BandEntry {
  name: string;
  category: string;
  genre: { en: string; de: string };
}

export const BANDS: BandEntry[] = [
  // ── Classic Rock ───────────────────────────────────────────────────────────
  { name: 'The Beatles',        category: 'The Beatles',          genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'The Rolling Stones', category: 'The Rolling Stones',   genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Led Zeppelin',       category: 'Led Zeppelin',         genre: { en: 'Hard Rock',     de: 'Hard Rock' } },
  { name: 'Pink Floyd',         category: 'Pink Floyd',           genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Queen',              category: 'Queen (band)',          genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'The Who',            category: 'The Who',              genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Fleetwood Mac',      category: 'Fleetwood Mac',        genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'The Doors',          category: 'The Doors',            genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Eagles',             category: 'Eagles (band)',         genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Aerosmith',          category: 'Aerosmith',            genre: { en: 'Hard Rock',     de: 'Hard Rock' } },
  { name: 'Deep Purple',        category: 'Deep Purple',          genre: { en: 'Hard Rock',     de: 'Hard Rock' } },
  { name: 'AC/DC',              category: 'AC/DC',                genre: { en: 'Hard Rock',     de: 'Hard Rock' } },
  { name: 'Bon Jovi',           category: 'Bon Jovi',             genre: { en: 'Rock',          de: 'Rock' } },
  { name: "Guns N' Roses",      category: "Guns N' Roses",        genre: { en: 'Hard Rock',     de: 'Hard Rock' } },
  { name: 'The Police',         category: 'The Police',           genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Dire Straits',       category: 'Dire Straits',         genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Creedence Clearwater Revival', category: 'Creedence Clearwater Revival', genre: { en: 'Rock', de: 'Rock' } },
  { name: 'The Kinks',          category: 'The Kinks',            genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'ZZ Top',             category: 'ZZ Top',               genre: { en: 'Blues Rock',    de: 'Blues Rock' } },

  // ── Metal ──────────────────────────────────────────────────────────────────
  { name: 'Black Sabbath',      category: 'Black Sabbath',        genre: { en: 'Metal',         de: 'Metal' } },
  { name: 'Metallica',          category: 'Metallica',            genre: { en: 'Metal',         de: 'Metal' } },
  { name: 'Iron Maiden',        category: 'Iron Maiden',          genre: { en: 'Metal',         de: 'Metal' } },
  { name: 'Judas Priest',       category: 'Judas Priest',         genre: { en: 'Metal',         de: 'Metal' } },

  // ── Grunge / Alternative ───────────────────────────────────────────────────
  { name: 'Nirvana',            category: 'Nirvana (band)',        genre: { en: 'Grunge',        de: 'Grunge' } },
  { name: 'Pearl Jam',          category: 'Pearl Jam',            genre: { en: 'Grunge',        de: 'Grunge' } },
  { name: 'Soundgarden',        category: 'Soundgarden',          genre: { en: 'Grunge',        de: 'Grunge' } },
  { name: 'Foo Fighters',       category: 'Foo Fighters',         genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Radiohead',          category: 'Radiohead',            genre: { en: 'Alternative',   de: 'Alternative' } },
  { name: 'R.E.M.',             category: 'R.E.M.',               genre: { en: 'Alternative',   de: 'Alternative' } },
  { name: 'U2',                 category: 'U2',                   genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Coldplay',           category: 'Coldplay',             genre: { en: 'Pop Rock',      de: 'Pop Rock' } },
  { name: 'Oasis',              category: 'Oasis (band)',          genre: { en: 'Britpop',       de: 'Britpop' } },
  { name: 'The Cure',           category: 'The Cure',             genre: { en: 'Alternative',   de: 'Alternative' } },
  { name: 'Red Hot Chili Peppers', category: 'Red Hot Chili Peppers', genre: { en: 'Rock',      de: 'Rock' } },

  // ── Punk / New Wave ────────────────────────────────────────────────────────
  { name: 'Ramones',            category: 'Ramones',              genre: { en: 'Punk',          de: 'Punk' } },
  { name: 'Sex Pistols',        category: 'Sex Pistols',          genre: { en: 'Punk',          de: 'Punk' } },
  { name: 'The Clash',          category: 'The Clash',            genre: { en: 'Punk',          de: 'Punk' } },
  { name: 'Blondie',            category: 'Blondie (band)',        genre: { en: 'New Wave',      de: 'New Wave' } },
  { name: 'Talking Heads',      category: 'Talking Heads',        genre: { en: 'New Wave',      de: 'New Wave' } },
  { name: 'New Order',          category: 'New Order',            genre: { en: 'Electronic',    de: 'Elektronisch' } },
  { name: 'Depeche Mode',       category: 'Depeche Mode',         genre: { en: 'Electronic',    de: 'Elektronisch' } },
  { name: 'Green Day',          category: 'Green Day',            genre: { en: 'Punk Rock',     de: 'Punk Rock' } },
  { name: 'Linkin Park',        category: 'Linkin Park',          genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'The Smashing Pumpkins', category: 'The Smashing Pumpkins', genre: { en: 'Alternative', de: 'Alternative' } },

  // ── Electronic ─────────────────────────────────────────────────────────────
  { name: 'Kraftwerk',          category: 'Kraftwerk',            genre: { en: 'Electronic',    de: 'Elektronisch' } },
  { name: 'Daft Punk',          category: 'Daft Punk',            genre: { en: 'Electronic',    de: 'Elektronisch' } },

  // ── Pop ────────────────────────────────────────────────────────────────────
  { name: 'ABBA',               category: 'ABBA',                 genre: { en: 'Pop',           de: 'Pop' } },
  { name: 'Spice Girls',        category: 'Spice Girls',          genre: { en: 'Pop',           de: 'Pop' } },
  { name: 'Backstreet Boys',    category: 'Backstreet Boys',      genre: { en: 'Pop',           de: 'Pop' } },
  { name: 'BTS',                category: 'BTS (band)',            genre: { en: 'K-Pop',         de: 'K-Pop' } },

  // ── Solo artists ───────────────────────────────────────────────────────────
  { name: 'Elvis Presley',      category: 'Elvis Presley',        genre: { en: "Rock'n'Roll",   de: "Rock'n'Roll" } },
  { name: 'David Bowie',        category: 'David Bowie',          genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Michael Jackson',    category: 'Michael Jackson',      genre: { en: 'Pop',           de: 'Pop' } },
  { name: 'Madonna',            category: 'Madonna (entertainer)', genre: { en: 'Pop',          de: 'Pop' } },
  { name: 'Prince',             category: 'Prince (musician)',     genre: { en: 'Pop',          de: 'Pop' } },
  { name: 'Jimi Hendrix',       category: 'Jimi Hendrix',         genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Bob Dylan',          category: 'Bob Dylan',            genre: { en: 'Folk',          de: 'Folk' } },
  { name: 'Bruce Springsteen',  category: 'Bruce Springsteen',    genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Elton John',         category: 'Elton John',           genre: { en: 'Pop',           de: 'Pop' } },
  { name: 'Eric Clapton',       category: 'Eric Clapton',         genre: { en: 'Blues Rock',    de: 'Blues Rock' } },
  { name: 'Johnny Cash',        category: 'Johnny Cash',          genre: { en: 'Country',       de: 'Country' } },
  { name: 'Freddie Mercury',    category: 'Freddie Mercury',      genre: { en: 'Rock',          de: 'Rock' } },
  { name: 'Bob Marley',         category: 'Bob Marley',           genre: { en: 'Reggae',        de: 'Reggae' } },
  { name: 'Aretha Franklin',    category: 'Aretha Franklin',      genre: { en: 'Soul',          de: 'Soul' } },
  { name: 'Amy Winehouse',      category: 'Amy Winehouse',        genre: { en: 'Soul',          de: 'Soul' } },
  { name: 'Beyoncé',            category: 'Beyoncé',              genre: { en: 'R&B',           de: 'R&B' } },
  { name: 'Taylor Swift',       category: 'Taylor Swift',         genre: { en: 'Pop',           de: 'Pop' } },
  { name: 'Lady Gaga',          category: 'Lady Gaga',            genre: { en: 'Pop',           de: 'Pop' } },
  { name: 'Adele',              category: 'Adele (singer)',        genre: { en: 'Pop',          de: 'Pop' } },
  { name: 'Eminem',             category: 'Eminem',               genre: { en: 'Hip-Hop',       de: 'Hip-Hop' } },
  { name: 'Jay-Z',              category: 'Jay-Z',                genre: { en: 'Hip-Hop',       de: 'Hip-Hop' } },
  { name: 'Kanye West',         category: 'Kanye West',           genre: { en: 'Hip-Hop',       de: 'Hip-Hop' } },
  { name: 'Rihanna',            category: 'Rihanna',              genre: { en: 'Pop',           de: 'Pop' } },
  { name: 'Whitney Houston',    category: 'Whitney Houston',      genre: { en: 'Pop',           de: 'Pop' } },
  { name: 'Stevie Wonder',      category: 'Stevie Wonder',        genre: { en: 'Soul',          de: 'Soul' } },
  { name: 'Ray Charles',        category: 'Ray Charles',          genre: { en: 'Soul',          de: 'Soul' } },
  { name: 'Frank Sinatra',      category: 'Frank Sinatra',        genre: { en: 'Jazz',          de: 'Jazz' } },
  { name: 'Louis Armstrong',    category: 'Louis Armstrong',      genre: { en: 'Jazz',          de: 'Jazz' } },
  { name: 'Miles Davis',        category: 'Miles Davis',          genre: { en: 'Jazz',          de: 'Jazz' } },
];
