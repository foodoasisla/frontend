import INITIAL_STATE from '../state';

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_STARTED':
      console.log('fetch_started');
      return true;
    case 'FETCH_FINISHED':
      console.log('fetch_finished');
      return false;
    default:
      return state;
  }
};

export default apiReducer;
