import {INCREMENT, DECREMENT} from '../actions/actionType';

const counterReducers = (times = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      var newTimes = times + action.step;
      return newTimes;
    case DECREMENT:
      var newTimes = times - action.step;
      return newTimes;

    default:
      return times; //state does not change
  }
};

export default counterReducers;
