import { useState } from 'react'
import { useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
    const [error,setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState(initialValue);
  
    useEffect(() => {
     setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
      
        let parsedItems;
      
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }
    
        setItems(parsedItems)
        setLoading(false)
      } catch(error) {
          setError(error)
      }
     }, 3000)
    }, [])
  
    const saveItems = (newItems) => {
      try {
      const stringifiedItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedItems);
      setItems(newItems);
      } catch(error) {
        setError(error)
      }
    }
    return {
      items,
      saveItems,
      loading,
      error
    }
  }

  export { useLocalStorage }