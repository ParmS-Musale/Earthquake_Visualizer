import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import { Icon } from 'leaflet';
import { EarthquakeFeature } from '../types/earthquake';
import { getMagnitudeColor, getMagnitudeSize, formatDate, getTimeAgo } from '../utils/earthquakeHelpers';
import { MapPin, Clock, Layers, AlertCircle } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
  earthquakes: EarthquakeFeature[];
}

const MapView = ({ earthquakes }: MapViewProps) => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      className="h-full w-full rounded-lg shadow-lg"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {earthquakes.map((earthquake) => {
        const [longitude, latitude, depth] = earthquake.geometry.coordinates;
        const { mag, place, time } = earthquake.properties;

        return (
          <CircleMarker
            key={earthquake.id}
            center={[latitude, longitude]}
            radius={getMagnitudeSize(mag)}
            fillColor={getMagnitudeColor(mag)}
            color="#ffffff"
            weight={2}
            opacity={0.8}
            fillOpacity={0.6}
            className={mag >= 5.0 ? 'animate-pulse' : ''}
          >
            <Popup className="custom-popup" maxWidth={300}>
              <div className="p-2">
                <div className="flex items-start space-x-2 mb-3">
                  <AlertCircle
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    style={{ color: getMagnitudeColor(mag) }}
                  />
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">
                      Magnitude {mag.toFixed(1)}
                    </h3>
                    <p className="text-sm text-slate-600">{earthquake.properties.title}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-700">Location</p>
                      <p className="text-slate-600">{place}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-700">Time</p>
                      <p className="text-slate-600">{formatDate(time)}</p>
                      <p className="text-xs text-slate-500">{getTimeAgo(time)}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Layers className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-700">Depth</p>
                      <p className="text-slate-600">{depth.toFixed(1)} km</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200">
                  <a
                    href={earthquake.properties.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View details on USGS →
                  </a>
                </div>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
};

export default MapView;
