// Create some sagas for FETCH_MOVIE, FETCH_SUCCEEDED, FETCH_FAILED
import {
  FETCH_MOVIE,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  ADD_MOVIE,
  UPDATE_MOVIE,
  UPDATE_SUCCEEDED,
  DELETE_MOVIE,
  DELETE_SUCCEEDED,
} from '../actions/actionType';
//Saga effects
import {put, takeLatest} from 'redux-saga/effects';
//put: dispatch action kem theo action
//takeLatest: lay action moi nhat
import {Api} from './Api';

function* fetchMovies() {
  console.log('start fetch movies');
  try {
    const receivedMovies = yield Api.getMoviesFromApi();
    yield put({type: FETCH_SUCCEEDED, receivedMovies: receivedMovies});
    //put action object
  } catch (error) {
    yield put({type: FETCH_FAILED, error});
  }
}

function* addNewMovie(action) {
  console.log('start add movie');
  try {
    const result = yield Api.insertNewMovieFromApi(action.newMovie);
    if (result === true) {
      yield put({type: FETCH_MOVIE, sort: 'asc'});
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchMovies() {
  console.log('watch fetch saga');
  yield takeLatest(FETCH_MOVIE, fetchMovies);
}

export function* watchAddMovie() {
  console.log('watch add saga');
  yield takeLatest(ADD_MOVIE, addNewMovie);
}

function* updateMovie(action) {
  console.log('start update movie');
  try {
    const result = yield Api.updateMovieFromApi(action.updateMovie);
    if (result === true) {
      yield put({type: UPDATE_SUCCEEDED, updatedMovie: action.updateMovie});
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchUpdateMovie() {
  console.log('watch update saga');
  yield takeLatest(UPDATE_MOVIE, updateMovie);
}

function* deleteMovie(action) {
  console.log('start delete movie');
  try {
    const result = yield Api.deleteMovieFromApi(action.deletedMovieId);
    if (result === true) {
      yield put({
        type: DELETE_SUCCEEDED,
        deletedMovieId: action.deletedMovieId,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchDeleteMovie() {
  console.log('watch delete saga');
  yield takeLatest(DELETE_MOVIE, deleteMovie);
}
