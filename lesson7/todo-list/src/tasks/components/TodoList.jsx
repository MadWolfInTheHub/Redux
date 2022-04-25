import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import TasksList from './TasksList'
import CreateTaskInput from "./CreateTaskInput";
import * as tasksActions from "../tasks.actions";
import { sortedTasksListSelector } from "../tasks.selectors";

class TodoList extends Component {

  componentDidMount() {
    this.props.getTaskList();
  };

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.props.createTask}/>
          <TasksList 
          tasks={this.props.tasks}
          handleTaskStatusChange={this.props.updateTask}
          handleTaskDelete={this.props.deleteTask}
          />
        </main>
      </>
    );
  }
};

TodoList.propTypes = {
  tasks: propTypes.arrayOf(propTypes.shape()),
  getTaskList: propTypes.func.isRequired,
  updateTask: propTypes.func.isRequired,
  deleteTask: propTypes.func.isRequired,
  createTask: propTypes.func.isRequired,
}

const mapDispatch = {
  getTaskList: tasksActions.getTaskList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state),
  };
}

export default connect(mapState, mapDispatch)(TodoList);