//Saga effect
import {all, call, fork} from 'redux-saga/effects';
import {watchIncrement, watchDecrement} from './counterSagas';
import {watchFetchMovies, watchAddMovie} from './movieSagas';

export default function* rootSaga() {
  //yield: chay tuan tu
  // yield all([watchIncrement(), watchDecrement()]);
  yield [fork(watchFetchMovies), fork(watchAddMovie)];
}
