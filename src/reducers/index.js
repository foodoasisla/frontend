/* Libraries */
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { routerReducer } from 'react-router-redux';

/* Constants */
import INITIAL_STATE from './../state';
import searchReducer from './searchReducer';
import apiReducer from './apiReducer';


const appReducer = combineReducers({
  routing: routerReducer,
  searchQuery: searchReducer,
  isFetching: apiReducer,
});

const rootReducer = (state, action) => {
  let newState = state;

  if (action.type === 'CLEAR_STATE') {
    const { routing } = state;

    newState = Object.assign({},
                             { routing },
                             INITIAL_STATE);
  }

  return appReducer(newState, action);
};

export default rootReducer;
