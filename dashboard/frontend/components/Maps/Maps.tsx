// components/Map.tsx
'use client';

import { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import avatar from '@/public/next.svg';

import classes from './Maps.module.css';
// Define your custom icon
const customIcon = new L.Icon({
  iconUrl: 'placeholder.png', // Replace with the path to your icon image
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
});

interface Point {
  lat: number;
  lng: number;
  name: string;
}

interface MapProps {
  points: Point[];
}

const Maps: FC<MapProps> = ({ points }) => {
  return (
    <MapContainer center={[-1.515946241861014, 132.69136210383866]} zoom={6} style={{ height: '100vh', width: '100%' ,zIndex:0}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© OpenStreetMap contributors'
      />
      {points.map((point, index) => (
        <Marker
          key={index}
          position={[point.lat, point.lng]}
          icon={customIcon} // Set the custom icon for the marker
        >
          <Popup>{point.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Maps;
