import React from 'react';
import { connect } from 'react-redux';
import { availabledOptionsSelector } from './options.selectors';
import Options from './Options';
import { toogleOption } from './options.actions';



const mapState = state => {
  return {
    options: availabledOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toogleOption,
}


export default connect(mapState, mapDispatch)(Options);