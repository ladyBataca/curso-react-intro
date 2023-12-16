import React from "react";
import { IConComplete } from '../CompleteIcon';
import { IconDelete } from '../IconDelete';

function TodoItemUI({
    handleComplete,
    handleDelete,
    props,                                                                                 // Destructuramos las propiedades que necesitamos de nuestro componente
}) {
    return (                                                                               // Creamos nuestra estructura JSX
        <li className={`ToDoItem ${props.completed && "ToDoItem--completed"}`} >

            <IConComplete
                onClick={handleComplete}
                completed={props.completed}
            />
            <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}>
                {props.text}
            </p>
            <IconDelete
                onClick={handleDelete}
            />
        </li>
    );
}

export  {TodoItemUI};