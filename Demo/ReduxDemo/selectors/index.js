import {createSelector} from 'reselect';

const tasksSelector = state => state.taskReducers;

export const getTasks = createSelector(
  tasksSelector,
  taskReducers => {
    return taskReducers;
  },
);
