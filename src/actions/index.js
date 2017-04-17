/* Libraries */
import { createAction } from 'redux-actions';


export const defaultAction = createAction(
  'DEFAULT_ACTION',
  () => (new Promise((resolve) => {
    resolve({});
  })),
);

export const clearState = createAction(
  'CLEAR_STATE',
  () => (new Promise((resolve) => {
    resolve({});
  })),
);

export const searchQueryChanged = (text) => {
  console.log('text in action', text)
  return {
    type: 'SEARCH_QUERY_CHANGED',
    payload: text
  };
};
