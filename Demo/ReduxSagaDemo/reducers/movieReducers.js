import {FETCH_FAILED, FETCH_SUCCEEDED} from '../actions/actionType';

const movieReducers = (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      console.log('fetch success');
      return action.receivedMovies;
    case FETCH_FAILED:
      console.log('fetch fail, error: ' + action.error);
      return [];
    default:
      return movies; //state does not change
  }
};
export default movieReducers;
