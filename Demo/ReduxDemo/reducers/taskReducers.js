import {ADD_NEW_TASK, TOOGLE_ONE_TASK} from '../actions/actionsTypes';

//sau khi thực hiện hàm nà, sẽ có 2 state, state cũ và state mới
const taskReducers = (tasks = [], action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return [
        //The '...' is called Spread syntax.
        //The spread syntax allows an expression to be expanded in places
        //where multiple arguments (for function calls) or multiple elements (for array literals)
        //or multiple variables (for destructuring assignment) are expected.

        //   tasks.push(action) -> wrong vì không đúng pure function
        //không thể thay đổi state
        //tạo ra state mới từ state cũ, ở vùng nhớ khác
        ...tasks,
        //thêm một object mới vào
        {
          taskId: action.taskId,
          taskName: action.taskName,
          completed: false,
        },
      ];
    case TOOGLE_ONE_TASK:
      //duyệt mảng
      return tasks.map(task =>
        task.taskId === action.taskId
          ? {...task, completed: !task.completed}
          : task,
      );
    default:
      return tasks; //state doesn't change
  }
};

export default taskReducers;
