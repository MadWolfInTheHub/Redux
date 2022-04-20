import React, { Component } from "react";
import { ThemeContext } from "./themes-contex";

class ThemedButton extends Component{
  render() {
    return (
      <button {...this.props} style={{
        backgroundColor: this.context.background,
        color: this.context.fontColor,
      }} className="btn"/>
    );
  };
};

ThemedButton.contextType = ThemeContext;

export default ThemedButton; 