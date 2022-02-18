import '../TodosLoading/TodosLoading.css';
import { GiCheckMark } from 'react-icons/gi';
import { MdDelete } from 'react-icons/md'

function EmptyTodos() {
    return (
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'><GiCheckMark /></span>
            <p className='LoadingTodo-text'>Create your first task!</p>
            <span className='LoadingTodo-deleteIcon'><MdDelete /></span>
        </div>
        )
}

export { EmptyTodos }