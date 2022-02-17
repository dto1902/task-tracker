import './CreateToDoButton.css'
// import{ RiAddCircleFill } from 'react-icons/ri'

function CreateToDoButton() {
    const onClick = () => {
        console.log('hello');
    }
    return (
        <button 
            className="CreateToDoButton"
            onClick={onClick}
        >
            +
        </button>
    )
}
export { CreateToDoButton }