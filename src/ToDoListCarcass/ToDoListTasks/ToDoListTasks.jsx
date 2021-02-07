import classes from './ToDoListTasks.module.css'
import ToDoListTask from './ToDoListTask/ToDoListTask'

const ToDoListTasks = (props) => {
    let ToDoListTasksElements = props.store.map(tasks => <ToDoListTask
        id={tasks.id}
        text={tasks.text}
        completed={tasks.completed}
        onChange={props.onToggle}
        removeTodo={props.removeTodo}

    />);
    return (
        <div className={classes.tasks}>{ToDoListTasksElements.length ? (ToDoListTasksElements): <p>No Tasks</p>}</div>
    )

}
export default ToDoListTasks;