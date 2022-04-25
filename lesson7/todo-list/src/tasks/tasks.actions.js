import { tasksListSelector } from "./tasks.selectors";
import * as tasksGaateway from "./tasksGateway";

export const TASK_LIST_RECIEVED = 'TASK_LIST_RECIEVED';

export const tasksListRecived = (tasksList) => {
  const action = {
    type: TASK_LIST_RECIEVED,
    payload: {
      tasksList,
    },
  };
  return action;
};

export const  getTaskList = () => {
  const thunkAction = function (dispatch) {
    tasksGaateway.fetchTasksList()
      .then(tasksList => dispatch(tasksListRecived(tasksList)))
  }
  
  return thunkAction;
}

export const  updateTask = (taskId) => {
  const thunkAction = function (dispatch, getState) {
    const state = getState()
    const tasksList = tasksListSelector(state)
    const task = tasksList.find(task => task.id === taskId)
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    tasksGaateway
      .updateTask(taskId, updatedTask)
      .then(() => dispatch(getTaskList()))
  }
  return thunkAction;
}

export const  deleteTask = (taskId) => {
  const thunkAction = function (dispatch) {
    tasksGaateway
      .deleteTask(taskId)
      .then(() => dispatch(getTaskList()))
  }
  return thunkAction;
}

export const  createTask = (text) => {
  const thunkAction = function (dispatch) {
    const taskData = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    }
    tasksGaateway.createTask(taskData)
      .then(() => dispatch(getTaskList()))
  }
  return thunkAction;
}