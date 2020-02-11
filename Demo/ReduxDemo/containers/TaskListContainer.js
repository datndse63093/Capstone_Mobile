import {connect} from 'react-redux';
import TaskListComponent from '../components/TaskListComponent';
import {getTasks} from '../selectors/index';

//Cứ mỗi khi cây state thay đổi thì mapStateToProps sẽ được gọi
const mapStateToProps = state => {
  // alert(`state send to task list = ${JSON.stringify(state)}`);
  return {
    //mảng các task được thêm vào    //tasks này chính là prop
    // tasks: !state.taskReducers ? [] : state.taskReducers,

    //sử dụng selector
    tasks: !getTasks(state) ? [] : getTasks(state),
  };
};

const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;
