//Root reducers
import {combineReducers} from 'redux';
import taskReducers from './taskReducers';

//gộp tất cả các reducer lại
const allReducers = combineReducers({
  taskReducers,
});

export default allReducers;
