import INITIAL_STATE from '../state';

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_FILTER_CHANGED':
      return { ...state, [ action.payload.prop ]: action.payload.value };
    default:
      return state;
  }
};

export default filterReducer;
