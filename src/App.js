import { ToDoCounter } from './Components/ToDoCounter/TodoCounter';
import { Filter } from './Components/Filter/Filter';
import { ToDoList } from './Components/ToDoList/ToDoList';
import { ToDoItem } from './Components/ToDoItem/ToDoItem';
import { NewItemButton } from './Components/ItemButton/NewItemButton';
import React from 'react'

const defaultToDos = [
  { text: 'Hacer cosas', competed: true },
  { text: 'Hacer cosas1', competed: false },
  { text: 'Hacer cosas2', competed: false },
  { text: 'Hacer cosas3', competed: true },
];
function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [toDos, setToDos] = React.useState(
    defaultToDos);

  const toDoCompleted = toDos.filter(
    todo => !!todo.competed).length;
  const toDoTotal = toDos.length;
  const searchedTodos = toDos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );
  const completeTodo = (text) => {
    const newTodos = [...toDos];
    const toDoIndex = newTodos.findIndex(
      (todo) => todo.text === text);
    newTodos[toDoIndex].competed = !newTodos[toDoIndex].competed;
    setToDos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = toDos.filter(
      (todo) => todo.text !== text
    );
    setToDos(newTodos);
  }

  return (
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
  );
}

export default App;
