// Curated list of bands and musicians for the "Bands & Musicians" category.
// `name` is both the display answer and the Wikipedia article title.
// `wikiTitle` overrides when disambiguation is needed.

export interface BandEntry {
  name: string;
  wikiTitle?: string;
  genre: { en: string; de: string };
}

export const BANDS: BandEntry[] = [
  // ── Classic Rock ───────────────────────────────────────────────────────────
  { name: 'The Beatles',            genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'The Rolling Stones',     genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'Led Zeppelin',           genre: { en: 'Hard Rock',   de: 'Hard Rock' } },
  { name: 'Pink Floyd',             genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'Queen',    wikiTitle: 'Queen (band)',            genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'The Who',                genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'Fleetwood Mac',          genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'The Doors',              genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'Eagles',  wikiTitle: 'Eagles (band)',            genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'Aerosmith',              genre: { en: 'Hard Rock',   de: 'Hard Rock' } },
  { name: 'Deep Purple',            genre: { en: 'Hard Rock',   de: 'Hard Rock' } },
  { name: 'AC/DC',                  genre: { en: 'Hard Rock',   de: 'Hard Rock' } },
  { name: 'Bon Jovi',               genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'Guns N\' Roses',         genre: { en: 'Hard Rock',   de: 'Hard Rock' } },
  { name: 'The Police',             genre: { en: 'Rock',        de: 'Rock' } },

  // ── Metal ──────────────────────────────────────────────────────────────────
  { name: 'Black Sabbath',          genre: { en: 'Metal',       de: 'Metal' } },
  { name: 'Metallica',              genre: { en: 'Metal',       de: 'Metal' } },
  { name: 'Iron Maiden',            genre: { en: 'Metal',       de: 'Metal' } },

  // ── Grunge / Alternative ───────────────────────────────────────────────────
  { name: 'Nirvana',  wikiTitle: 'Nirvana (band)',          genre: { en: 'Grunge',      de: 'Grunge' } },
  { name: 'Pearl Jam',              genre: { en: 'Grunge',      de: 'Grunge' } },
  { name: 'Soundgarden',            genre: { en: 'Grunge',      de: 'Grunge' } },
  { name: 'Foo Fighters',           genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'Radiohead',              genre: { en: 'Alternative', de: 'Alternative' } },
  { name: 'R.E.M.',                 genre: { en: 'Alternative', de: 'Alternative' } },
  { name: 'U2',                     genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'Coldplay',               genre: { en: 'Pop Rock',    de: 'Pop Rock' } },
  { name: 'Oasis',                  genre: { en: 'Britpop',     de: 'Britpop' } },
  { name: 'The Cure',               genre: { en: 'Alternative', de: 'Alternative' } },

  // ── Punk / New Wave ────────────────────────────────────────────────────────
  { name: 'Ramones',                genre: { en: 'Punk',        de: 'Punk' } },
  { name: 'Sex Pistols',            genre: { en: 'Punk',        de: 'Punk' } },
  { name: 'The Clash',              genre: { en: 'Punk',        de: 'Punk' } },
  { name: 'Blondie',                genre: { en: 'New Wave',    de: 'New Wave' } },
  { name: 'Talking Heads',          genre: { en: 'New Wave',    de: 'New Wave' } },
  { name: 'New Order',              genre: { en: 'Electronic',  de: 'Elektronisch' } },
  { name: 'Depeche Mode',           genre: { en: 'Electronic',  de: 'Elektronisch' } },
  { name: 'Green Day',              genre: { en: 'Punk Rock',   de: 'Punk Rock' } },
  { name: 'Linkin Park',            genre: { en: 'Rock',        de: 'Rock' } },

  // ── Electronic ─────────────────────────────────────────────────────────────
  { name: 'Kraftwerk',              genre: { en: 'Electronic',  de: 'Elektronisch' } },
  { name: 'Daft Punk',              genre: { en: 'Electronic',  de: 'Elektronisch' } },

  // ── Pop ────────────────────────────────────────────────────────────────────
  { name: 'ABBA',                   genre: { en: 'Pop',         de: 'Pop' } },
  { name: 'Spice Girls',            genre: { en: 'Pop',         de: 'Pop' } },
  { name: 'Backstreet Boys',        genre: { en: 'Pop',         de: 'Pop' } },
  { name: 'BTS',                    genre: { en: 'K-Pop',       de: 'K-Pop' } },

  // ── Solo artists ───────────────────────────────────────────────────────────
  { name: 'Elvis Presley',          genre: { en: 'Rock\'n\'Roll', de: 'Rock\'n\'Roll' } },
  { name: 'David Bowie',            genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'Michael Jackson',        genre: { en: 'Pop',         de: 'Pop' } },
  { name: 'Madonna',  wikiTitle: 'Madonna (entertainer)',    genre: { en: 'Pop',         de: 'Pop' } },
  { name: 'Prince',   wikiTitle: 'Prince (musician)',        genre: { en: 'Pop',         de: 'Pop' } },
  { name: 'Jimi Hendrix',           genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'Bob Dylan',              genre: { en: 'Folk',        de: 'Folk' } },
  { name: 'Bruce Springsteen',      genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'Elton John',             genre: { en: 'Pop',         de: 'Pop' } },
  { name: 'Eric Clapton',           genre: { en: 'Blues Rock',  de: 'Blues Rock' } },
  { name: 'Johnny Cash',            genre: { en: 'Country',     de: 'Country' } },
  { name: 'Freddie Mercury',        genre: { en: 'Rock',        de: 'Rock' } },
  { name: 'Bob Marley',             genre: { en: 'Reggae',      de: 'Reggae' } },
  { name: 'Aretha Franklin',        genre: { en: 'Soul',        de: 'Soul' } },
  { name: 'Amy Winehouse',          genre: { en: 'Soul',        de: 'Soul' } },
  { name: 'Beyoncé',               genre: { en: 'R&B',         de: 'R&B' } },
  { name: 'Taylor Swift',           genre: { en: 'Pop',         de: 'Pop' } },
  { name: 'Lady Gaga',             genre: { en: 'Pop',         de: 'Pop' } },
  { name: 'Adele',                  genre: { en: 'Pop',         de: 'Pop' } },
  { name: 'Eminem',                 genre: { en: 'Hip-Hop',     de: 'Hip-Hop' } },
  { name: 'Jay-Z',                  genre: { en: 'Hip-Hop',     de: 'Hip-Hop' } },
  { name: 'Kanye West',             genre: { en: 'Hip-Hop',     de: 'Hip-Hop' } },
];
