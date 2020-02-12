// Create some sagas for FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED
import {
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from '../actions/actionType';
//Saga effects
import {put, takeLatest} from 'redux-saga/effects';
//put: dispatch action kem theo action
//takeLatest: lay action moi nhat
import {Api} from './Api';

function* fetchMovies() {
  try {
    const receivedMovies = yield Api.getMoviesFromApi();
    yield put({type: FETCH_SUCCEEDED, receivedMovies: receivedMovies});
    //put action object
  } catch (error) {
    yield put({type: FETCH_FAILED, error});
  }
}

export function* watchFetchMovies() {
  yield takeLatest(fetchMovies, fetchMovies);
}
