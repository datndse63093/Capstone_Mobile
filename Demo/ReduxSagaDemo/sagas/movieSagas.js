// Create some sagas for FETCH_MOVIE, FETCH_SUCCEEDED, FETCH_FAILED
import {
  FETCH_MOVIE,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  ADD_MOVIE,
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
