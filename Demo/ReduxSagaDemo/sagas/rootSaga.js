//Saga effect
import {all, call, fork} from 'redux-saga/effects';
import {watchIncrement, watchDecrement} from './counterSagas';
import {
  watchFetchMovies,
  watchAddMovie,
  watchUpdateMovie,
  watchDeleteMovie,
} from './movieSagas';

//fork for non-blocking call
export default function* rootSaga() {
  console.log('rootSaga start');
  //yield: chay tuan tu
  // yield all([watchIncrement(), watchDecrement()]);
  yield fork(watchFetchMovies);
  yield fork(watchAddMovie);
  yield fork(watchUpdateMovie);
  yield fork(watchDeleteMovie);
}
