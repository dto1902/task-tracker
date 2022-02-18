import './TodoItems.css';
import { GiCheckMark } from 'react-icons/gi';
import { MdDelete } from 'react-icons/md'

function TodoItems(props) {

    return (
        <li className="TodoItems">
            <span 
                className={`icons TodoItems-icon ${props.completed ? 'TodoItems-icon-active' : ""}`}
                onClick={props.onComplete}
            >
                <GiCheckMark />
            </span>
            <p className={`${props.completed && 'TodoItem-p-complete'}`}>{props.text}</p>
            <span 
                className='icons TodoItems-delete'
                onClick={props.onDelete}
            >
                <MdDelete />
            </span>
        </li>
    )
}
export { TodoItems }