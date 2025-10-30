import { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import MapView from './components/MapView';
import Legend from './components/Legend';
import FilterPanel from './components/FilterPanel';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import { fetchEarthquakes } from './services/earthquakeService';
import { EarthquakeData, EarthquakeFeature } from './types/earthquake';

function App() {
  const [earthquakeData, setEarthquakeData] = useState<EarthquakeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [minMagnitude, setMinMagnitude] = useState<number>(0);
  const [maxMagnitude, setMaxMagnitude] = useState<number>(9);

  const loadEarthquakes = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchEarthquakes();
      setEarthquakeData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEarthquakes();
  }, []);

  const filteredEarthquakes = useMemo(() => {
    if (!earthquakeData) return [];

    return earthquakeData.features.filter((earthquake: EarthquakeFeature) => {
      const mag = earthquake.properties.mag;
      return mag >= minMagnitude && mag <= maxMagnitude;
    });
  }, [earthquakeData, minMagnitude, maxMagnitude]);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={loadEarthquakes} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar earthquakeCount={earthquakeData?.features.length || 0} />

      <div className="relative h-[calc(100vh-4rem)]">
        <MapView earthquakes={filteredEarthquakes} />

        <div className="absolute top-4 right-4 z-[1000] space-y-4">
          <Legend />
          <FilterPanel
            minMagnitude={minMagnitude}
            maxMagnitude={maxMagnitude}
            onMinMagnitudeChange={setMinMagnitude}
            onMaxMagnitudeChange={setMaxMagnitude}
            totalCount={earthquakeData?.features.length || 0}
            filteredCount={filteredEarthquakes.length}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
