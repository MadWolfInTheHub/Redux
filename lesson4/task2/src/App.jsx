import React from "react";
import { Provider } from 'react-redux';
import Users from './counter/Users';
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
};

export default App;