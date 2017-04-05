const INITIAL_STATE = {
	locations: [],
	currentLocation: [],
	searchQuery: '',
	filters: [
    isOpen: false,
    foodPantries: false,
    communityGardens: false,
    farmersMarkets: false,
    superMarkets: false
  ],
	pageOffset: 0,
	isFetching: false,
	error: '',
	viewType: 'map'
};

export default INITIAL_STATE;
