import React, { Component } from "react";
import ThemedButton from "./ThemedButton";
import { themes, ThemeContext } from "./themes-contex";

class App extends Component{
  state = {
    theme:themes.dark,
  };

  togleTheme = () => {
    const newTheme = 
    this.state.theme === themes.dark ? themes.light : themes.dark;

    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
      <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.togleTheme}>Dynamic Theme</ThemedButton>
      </ThemeContext.Provider>
      <ThemedButton onClick={this.togleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
};

export default App;