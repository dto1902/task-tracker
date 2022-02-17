import React, { useState } from "react";
import './TodoSearch.css';
import { ImSearch } from 'react-icons/im'

function ToDoSearch(props) {
    
    const changeValue = (event) => {
        props.setSearchValue(event.target.value)
    };
    console.log(props.searchValue);
    return (
        <div className="TodoSearch">
            <input 
                placeholder="Search tasks"
                onChange={changeValue}
                value={props.searchValue}
            />
            <div className="TodoSearch-icon">
                <ImSearch />
            </div>
        </div>
    )
}
export { ToDoSearch }