import INITIAL_STATE from '../state';

export default (state = INITIAL_STATE, action) => {
  console.log('state in reducer', state)
  switch (action.type) {
    case 'SEARCH_QUERY_CHANGED':
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};
