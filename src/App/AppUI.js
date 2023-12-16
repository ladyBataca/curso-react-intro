import { ToDoCounter } from '../Components/ToDoCounter';
import { Filter } from '../Components/Filter';
import { ToDoList } from '../Components/ToDoList';
import { ToDoItem } from '../Components/ToDoItem';
import { NewItemButton } from '../Components/ItemButton';
import React from 'react';

function AppUI ({
toDoTotal, 
toDoCompleted,
searchValue,
setSearchValue,
searchedTodos, 
completeTodo,
deleteTodo,
}){
return(
    <React.Fragment>
      <NewItemButton />
      <h1>To-Do's Goals</h1>
      <ToDoCounter total={toDoTotal} completed={toDoCompleted} />
      <Filter
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList
      >
        {searchedTodos.map(item => (
          <ToDoItem
            key={item.text}
            text={item.text}
            completed={item.competed}
            onComplete={() => { completeTodo(item.text) }}
            onDelete={() => { deleteTodo(item.text) }}
          />
        ))}
      </ToDoList>
    </React.Fragment>
)
}

export {AppUI};