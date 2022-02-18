import './TodosLoading.css';
import { GiCheckMark } from 'react-icons/gi';
import { MdDelete } from 'react-icons/md'

function TodosLoading() {
    return (
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'><GiCheckMark /></span>
            <p className='LoadingTodo-text'>loading tasks</p>
            <span className='LoadingTodo-deleteIcon'><MdDelete /></span>
        </div>
    )
}
export { TodosLoading }