import { TASK_LIST_RECIEVED } from "./tasks.actions";

const initialState = {
  tasksList: [],
};

const tasksReducer = (state = initialState, action) => {
  switch(action.type) {
    case TASK_LIST_RECIEVED: 
    return{
      ...action,
      tasksList: action.payload.tasksList,
    }
    default:
      return state;
  };
};

export default tasksReducer;