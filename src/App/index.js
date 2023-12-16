import { AppUI } from './AppUI';'./App.css';
import React from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage';

// const defaultToDos = [
//   { text: 'Hacer cosas', competed: true },
//   { text: 'Hacer cosas1', competed: false },
//   { text: 'Hacer cosas2', competed: false },
//   { text: 'Hacer cosas3', competed: true },
// ];
function App() {
  const [toDos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

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
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = toDos.filter(
      (todo) => todo.text !== text
    );
    saveTodos(newTodos);
  }

  return (
    <AppUI
      toDoTotal = {toDoTotal}
      toDoCompleted = {toDoCompleted}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo} 
      deleteTodo   = {deleteTodo}
     />
  );
}

export default App;
