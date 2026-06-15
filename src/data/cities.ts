// Cities for the Mapillary-backed "Geo-Roulette" category. Each has a small
// bounding box around its centre; Mapillary street-level images are queried
// within the box, so the answer (city + country) comes from this config.
// bbox order is [minLng, minLat, maxLng, maxLat] (west, south, east, north).
// All boxes are ~0.003° × 0.003° (~300 m). fetchBboxImages() retries with a
// smaller box if Mapillary's data-size limit is hit.

export interface City {
  name: string;
  country: { en: string; de: string };
  bbox: [number, number, number, number];
}

const box = (lng: number, lat: number): [number, number, number, number] =>
  [+(lng - 0.0015).toFixed(4), +(lat - 0.0015).toFixed(4), +(lng + 0.0015).toFixed(4), +(lat + 0.0015).toFixed(4)];

export const CITIES: City[] = [
  // ── Europe ────────────────────────────────────────────────────────────────
  { name: 'Paris',          country: { en: 'France',          de: 'Frankreich'      }, bbox: box(2.3470,   48.8600) },
  { name: 'London',         country: { en: 'United Kingdom',  de: 'Großbritannien'  }, bbox: box(-0.1200,  51.5100) },
  { name: 'Berlin',         country: { en: 'Germany',         de: 'Deutschland'     }, bbox: box(13.3030,  52.5070) }, // Charlottenburg
  { name: 'Rome',           country: { en: 'Italy',           de: 'Italien'         }, bbox: box(12.4830,  41.8950) },
  { name: 'Amsterdam',      country: { en: 'Netherlands',     de: 'Niederlande'     }, bbox: box(4.8990,   52.3730) },
  { name: 'Barcelona',      country: { en: 'Spain',           de: 'Spanien'         }, bbox: box(2.1730,   41.3870) },
  { name: 'Vienna',         country: { en: 'Austria',         de: 'Österreich'      }, bbox: box(16.3730,  48.2090) },
  { name: 'Prague',         country: { en: 'Czech Republic',  de: 'Tschechien'      }, bbox: box(14.4210,  50.0870) },
  { name: 'Budapest',       country: { en: 'Hungary',         de: 'Ungarn'          }, bbox: box(19.0600,  47.4980) }, // Pest side
  { name: 'Warsaw',         country: { en: 'Poland',          de: 'Polen'           }, bbox: box(21.0120,  52.2290) },
  { name: 'Stockholm',      country: { en: 'Sweden',          de: 'Schweden'        }, bbox: box(18.0700,  59.3310) },
  { name: 'Copenhagen',     country: { en: 'Denmark',         de: 'Dänemark'        }, bbox: box(12.5680,  55.6780) },
  { name: 'Oslo',           country: { en: 'Norway',          de: 'Norwegen'        }, bbox: box(10.7390,  59.9130) },
  { name: 'Helsinki',       country: { en: 'Finland',         de: 'Finnland'        }, bbox: box(24.9240,  60.1720) }, // Töölö
  { name: 'Lisbon',         country: { en: 'Portugal',        de: 'Portugal'        }, bbox: box(-9.1390,  38.7220) },
  { name: 'Madrid',         country: { en: 'Spain',           de: 'Spanien'         }, bbox: box(-3.7030,  40.4170) },
  { name: 'Brussels',       country: { en: 'Belgium',         de: 'Belgien'         }, bbox: box(4.3600,   50.8320) }, // Ixelles
  { name: 'Zurich',         country: { en: 'Switzerland',     de: 'Schweiz'         }, bbox: box(8.5410,   47.3760) },
  { name: 'Munich',         country: { en: 'Germany',         de: 'Deutschland'     }, bbox: box(11.5760,  48.1370) },
  { name: 'Hamburg',        country: { en: 'Germany',         de: 'Deutschland'     }, bbox: box(9.9380,   53.5480) }, // Altona
  { name: 'Bielefeld',      country: { en: 'Germany',         de: 'Deutschland'     }, bbox: box(8.5320,   52.0220) },
  { name: 'Athens',         country: { en: 'Greece',          de: 'Griechenland'    }, bbox: box(23.7260,  37.9750) }, // Monastiraki
  { name: 'Dublin',         country: { en: 'Ireland',         de: 'Irland'          }, bbox: box(-6.2630,  53.3440) },
  { name: 'Edinburgh',      country: { en: 'United Kingdom',  de: 'Großbritannien'  }, bbox: box(-3.1880,  55.9530) },
  { name: 'Porto',          country: { en: 'Portugal',        de: 'Portugal'        }, bbox: box(-8.6110,  41.1490) },
  { name: 'Milan',          country: { en: 'Italy',           de: 'Italien'         }, bbox: box(9.1900,   45.4640) },
  { name: 'Reykjavik',      country: { en: 'Iceland',         de: 'Island'          }, bbox: box(-21.9000, 64.1420) }, // Hlemmur
  { name: 'Krakow',         country: { en: 'Poland',          de: 'Polen'           }, bbox: box(19.9450,  50.0610) },
  { name: 'Bruges',         country: { en: 'Belgium',         de: 'Belgien'         }, bbox: box(3.2240,   51.2090) },
  { name: 'Lyon',           country: { en: 'France',          de: 'Frankreich'      }, bbox: box(4.8350,   45.7640) },

  // ── Americas ──────────────────────────────────────────────────────────────
  { name: 'New York',       country: { en: 'United States',   de: 'USA'             }, bbox: box(-73.9900, 40.7150) },
  { name: 'San Francisco',  country: { en: 'United States',   de: 'USA'             }, bbox: box(-122.4180, 37.7620) }, // Mission
  { name: 'Los Angeles',    country: { en: 'United States',   de: 'USA'             }, bbox: box(-118.2430, 34.0520) },
  { name: 'Chicago',        country: { en: 'United States',   de: 'USA'             }, bbox: box(-87.6300,  41.8830) },
  { name: 'Miami',          country: { en: 'United States',   de: 'USA'             }, bbox: box(-80.1920,  25.7740) },
  { name: 'Seattle',        country: { en: 'United States',   de: 'USA'             }, bbox: box(-122.3210, 47.6240) }, // Capitol Hill
  { name: 'Toronto',        country: { en: 'Canada',          de: 'Kanada'          }, bbox: box(-79.3870,  43.6530) },
  { name: 'Vancouver',      country: { en: 'Canada',          de: 'Kanada'          }, bbox: box(-123.1200, 49.2820) },
  { name: 'Montreal',       country: { en: 'Canada',          de: 'Kanada'          }, bbox: box(-73.5800,  45.5210) }, // Plateau
  { name: 'Mexico City',    country: { en: 'Mexico',          de: 'Mexiko'          }, bbox: box(-99.2000,  19.4320) }, // Polanco
  { name: 'Havana',         country: { en: 'Cuba',            de: 'Kuba'            }, bbox: box(-82.3830,  23.1360) },
  { name: 'Rio de Janeiro', country: { en: 'Brazil',          de: 'Brasilien'       }, bbox: box(-43.1720, -22.9050) },
  { name: 'Sao Paulo',      country: { en: 'Brazil',          de: 'Brasilien'       }, bbox: box(-46.6610, -23.5580) }, // Jardins
  { name: 'Buenos Aires',   country: { en: 'Argentina',       de: 'Argentinien'     }, bbox: box(-58.3810, -34.6040) },
  { name: 'Santiago',       country: { en: 'Chile',           de: 'Chile'           }, bbox: box(-70.6480, -33.4590) },
  { name: 'Bogota',         country: { en: 'Colombia',        de: 'Kolumbien'       }, bbox: box(-74.0720,   4.7100) },
  { name: 'Medellin',       country: { en: 'Colombia',        de: 'Kolumbien'       }, bbox: box(-75.5640,   6.2440) },
  { name: 'Lima',           country: { en: 'Peru',            de: 'Peru'            }, bbox: box(-77.0280, -12.1160) }, // Miraflores

  // ── Asia ──────────────────────────────────────────────────────────────────
  { name: 'Tokyo',          country: { en: 'Japan',           de: 'Japan'           }, bbox: box(139.6990,  35.6800) },
  { name: 'Osaka',          country: { en: 'Japan',           de: 'Japan'           }, bbox: box(135.5020,  34.6940) },
  { name: 'Seoul',          country: { en: 'South Korea',     de: 'Südkorea'        }, bbox: box(126.9780,  37.5660) },
  { name: 'Beijing',        country: { en: 'China',           de: 'China'           }, bbox: box(116.3910,  39.9080) },
  { name: 'Shanghai',       country: { en: 'China',           de: 'China'           }, bbox: box(121.4740,  31.2310) },
  { name: 'Hong Kong',      country: { en: 'China',           de: 'Hongkong'        }, bbox: box(114.1650,  22.3190) },
  { name: 'Taipei',         country: { en: 'Taiwan',          de: 'Taiwan'          }, bbox: box(121.5650,  25.0380) },
  { name: 'Bangkok',        country: { en: 'Thailand',        de: 'Thailand'        }, bbox: box(100.5230,  13.7560) },
  { name: 'Singapore',      country: { en: 'Singapore',       de: 'Singapur'        }, bbox: box(103.8490,   1.2900) },
  { name: 'Kuala Lumpur',   country: { en: 'Malaysia',        de: 'Malaysia'        }, bbox: box(101.7120,   3.1570) }, // KLCC
  { name: 'Hanoi',          country: { en: 'Vietnam',         de: 'Vietnam'         }, bbox: box(105.8520,  21.0280) },
  { name: 'Ho Chi Minh',    country: { en: 'Vietnam',         de: 'Vietnam'         }, bbox: box(106.6980,  10.7730) },
  { name: 'Bali',           country: { en: 'Indonesia',       de: 'Indonesien'      }, bbox: box(115.1890,  -8.6890) },
  { name: 'Mumbai',         country: { en: 'India',           de: 'Indien'          }, bbox: box(72.8360,   19.0560) }, // Bandra
  { name: 'Delhi',          country: { en: 'India',           de: 'Indien'          }, bbox: box(77.2090,   28.6140) },
  { name: 'Colombo',        country: { en: 'Sri Lanka',       de: 'Sri Lanka'       }, bbox: box(79.8610,    6.9270) },
  { name: 'Kathmandu',      country: { en: 'Nepal',           de: 'Nepal'           }, bbox: box(85.3240,   27.7170) },
  { name: 'Tbilisi',        country: { en: 'Georgia',         de: 'Georgien'        }, bbox: box(44.7930,   41.6940) },
  { name: 'Moscow',         country: { en: 'Russia',          de: 'Russland'        }, bbox: box(37.6200,   55.7550) },

  // ── Middle East ───────────────────────────────────────────────────────────
  { name: 'Istanbul',       country: { en: 'Turkey',          de: 'Türkei'          }, bbox: box(28.9790,   41.0180) },
  { name: 'Dubai',          country: { en: 'UAE',             de: 'VAE'             }, bbox: box(55.1400,   25.0790) }, // Marina
  { name: 'Tel Aviv',       country: { en: 'Israel',          de: 'Israel'          }, bbox: box(34.7810,   32.0850) },
  { name: 'Beirut',         country: { en: 'Lebanon',         de: 'Libanon'         }, bbox: box(35.5100,   33.8880) },
  { name: 'Amman',          country: { en: 'Jordan',          de: 'Jordanien'       }, bbox: box(35.9300,   31.9520) },

  // ── Africa ────────────────────────────────────────────────────────────────
  { name: 'Cairo',          country: { en: 'Egypt',           de: 'Ägypten'         }, bbox: box(31.2357,   30.0444) },
  { name: 'Casablanca',     country: { en: 'Morocco',         de: 'Marokko'         }, bbox: box(-7.5890,   33.5730) },
  { name: 'Marrakech',      country: { en: 'Morocco',         de: 'Marokko'         }, bbox: box(-7.9890,   31.6280) },
  { name: 'Tunis',          country: { en: 'Tunisia',         de: 'Tunesien'        }, bbox: box(10.1810,   36.8190) },
  { name: 'Nairobi',        country: { en: 'Kenya',           de: 'Kenia'           }, bbox: box(36.8170,   -1.2920) },
  { name: 'Addis Ababa',    country: { en: 'Ethiopia',        de: 'Äthiopien'       }, bbox: box(38.7469,    9.0320) },
  { name: 'Johannesburg',   country: { en: 'South Africa',    de: 'Südafrika'       }, bbox: box(28.0340,  -26.2040) },
  { name: 'Cape Town',      country: { en: 'South Africa',    de: 'Südafrika'       }, bbox: box(18.4240,  -33.9250) },

  // ── Oceania ───────────────────────────────────────────────────────────────
  { name: 'Sydney',         country: { en: 'Australia',       de: 'Australien'      }, bbox: box(151.1980, -33.8720) },
  { name: 'Melbourne',      country: { en: 'Australia',       de: 'Australien'      }, bbox: box(144.9620, -37.8130) },
  { name: 'Brisbane',       country: { en: 'Australia',       de: 'Australien'      }, bbox: box(153.0260, -27.4700) },
  { name: 'Perth',          country: { en: 'Australia',       de: 'Australien'      }, bbox: box(115.8610, -31.9520) },
  { name: 'Auckland',       country: { en: 'New Zealand',     de: 'Neuseeland'      }, bbox: box(174.7650, -36.8480) },
];
