import AddComponent from '../components/AddComponent';
import {addNewTask} from '../actions/index';
import {connect} from 'react-redux';

//tương ứng với 1 Component -> 1 container
//container will
// - help component dispatch action
// - convert component's state => prop
// - convert component's dispatch => prop

// - convert component's state => prop
const mapStateToProps = state => {
  return {};
};

// - convert component's dispatch => prop
const mapDispatchToProps = dispatch => {
  return {
    //onClickAđ dùng để gọi bên component
    onClickAdd: inputTaskName => {
      console.log('On Click Add');
      //onClickAdd dispatch action addNewTask
      dispatch(addNewTask(inputTaskName));
    },
  };
};

//hàm connect làm 2 nhiệm vụ
//bind 2 hàm vào component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddComponent);

//function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
