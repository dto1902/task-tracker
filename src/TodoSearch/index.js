import { useContext } from "react";
import { TodoContext } from '../TodoContext'
import './TodoSearch.css';
import { ImSearch } from 'react-icons/im'

function ToDoSearch() {
    
    const { searchValue, setSearchValue } = useContext(TodoContext);

    const changeValue = (event) => {
        setSearchValue(event.target.value)
    };
    return (
        <div className="TodoSearch">
            <input 
                placeholder="Search tasks"
                onChange={changeValue}
                value={searchValue}
            />
            <div className="TodoSearch-icon">
                <ImSearch />
            </div>
        </div>
    )
}
export { ToDoSearch }