import React, { useState } from 'react';
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: "10px"
};

const center = {
  lat: -25.4225085, 
  lng: -49.1928973
};

const mapStyles = [
  {
    featureType: 'poi',
    stylers: [{ visibility: 'off' }]
  }
];

const GoogleMapComponent: React.FC = () => {
  const [showMarker, setShowMarker] = useState(false);

  const handleTilesLoaded = () => {
    setShowMarker(true);
  };

  return (
    <LoadScriptNext googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_GEOLOCATION_API_KEY!}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          styles={mapStyles}
          onTilesLoaded={handleTilesLoaded}
        >
          {showMarker && <Marker position={center}></Marker>}
        </GoogleMap>
    </LoadScriptNext>
  );
}

export default GoogleMapComponent;
