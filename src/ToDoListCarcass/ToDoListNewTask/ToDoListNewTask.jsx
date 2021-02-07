import classes from './ToDoListNewTask.module.css'
import React, {useState} from 'react';
const ToDoListNewTask = ({ addTodo }) => {

    const [value, setValue] = useState('heh')
    let submitHandler = (event) => {
        event.preventDefault()
        addTodo(value)
        setValue('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={classes.input}> <input 
            type="text" 
            value={value}
            onChange={event => setValue(event.target.value)}
            /></div>
        </form>
    )

}
export default ToDoListNewTask;