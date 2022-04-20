import React, { Component } from "react";
import Header from "./header";
import { userData, UserContext } from './context';

class App extends Component{
  state ={
    userData,
  }
  
  render() {
    return (
      <div className="page">
        <Header />
      </div>
    );
  }
};

export default App;