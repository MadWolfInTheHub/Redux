import React, { Component } from "react";
import UserMenu from "./UserMenu";
import { UserContext } from './context';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <UserMenu />
      </div>
    );
  };
};

Header.contextType = UserContext;

export default Header;