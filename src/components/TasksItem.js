import React from "react";
import "./TasksItem.css";

const TasksItem = ({ task, completed }) => {

  let removeTask = () => {
    return completed = false;
  };

  let completeTask = () => {
    return completed = true;
  };

  return (
    <li className="tasksItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={completeTask}
      >
        √
      </span>
      <p className={`tasksItem-p ${completed && "tasksItem-p--completed"}`}>
        {task}
      </p>
      <span className="Icon Icon-delete" onClick={removeTask}>
        X
      </span>
    </li>
  );
};

export { TasksItem };
