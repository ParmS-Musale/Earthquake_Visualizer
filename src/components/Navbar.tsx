import { Activity } from 'lucide-react';

interface NavbarProps {
  earthquakeCount: number;
}

const Navbar = ({ earthquakeCount }: NavbarProps) => {
  return (
    <nav className="bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Activity className="w-8 h-8 text-red-500" />
            <div>
              <h1 className="text-xl font-bold">Earthquake Visualizer</h1>
              <p className="text-xs text-slate-300">Real-time seismic activity monitoring</p>
            </div>
          </div>
          <div className="bg-slate-700 px-4 py-2 rounded-lg">
            <p className="text-sm font-semibold">
              <span className="text-slate-300">Last 24h:</span>{' '}
              <span className="text-red-400">{earthquakeCount}</span> events
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
