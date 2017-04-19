/* Libraries */
import { createAction } from 'redux-actions';


export const updateSearchInput = createAction(
  'SEARCH_QUERY_CHANGED',
  searchQuery => (new Promise((resolve) => {
    resolve({ searchQuery });
  })),
);

export const startFetch = createAction(
  'FETCH_STARTED',
  () => (new Promise((resolve) => {
    resolve({ isFetching: true });
  })),
);

export const endFetch = createAction(
  'FETCH_FINISHED',
  () => (new Promise((resolve) => {
    resolve({ isFetching: false});
  })),
);

export const search = () => (dispatch, getState) => (
  dispatch(startFetch())
  .then(() => {
    console.log("SEARCHING FOR: " + getState().searchQuery);
    return Promise.resolve();
  })
  .then(dispatch(endFetch()))
);
