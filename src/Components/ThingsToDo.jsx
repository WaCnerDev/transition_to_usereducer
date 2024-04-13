import React from 'react'
import "../Styles/ThingsToDo.css";
import { TrashFill } from 'react-bootstrap-icons';

function ThingsToDo(props) {

  // Función para manejar la eliminación de una tarea
  const handleDelete = (taskToDelete) => {
    props.deleteItem(taskToDelete);
  };

  return (
    <div className='table_container'>
        <table className='task_list'>
        <thead>
          <tr>
            <th>Task</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.newItem.map(task => (
            <tr key={task.name}>
              <td>
              {task.name}
              </td>
              <td>
              <button className='btn_delete' onClick={() => handleDelete(task.name)}><TrashFill/></button>
              </td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ThingsToDo
