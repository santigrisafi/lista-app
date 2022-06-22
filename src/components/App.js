import React, { useState } from "react";
import { TasksCounter } from "./TasksCounter";
import { TasksList } from "./TasksList";
import { TasksSearch } from "./TasksSearch";
import { ButtonTask } from "./ButtonTask";
import { TasksItem } from "./TasksItem";

let defaultTasks = [
  {
    description: "To Work",
    completed: false,
  },
  {
    description: "To Play",
    completed: false,
  },
];

let App = () => {

  let [tasks, setTasks] = useState(defaultTasks);
  let [inputSearch, setInputSearch] = useState("");

  let countTasksCompleted = () => {
    return tasks.filter((task) => !!task.completed).length;
  };

  let countTaskTotal = () => {
    return parseInt(tasks.length);
  };

  let filterSearchList = () => {
    return (inputSearch.length <=0) ? tasks : filterTasks();
  };

  let filterTasks = () =>{
    return tasks.filter((task) => task.description.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()));
  }

  tasks = filterSearchList();

  return (
    <>
      <TasksCounter
        completedTasks={countTasksCompleted()}
        totalTasks={countTaskTotal()}
      />
      <TasksSearch setInputSearch={setInputSearch} inputSearch={inputSearch} />
      <TasksList>
        {tasks.map((task) => {
          return (
            <TasksItem
              key={task.description}
              task={task.description}
              completed={task.completed}
            />
          );
        })}
      </TasksList>
      <ButtonTask />
    </>
  );
};

export { App };
