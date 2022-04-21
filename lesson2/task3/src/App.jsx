import React, { Component } from "react";
import store from "./users.reducer";
import { addUser, deleteUser } from "./users.actions";

class App extends Component{

  render() {
    console.log(store.dispatch(addUser({id: 23, name: 'Tom'})))
    console.log(store.dispatch(addUser({id: 46, name: 'Jim'})))
    console.log(store.getState())
    console.log(store.dispatch(deleteUser(46)))
    console.log(store.getState())
    return (
      <div>
      Redux test
      </div>
    );
  }
};

export default App;