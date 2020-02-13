import {
  INCREMENT,
  DECREMENT,
  ADD_MOVIE,
  FETCH_MOVIE,
  FETCH_FAILED,
  FETCH_SUCCEEDED,
} from './actionType';

//Action: "increase counter "
export const increaseAction = step => {
  return {
    type: INCREMENT,
    step: step,
  };
};
//Action: "decrease counter "
export const decreaseAction = step => {
  return {
    type: DECREMENT,
    step: step,
  };
};

//action sent by user
export const fetchMovieAction = () => {
  return {
    type: FETCH_MOVIE,
  };
};

//action sent by user
export const addMovieAction = newMovie => {
  return {
    type: ADD_MOVIE,
    newMovie: newMovie,
  };
};

//action sent by redux-saga
export const fetchSuccessAction = receivedMovies => {
  return {
    type: FETCH_SUCCEEDED,
    receivedMovies,
  };
};

//action sent by redux-saga
export const fetchFailedAction = error => {
  return {
    type: FETCH_FAILED,
    error,
  };
};
