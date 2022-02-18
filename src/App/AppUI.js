import { TodoContext } from "../TodoContext";
import { ToDoCounter } from "../To-Do-Counter";
import { ToDoSearch } from "../TodoSearch";
import { ToDoList } from "../ToDoList";
import { TodoItems } from "../TodoItems";
import { CreateToDoButton } from "../CreateToDoButton";
import './App.css'
import { useContext } from "react";
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm";
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI () {
    const {
        error,
        loading,
        searchedItems,
        completeItem,
        deleteItem,
        openModal,
        setOpenModal
    } = useContext(TodoContext)

    return (
        <div className="container">
            <div className="container-app">
                <ToDoCounter />
                <ToDoSearch />

                <ToDoList>
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedItems.length) && <EmptyTodos />}

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

            {!!openModal && (
            <Modal>
                <TodoForm />
            </Modal>
            )}
                    
            <CreateToDoButton 
                setOpenModal={setOpenModal}
            />
            </div>
        </div>
    )
}
export { AppUI }