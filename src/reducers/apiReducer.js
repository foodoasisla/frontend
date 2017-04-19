import INITIAL_STATE from '../state';

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_STARTED':
      return true;
    case 'FETCH_FINISHED':
      return false;
    default:
      return state;
  }
};

export default apiReducer;
