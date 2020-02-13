import {
  INCREMENT,
  DECREMENT,
  ADD_MOVIE,
  FETCH_MOVIE,
  FETCH_FAILED,
  FETCH_SUCCEEDED,
  UPDATE_MOVIE,
  UPDATE_SUCCEEDED,
  DELETE_MOVIE,
  DELETE_SUCCEEDED,
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
export const fetchMovieAction = sort => {
  return {
    type: FETCH_MOVIE,
    sort,
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

export const updateItemAction = updateMovie => {
  return {
    type: UPDATE_MOVIE,
    updateMovie,
  };
};

export const updateItemSuccessAction = updatedMovie => {
  return {
    type: UPDATE_SUCCEEDED,
    updatedMovie,
  };
};

//Delete existing movie
export const deleteItemAction = deletedMovieId => {
  return {
    type: DELETE_MOVIE,
    deletedMovieId,
  };
};
//Action sent by Redux-saga
export const deleteItemSuccessAction = deletedMovieId => {
  return {
    type: DELETE_SUCCEEDED,
    deletedMovieId,
  };
};
