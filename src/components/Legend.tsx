import { Info } from 'lucide-react';

const Legend = () => {
  const magnitudeRanges = [
    { range: '6.0+', color: '#dc2626', label: 'Major' },
    { range: '5.0-5.9', color: '#ea580c', label: 'Moderate' },
    { range: '4.0-4.9', color: '#f59e0b', label: 'Light' },
    { range: '3.0-3.9', color: '#eab308', label: 'Minor' },
    { range: '2.0-2.9', color: '#84cc16', label: 'Very Minor' },
    { range: '<2.0', color: '#22c55e', label: 'Micro' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
      <div className="flex items-center space-x-2 mb-3">
        <Info className="w-5 h-5 text-slate-600" />
        <h3 className="font-semibold text-slate-800">Magnitude Scale</h3>
      </div>
      <div className="space-y-2">
        {magnitudeRanges.map((item) => (
          <div key={item.range} className="flex items-center space-x-3">
            <div
              className="w-4 h-4 rounded-full shadow-sm"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-slate-600 font-medium w-20">{item.range}</span>
            <span className="text-xs text-slate-500">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-slate-200">
        <p className="text-xs text-slate-500">
          Marker size represents earthquake magnitude. Click any marker for details.
        </p>
      </div>
    </div>
  );
};

export default Legend;
