import soundFileCompleted from '../../Assets/task_completed.mp3'
import soundFileDeleted from '../../Assets/task_deleted.mp3'
import { HiCheck } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import "./TodoItem.css";
import React from 'react';


function ToDoItem(props) {
  const audioCompleted = new Audio(soundFileCompleted);
  const audioDeleted = new Audio(soundFileDeleted);

  function handleComplete() {                                                           // Función voltea el valor del toDo.completed y reproduce un sonido de completado
    audioCompleted.play();
    props.onComplete();
  }

  function handleDelete() {                                                             // Función que elimina el ToDo seleccionado y reproduce un sonido de eliminado
    audioDeleted.play();
    props.onDelete();                                                                   // 'onDelete' esta definido en el Context, aunque lo mandamos como props en este caso y le cambiamos el nombre, el nombre original es 'deleteToDo'
  }
  
  return(                                                                               // Creamos nuestra estructura JSX
    <li className={`ToDoItem ${props.completed && "ToDoItem--completed"}`} >
      <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={handleComplete}                                                        // Ejecuta acciones de ToDo completado
      >
        <HiCheck/>
      </span>

      <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}>
        {props.text}
      </p>
      
      <span 
        className='Icon Icon-delete'
        onClick={handleDelete}                                                          // Ejecuta funciones para eliminar el ToDo, actualizar el LocalStorage y renderizar Components
      >
        <HiOutlineTrash/>
      </span>
    </li>
  );
}

  export {ToDoItem};