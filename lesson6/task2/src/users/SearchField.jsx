import React , { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';
import { getUserData } from './users.gateway';

class SearchField extends Component {
  state = {
    userName: '',
  }

  onChange = event => {
    this.setState({ userName: event.target.value });
  }

  handleUserSearch = () => {
    this.props.fetchUserData(this.state.userName)
  }

  render() {
    return (
      <div className="name-form">
        <input 
          type="text"
          className="name-form__input"
          onChange={this.onChange}
          value={this.state.userName}
          />
        <button className="name-form__btn btn"  onClick={this.handleUserSearch}>Show</button>
      </div>
    );
  };
};

SearchField.propTypes = {
  fetchUserData: propTypes.func.isRequired,

}

const maDispatch = {
  fetchUserData: usersActions.fetchUserData,
}

export default connect(null, maDispatch)(SearchField)

