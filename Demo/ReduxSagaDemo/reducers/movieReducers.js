import {
  ADD_MOVIE,
  FETCH_FAILED,
  FETCH_SUCCEEDED,
  FETCH_MOVIE,
} from '../actions/actionType';

const movieReducers = (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      console.log('fetch success');
      return action.receivedMovies;
    case FETCH_FAILED:
      console.log('fetch fail, error: ' + action.error);
      return [];
    case ADD_MOVIE:
      console.log('add success');
      return [...movies, action.newMovie];
    default:
      return movies; //state does not change
  }
};
export default movieReducers;
