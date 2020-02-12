/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
//Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';
import MovieContainer from './containers/MovieContainer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

//middleware nam giua action va reducer

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
  <Provider store={store}>
    {/* <CounterContainer /> */}
    <MovieContainer />
  </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);
