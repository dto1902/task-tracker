import React, {useState } from "react";
import { ToDoCounter } from "./To-Do-Counter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { TodoItems } from "./TodoItems";
import { CreateToDoButton } from "./CreateToDoButton";
import './App.css'

const defaultItems = [
  { text: 'tarea 1 Estudiar', completed: false },
  { text: 'tarea 2 hacer lista de Trabajo', completed: true },
  { text: 'tarea 3 Ejecutar trabajo', completed: false },
  { text: 'tarea 4 Ejecutar trabajo', completed: true },
]

function App() {

  const [items, setItems] = useState(defaultItems);
  const [searchValue, setSearchValue] = useState('');

  const completedItems = items.filter(todo => !!todo.completed).length;
  const totalItems = items.length;

  let searchedItems = [];

  if (searchValue.length > 0) {
    searchedItems = items.filter(item => {
      const itemText = item.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return itemText.includes(searchText);
    })
  } else {
    searchedItems = items
  }

  const completeItem = (text) => {
    const itemsIndex = items.findIndex(item => item.text === text);
    const newItems = [...items];
    newItems[itemsIndex].completed = true;
    setItems(newItems);
  }

  const deleteItem = (text) => {
    const itemsIndex = items.findIndex(item => item.text === text);
    const newItems = [...items];
    newItems.splice(itemsIndex, 1);
    setItems(newItems);
  }

  return (
    <div className="container">
      <div className="container-app">
        <ToDoCounter 
          totalItems={totalItems}
          completedItems={completedItems}
        />
        <ToDoSearch 
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
        <ToDoList>
          {searchedItems.map(item => (
            <TodoItems 
              key={item.text}
              text={item.text}
              completed={item.completed}
              onComplete={() => completeItem(item.text)}
              onDelete={() => deleteItem(item.text)}
            />
          ))}
        </ToDoList>
        <CreateToDoButton />
      </div>
    </div>
  );
}

export default App;
