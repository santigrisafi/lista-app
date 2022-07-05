import React from "react";
import "./TasksList.css";

const TasksList = (props) => {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
};

export { TasksList };
