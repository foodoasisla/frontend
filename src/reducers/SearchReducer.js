import INITIAL_STATE from '../state';

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_QUERY_CHANGED':
      return action.payload.searchQuery;
    default:
      return state;
  }
};

export default searchReducer;
