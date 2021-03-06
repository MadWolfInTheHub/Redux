import { createSelector } from 'reselect'

export const tasksListSelector = state => Object.values(state.tasks.tasksList);

export const sortedTasksListSelector = createSelector(
  [tasksListSelector],
  (taskList) => {
    return taskList.slice().sort((a, b) => a.done - b.done)
  }
);