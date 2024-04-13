import React from "react";
import { useState } from "react";
import '../Styles/Tasks.css'

function Tasks(props) {
  //inicializa el useState
  const [newTask, setNewTask] = useState()

  //funcion que recoge el dato del form y lo envia a App
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTask);
  };

  return (
    <div className="container_form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new Task"
          id="input_text"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button>Save New Task</button>
      </form>
    </div>
  );
}

export default Tasks;
