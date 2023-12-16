import soundFileCompleted from '../../Assets/task_completed.mp3'
import soundFileDeleted from '../../Assets/task_deleted.mp3'
import {TodoItemUI} from "./TodoItemUI";
import "./TodoItem.css";
import React from 'react';


function ToDoItem(props) {
  const audioCompleted = new Audio(soundFileCompleted);
  const audioDeleted = new Audio(soundFileDeleted);

  const handleDelete = () => {                                                             // Función que elimina el ToDo seleccionado y reproduce un sonido de eliminado
    audioDeleted.play();
    props.onDelete();                                                                                // Ejecuta acciones de ToDo eliminado                                                              // 'onDelete' esta definido en el Context, aunque lo mandamos como props en este caso y le cambiamos el nombre, el nombre original es 'deleteToDo'
  }

  const handleComplete = () => {                                                           // Función voltea el valor del toDo.completed y reproduce un sonido de completado
    audioCompleted.play();
    props.onComplete();
  }
  return (
    <TodoItemUI
    handleComplete = {handleComplete}
    handleDelete = {handleDelete}
    props = {props}
    />
  );
}

export { ToDoItem };