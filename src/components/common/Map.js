import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = () => {
  const mapBoxToken = 'pk.eyJ1Ijoic2pheW1vb24xNSIsImEiOiJjajE2ejhjMXgwM3YxMndtejdpbnlkbWp0In0.HAeIBMg25HSE8zHyNHMccg';
  return (
    <div>
      <ReactMapboxGl
        style="mapbox://styles/mapbox/streets-v8"
        accessToken={mapBoxToken}
        center={[-118.243685, 34.052234]}
        containerStyle={{ height: '80vh', width: '80vw' }}
      >
      </ReactMapboxGl>
    </div>
  );
};

export default Map;
