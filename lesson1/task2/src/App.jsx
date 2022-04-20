import React, { Component } from "react";
import Header from "./header";
import { UserContext } from './context';

class App extends Component{
  state = {
    userData: {
      name: 'Nicola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001'
    },
  };
  
  render() {
    return (
      <div className="page">
      <UserContext.Provider value={this.state.userData}>
        <Header />
      </UserContext.Provider>
      </div>
    );
  }
};

export default App;