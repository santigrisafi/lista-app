import React from "react";
import "./TasksItem.css";

const TasksItem = ({ task, completed, taskCompleted, taskErased }) => {

  return (
    <li className="tasksItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={taskCompleted}
      >
        √
      </span>
      <p className={`tasksItem-p ${completed && "tasksItem-p--completed"}`}>
        {task}
      </p>
      <span className="Icon Icon-delete" onClick={taskErased}>
        X
      </span>
    </li>
  );
};

export { TasksItem };
