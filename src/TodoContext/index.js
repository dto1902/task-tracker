import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorege'

const TodoContext = React.createContext();

function TodoProvider (props) {
    const {items, saveItems, loading, error} = useLocalStorage('ITEMS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false)
    const [check, setCheck] = useState(false)
  
    const completedItems = items.filter(Item => !!Item.completed).length;
    const totalItems = items.length;
  
    let searchedItems = [];
  
    if (!searchValue.length >= 1) {
      searchedItems = items
    } else {
      searchedItems = items.filter(item => {
        const itemText = item.text.toLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return itemText.includes(searchText);
      })
    }
  
    const completeItem = (text) => {
      const itemsIndex = items.findIndex(item => item.text === text);
      const newItems = [...items];
      if (newItems[itemsIndex].completed === false){
        newItems[itemsIndex].completed = true;
      } else {
        newItems[itemsIndex].completed = false;
      }
      
      console.log(newItems[itemsIndex].completed);
      saveItems(newItems);
    }
  
    const deleteItem = (text) => {
      const itemsIndex = items.findIndex(item => item.text === text);
      const newItems = [...items];
      newItems.splice(itemsIndex, 1);
      saveItems(newItems);
    }

    const createItem = (text) => {
      const newItems = [...items];
      newItems.push({
        completed: false,
        text,
      });
      saveItems(newItems);
    }
    return (
        <TodoContext.Provider value={{
            items,
            error,
            loading,
            totalItems,
            completedItems,
            searchValue,
            setSearchValue,
            searchedItems,
            completeItem,
            deleteItem,
            openModal,
            setOpenModal,
            createItem,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };