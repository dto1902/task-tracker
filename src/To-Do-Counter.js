import React from "react";
import './TodoCounter.css'

function ToDoCounter(props) {
    return (
        <>
            <div className="todoCounter">
                <div> Your task </div>
                <p> You have completed {props.completedItems} of {props.totalItems} tasks! </p>
            </div>
        </>
    )
}
export { ToDoCounter }