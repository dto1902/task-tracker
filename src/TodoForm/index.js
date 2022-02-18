import { TodoContext } from "../TodoContext";
import { useContext, useState } from "react";

function TodoForm () {
    const {
        items,
        createItem,
        setOpenModal,
    } = useContext(TodoContext)

    const [newItem, setNewItem] = useState('');
    const [alreadyCreate, setAlreadyCreate] = useState('');

    const ChangeValue = (event) => {
        setNewItem(event.target.value)
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        let arrayText = items.map((text) => text.text)
        let alreadyCreate = arrayText.indexOf(newItem)
        if ( alreadyCreate === -1 ){
            setAlreadyCreate()
            createItem(newItem)
            setOpenModal(false)
        } else {
            setAlreadyCreate(<p>This task is created</p>)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="container-modal">
                <label>Add Tasks</label>
                {alreadyCreate}
                <textarea
                    value={newItem}
                    onChange={ChangeValue}
                    placeholder="Write your earring"
                />
                <div>
                    <button type="button" className="button button-cancel" onClick={() => setOpenModal(false)}>Cancel</button>
                    <button type="onSubmit" className="button button-create" >Create</button>
                </div>
            </div>
        </form>
    )
}
export { TodoForm };