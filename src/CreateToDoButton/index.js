import './CreateToDoButton.css'
// import{ RiAddCircleFill } from 'react-icons/ri'

function CreateToDoButton(props) {
    const onClick = () => {
        props.setOpenModal(true);
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