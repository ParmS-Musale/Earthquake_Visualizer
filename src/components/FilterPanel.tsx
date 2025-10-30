import { Filter } from 'lucide-react';

interface FilterPanelProps {
  minMagnitude: number;
  maxMagnitude: number;
  onMinMagnitudeChange: (value: number) => void;
  onMaxMagnitudeChange: (value: number) => void;
  totalCount: number;
  filteredCount: number;
}

const FilterPanel = ({
  minMagnitude,
  maxMagnitude,
  onMinMagnitudeChange,
  onMaxMagnitudeChange,
  totalCount,
  filteredCount,
}: FilterPanelProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-slate-600" />
        <h3 className="font-semibold text-slate-800">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Min Magnitude: {minMagnitude.toFixed(1)}
          </label>
          <input
            type="range"
            min="0"
            max="9"
            step="0.1"
            value={minMagnitude}
            onChange={(e) => onMinMagnitudeChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Max Magnitude: {maxMagnitude.toFixed(1)}
          </label>
          <input
            type="range"
            min="0"
            max="9"
            step="0.1"
            value={maxMagnitude}
            onChange={(e) => onMaxMagnitudeChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="pt-3 border-t border-slate-200">
          <p className="text-sm text-slate-600">
            Showing <span className="font-semibold text-slate-800">{filteredCount}</span> of{' '}
            <span className="font-semibold text-slate-800">{totalCount}</span> earthquakes
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
