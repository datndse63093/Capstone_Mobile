//Saga effect
import {delay} from 'redux-saga';
import {all, call} from 'redux-saga/effects';
import {watchIncrement, watchDecrement} from './counterSagas';
import {watchFetchMovies} from './movieSagas';

export default function* rootSaga() {
  //yield: chay tuan tu
  // yield all([watchIncrement(), watchDecrement()]);
  yield call(watchFetchMovies);
}
