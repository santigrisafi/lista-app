import {React, useState} from "react";
import "./TasksSearch.css";

const TasksSearch = ({inputSearch, setInputSearch}) => {

  let getValueTerm = (event) =>{
    return setInputSearch(event.target.value);
  }

  return (
    <>
    <form autoComplete="off">
      <label htmlFor="inputSearch">Search Task</label>
      <input
        className="inputSearch"
        type="text"
        placeholder="Input your task"
        id="inputSearch"
        name="inputSearch"
        onChange={getValueTerm}
       />
    </form>
    </>
  );
};

export { TasksSearch };
