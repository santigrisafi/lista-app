import React, { useState } from "react";
import { TasksCounter } from "../TasksCounter/TasksCounter";
import { TasksList } from "../TasksList/TasksList";
import { TasksSearch } from "../TasksSearch/TasksSearch";
import { ButtonTask } from "../ButtonTask/ButtonTask";
import { TasksItem } from "../TasksItem/TasksItem";
import { defaultTasks } from "../../data/tasksList";

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
    return inputSearch.length <= 0 ? tasks : filterTasks();
  };

  let filterTasks = () => {
    return tasks.filter((task) =>
      task.description
        .toLocaleLowerCase()
        .includes(inputSearch.toLocaleLowerCase())
    );
  };

  tasks = filterSearchList();

  let taskCompleted = (description) => {
    let taskIndex = tasks.findIndex((task) => task.description === description);
    let newToDo = [...tasks];
    tasks[taskIndex].completed = true;
    return setTasks(newToDo);
  };

  let taskErased = (description) => {
    let taskIndex = tasks.findIndex((task) => task.description === description);
    let newToDo = [...tasks];
    newToDo.splice([taskIndex, 1]);
    return setTasks(newToDo);
  };

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
              taskCompleted={() => taskCompleted(task.description)}
              taskErased={() => taskErased(task.description)}
            />
          );
        })}
      </TasksList>
      <ButtonTask />
    </>
  );
};

export { App };
