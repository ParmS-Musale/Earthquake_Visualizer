import { Loader2 } from 'lucide-react';

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Loader2 className="w-16 h-16 text-blue-600 animate-spin mb-4" />
      <h2 className="text-xl font-semibold text-slate-800 mb-2">Loading Earthquake Data</h2>
      <p className="text-slate-600">Fetching real-time seismic activity from USGS...</p>
    </div>
  );
};

export default LoadingState;
