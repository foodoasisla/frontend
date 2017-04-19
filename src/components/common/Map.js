import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import { MAPBOX_TOKEN } from './../../utils/constants/tokens'

const Map = () => {
  return (
    <ReactMapboxGl
      style="mapbox://styles/mapbox/streets-v8"
      accessToken={MAPBOX_TOKEN}
      center={[-118.243685, 34.052234]}
      containerStyle={{ height: '80vh', width: '100vw' }}
    >
    </ReactMapboxGl>
  );
};

export default Map;
