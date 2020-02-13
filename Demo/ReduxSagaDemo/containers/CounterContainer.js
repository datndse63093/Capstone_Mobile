import {connect} from 'react-redux';
import CounterComponent from '../components/CounterComponent';
import {increaseAction, decreaseAction} from '../actions/index';
const mapStateToProps = state => {
  console.log('mapStateToProps');
  return {
    times: state.counterReducers ? state.counterReducers : 0,
  };
};

const mapDispatchToProps = dispatch => {
  console.log('mapStateToProps');
  return {
    onIncrement: step => {
      dispatch(increaseAction(step));
    },
    onDecrement: step => {
      dispatch(decreaseAction(step));
    },
  };
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterComponent);
export default CounterContainer;
