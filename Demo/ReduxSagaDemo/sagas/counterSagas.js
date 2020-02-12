import {INCREMENT, DECREMENT} from '../actions/actionType';
import {delay} from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';
//takeEvery: watch an action

function* increment() {
  console.log('This is increment saga');
}

export function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}

function* decrement() {
  console.log('This is decrement saga');
}

export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement);
}
