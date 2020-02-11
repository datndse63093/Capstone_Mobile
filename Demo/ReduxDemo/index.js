/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
import TaskManagerComponent from './components/TaskManagerComponent';

import DemoNotification from './App';

//tạo ra một store, store này bao phủ toàn bộ project, store quản lí các reducers và các state
// đầu vào của store là các reducers
let store = createStore(allReducers);
const App = () => {
  return (
    //store là 1 properties của Provider
    <Provider store={store}>
      <TaskManagerComponent />
    </Provider>
  );
};

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => DemoNotification);

// Redux: 1 framework cho phép ta quản lí state ứng dụng javascipt
// npm install redux
// npm install react-redux
// - action dưới dạng 1 object, bắt buộc phải có type
// - action được chuyển đi đến reducer : convert state cũ thành state mới -> dispatch
// - store quản lý tất cả các reducer
// - provider chứa store
// - component là các phần tử giao diện
// - container bao ngoài component, cho phép giao tiếp giữa các action bên component với action của reducers