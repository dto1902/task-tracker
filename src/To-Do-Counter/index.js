import React, { useContext } from "react";
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'

function ToDoCounter() {
    const { totalItems, completedItems } = useContext(TodoContext);
    return (
        <>
            <div className="todoCounter">
                <div> Your task </div>
                <p> You have completed {completedItems} of {totalItems} tasks! </p>
            </div>
        </>
    )
}
export { ToDoCounter }