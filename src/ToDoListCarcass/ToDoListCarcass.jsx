import classes from './ToDoListCarcass.module.css'
import ToDoListTasks from './ToDoListTasks/ToDoListTasks'
import ToDoListNewTask from './ToDoListNewTask/ToDoListNewTask'

const ToDoListCarcass = (props) => {
    return (
        <div className={classes.all}>
            <div className={classes.headerText}>   <h1>My ToDo List</h1> </div>
            <ToDoListNewTask addTodo={props.addTodo} />
            <ToDoListTasks store={props.store} onToggle={props.onToggle} removeTodo={props.removeTodo} />
        </div>
    )

}
export default ToDoListCarcass;