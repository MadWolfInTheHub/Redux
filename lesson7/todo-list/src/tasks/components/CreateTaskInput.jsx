import React, {Component} from 'react';
import propTypes from "prop-types";

class CreateTaskInput extends Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  handleTaskCreat = () => {
    this.setState({
      value: '',
    })
    this.props.onCreate(this.state.value);
  }

  render() {
    return (
      <div className='create-task'>
        <input 
          type='text' 
          value={this.state.value}
          onChange={this.handleChange}
          className='create-task__input'/>
        <button 
          className='btn create-task__btn'
          onClick={this.handleTaskCreat}
          >Create</button>
      </div>
    );
  };
};

CreateTaskInput.propTypes = {
  onCreate: propTypes.func,
}

export default CreateTaskInput;

/* 
1. take text fron inpu 
2. Creat task with this text 
3. Add created tak to the list */