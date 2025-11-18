
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  // Define the state for the position
  const [position] = useState<[number, number]>([40.7213, -73.9065]); // Default coordinates (London)
  const zoomLevel = 12; // Zoom level
   const icon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png', // Correct URL to default marker icon
    iconRetinaUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon-2x.png', // Retina icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className="max-w-7xl mx-auto px-6 rounded-2xl h-[500px]">
      <MapContainer center={position} zoom={zoomLevel} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={icon}>
          <Popup>
            <span>London</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
