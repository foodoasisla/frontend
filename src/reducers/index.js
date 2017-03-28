/* Libraries */
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { routerReducer } from 'react-router-redux';

/* Constants */
import INITIAL_STATE from './../state';


const indexReducer = handleActions({
  DEFAULT_ACTION: (state, action) => {
    const newState = Object.assign({}, state, action.payload);
    return newState;
  },
}, {});

const appReducer = combineReducers({
  index: indexReducer,
  routing: routerReducer,
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
