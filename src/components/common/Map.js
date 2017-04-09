import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import { MAPBOX_TOKEN } from './../../utils/constants/tokens'

const Map = () => {
  const mapBoxToken = MAPBOX_TOKEN
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
