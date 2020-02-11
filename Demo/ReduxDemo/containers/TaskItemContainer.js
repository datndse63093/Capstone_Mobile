import {connect} from 'react-redux';
import {toogleTask} from '../actions/index';
import TaskItemComponent from '../components/TaskItemComponent';
import {getTasks} from '../selectors/index';

const mapStateToProps = state => {
  return {
    // tasks: !state.taskReducers ? [] : state.taskReducers,

    //sử dụng selector trong reselector
    tasks: !getTasks(state) ? [] : getTasks(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: taskId => {
      console.log('Toogle to do item');
      dispatch(toogleTask(taskId));
    },
  };
};

const TaskItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskItemComponent);
export default TaskItemContainer;

// mapStateToProps - dùng để map State của Component với State trong Store của Redux
// mapDispatchToProps - dùng để map method của Component với lời gọi action từ Store tới Actions của Redux
