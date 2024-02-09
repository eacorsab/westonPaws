import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customMarker = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = () => {
  const [position, setPosition] = useState([26.0991078, -80.3779147]);
  const googleMapsLink = 'https://www.google.com/maps/place/For+Paws+Only+Inc/@26.0991078,-80.3779147,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88d9a0a793e3c567:0x1ef773320154304';

  return (
    <MapContainer center={position} zoom={15} style={{ height: '700px', width: '100%' }}> 
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customMarker}>
        <Popup>
          <div>
            <p>For Paws Only Inc</p>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
              Ver en Google Maps
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
