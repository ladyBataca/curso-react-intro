import { ToDoCounter } from './Components/ToDoCounter/TodoCounter';
import { Filter } from './Components/Filter/Filter';
import { ToDoList } from './Components/ToDoList/ToDoList';
import { ToDoItem } from './Components/ToDoItem/ToDoItem';
import { NewItemButton } from './Components/ItemButton/NewItemButton';
import React from 'react'

const defaultToDos = [
  {text: 'Hacer cosas', competed: true},
  {text: 'Hacer cosas1', competed: false},
  {text: 'Hacer cosas2', competed: false},
  {text: 'Hacer cosas3', competed: false},
];
function App() {
  return (
    <React.Fragment>
       <NewItemButton/>
      <h1>To-Do's Goals</h1>
      <ToDoCounter total={15} completed={5}/>
      <Filter/>
      <ToDoList>
        {defaultToDos.map(item =>(
        <ToDoItem 
        key={item.text} 
        text={item.text} 
        completed = {item.competed}
        />
        ))}
      </ToDoList>
    </React.Fragment>
  );
}

export default App;
