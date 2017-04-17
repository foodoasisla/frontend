import INITIAL_STATE from '../state';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_QUERY_CHANGED':
      return { ...state, searchQuery: action.payload };
    case 'FETCH_STARTED':
      return { ...state, isFetching: true };
    case 'FETCH_FINISHED':
      return { ...state, searchQuery: '', isFetching: false };
    default:
      return state;
  }
};
