//Saga effect
import {all, call, fork} from 'redux-saga/effects';
import {watchIncrement, watchDecrement} from './counterSagas';
import {watchFetchMovies, watchAddMovie} from './movieSagas';

//fork for non-blocking call
export default function* rootSaga() {
  //yield: chay tuan tu
  // yield all([watchIncrement(), watchDecrement()]);
  console.log('rootSaga start');
  // yield [fork(watchFetchMovies), fork(watchAddMovie)];
  // yield all([watchFetchMovies(), watchAddMovie()]);
  yield fork(watchFetchMovies);
  yield fork(watchAddMovie);
}
