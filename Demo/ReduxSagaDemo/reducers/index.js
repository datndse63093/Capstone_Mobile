import {combineReducers} from 'redux';
import counterReducers from './counterReducers';
import movieReducers from './movieReducers';

const allReducers = combineReducers({
  counterReducers,
  movieReducers,
  //you can add more reducers here, separated by , !
});
export default allReducers;
