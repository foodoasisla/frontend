import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import * as tokens from './../../utils/constants/tokens'

const Map = () => {
  const mapBoxToken = tokens.mapBoxToken
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
