import React from 'react';
import "./TasksCounter.css";

const TasksCounter = ({completedTasks,totalTasks}) => {
  return (
    <>
        <h3 className='tasksCounter'>Tasks completed {completedTasks} of {totalTasks}</h3>
    </>
  )
}

export {TasksCounter};