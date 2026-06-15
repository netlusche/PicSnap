// Cities for the Mapillary-backed "Geo-Roulette" category. Each has a small
// bounding box around its centre; Mapillary street-level images are queried
// within the box, so the answer (city + country) comes from this config.
// bbox order is [minLng, minLat, maxLng, maxLat] (west, south, east, north).

export interface City {
  name: string;
  country: { en: string; de: string };
  bbox: [number, number, number, number];
}

export const CITIES: City[] = [
  { name: 'Paris',          country: { en: 'France', de: 'Frankreich' },     bbox: [2.32, 48.85, 2.36, 48.87] },
  { name: 'London',         country: { en: 'United Kingdom', de: 'Großbritannien' }, bbox: [-0.14, 51.50, -0.10, 51.52] },
  { name: 'New York',       country: { en: 'United States', de: 'USA' },     bbox: [-74.01, 40.70, -73.97, 40.73] },
  { name: 'Tokyo',          country: { en: 'Japan', de: 'Japan' },           bbox: [139.69, 35.67, 139.71, 35.69] },
  { name: 'Berlin',         country: { en: 'Germany', de: 'Deutschland' },   bbox: [13.38, 52.50, 13.42, 52.53] },
  { name: 'Rome',           country: { en: 'Italy', de: 'Italien' },         bbox: [12.47, 41.89, 12.50, 41.91] },
  { name: 'Amsterdam',      country: { en: 'Netherlands', de: 'Niederlande' }, bbox: [4.88, 52.36, 4.91, 52.38] },
  { name: 'Barcelona',      country: { en: 'Spain', de: 'Spanien' },         bbox: [2.16, 41.38, 2.19, 41.40] },
  { name: 'San Francisco',  country: { en: 'United States', de: 'USA' },     bbox: [-122.42, 37.77, -122.40, 37.79] },
  { name: 'Sydney',         country: { en: 'Australia', de: 'Australien' },  bbox: [151.20, -33.87, 151.22, -33.86] },
  { name: 'Moscow',         country: { en: 'Russia', de: 'Russland' },       bbox: [37.61, 55.75, 37.63, 55.76] },
  { name: 'Rio de Janeiro', country: { en: 'Brazil', de: 'Brasilien' },      bbox: [-43.18, -22.91, -43.16, -22.90] },
];
