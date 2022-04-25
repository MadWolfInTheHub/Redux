import React from "react";
import classNames from 'classnames';
import propTypes from "prop-types";

const Task = ({ id, done, text, onChange, onDelete }) => {
  return (
    <li className={classNames('list-item', {'list-item_done' : done })}>
    <input type="checkbox" 
    className="list-item__checkbox" 
    onChange={() => onChange(id)}
    defaultChecked={done}  
    />
    <span className="list-item__text">{text}</span>
    <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
  </li>
  );
};

export default Task;

Task.propTypes = {
  done: propTypes.bool,
  id: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
  text: propTypes.string
}