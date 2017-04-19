import React from 'react';
import Map from '../common/Map';
import SearchBar from '../common/SearchBar';
import SearchFilter from '../common/SearchFilter';


const MapPage = () => {
  return (
    <div>
      <SearchBar />
      <SearchFilter />
      <Map />
    </div>
  );
};

export default MapPage;
