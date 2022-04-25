import React, { Component } from "react";
import propTypes from 'prop-types';
import Task from "./Task";

class TasksList extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.tasks.map( task => (
          <Task 
            key={task.id} 
            {...task} 
            onChange={this.props.handleTaskStatusChange}
            onDelete={this.props.handleTaskDelete}
          />
        ))}
      </ul>
    );
  };
};


export default TasksList;