import React, { Component } from 'react';
import { UserContext } from './context';

class UserMenu extends Component {
  render() {
    return (
      <div className="menu">
        <div className='menu__greeting'>
          <span>Hello, {this.context.name}</span>
          <img
            alt='User Avatar'
            src={this.context.avatar_url}
            className='menu__avatar'
          />
        </div>
      </div>
    );
  };
};

UserMenu.contextType = UserContext;

export default UserMenu;