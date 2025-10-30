import { EarthquakeData } from '../types/earthquake';

const EARTHQUAKE_API_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

export const fetchEarthquakes = async (): Promise<EarthquakeData> => {
  try {
    const response = await fetch(EARTHQUAKE_API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: EarthquakeData = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching earthquake data:', error);
    throw new Error('Failed to fetch earthquake data. Please try again later.');
  }
};
