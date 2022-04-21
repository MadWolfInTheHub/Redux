import { createStore } from 'redux';
const initialState = {
  usersList: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': 
      return {
      ...state,
      userList: state.userList.concat(action.newUser)
      
    };
    case 'DELETE_USER': 
    return {
      ...state,
      userList: state.userList.slice().filter(user => user.id !== action.id)

    };

    default:
      return state;
  };
};

const store = createStore(userReducer)

export default store;