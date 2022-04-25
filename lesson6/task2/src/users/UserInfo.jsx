import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { isFetchingSelector, userDataselector } from './users.selectors';
import Spinner from './Spinner';

const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <Spinner />
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="user">
        <img 
          alt="User Avatar"
          src={userData.avatar_url}
          className="user__avatar"/>
        <div className="user__info">
            <span className="user__name">{userData.name}</span>
            <span className="user__location">{userData.location}</span>
        </div>
    </div>
  );
};

UserInfo.propTypes = {
  isFetching: propTypes.bool.isRequired,
  userData: propTypes.shape(),
}

UserInfo.defaultValue = {
  userData: null,
}

const mapState = state => {
  return {
    isFetching: isFetchingSelector(state),
    userData: userDataselector(state),
  };
};

export default connect(mapState)(UserInfo);