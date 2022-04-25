import React, { Component } from "react";
import { Provider } from 'react-redux';
import TodoList from "./tasks/components/TodoList";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  };
};
export default App;