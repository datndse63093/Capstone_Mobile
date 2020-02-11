//sinh ra cac actions
import {ADD_NEW_TASK, TOOGLE_ONE_TASK} from './actionsTypes';
let newTaskId = 0;

//Action: "add new task"
export const addNewTask = inputTaskName => {
  //return về 1 action
  return {
    type: ADD_NEW_TASK,
    taskId: newTaskId++,
    taskName: inputTaskName,
  };
};

//Action: "toogle 1 task to completed/ uncompleted"
export const toogleTask = taskId => {
  return {
    type: TOOGLE_ONE_TASK,
    taskId: taskId,
  };
};
