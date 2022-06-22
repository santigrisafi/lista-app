import { Modal } from 'bootstrap';
import React from 'react';
import "./ButtonTask.css";

let addTask = () =>{
  let tarea = prompt("Ingrese la tarea");
  alert(tarea);
}

const ButtonTask = () => {
  return (
    <>
        <button className='taskButton' onClick={() => addTask()}>
            +
        </button>
    </>
  )
}




export {ButtonTask};