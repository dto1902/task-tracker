import './TodoList.css'

function ToDoList(props) {
    return (
        <section className="TodoList">
            <ul>
                {props.children}
            </ul>
        </section>
    )
}
export { ToDoList }