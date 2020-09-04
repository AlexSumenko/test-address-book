import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { GOOGLE_MAP_CONFIG } from '../../utils/constants';

const mapStyles = {
  width: '400px',
  height: '400px',
};

const MapContainer = props => {
  return (
    <Map
      google={props.google}
      zoom={18}
      style={mapStyles}
      initialCenter={{ lat: 59.434, lng: 24.759 }}
    >
      <Marker position={{ lat: 59.434, lng: 24.759 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_CONFIG.apiKey,
})(MapContainer);
