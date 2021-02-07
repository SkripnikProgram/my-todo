import classes from './ToDoListTask.module.css'
import React from 'react';
const ToDoListTask = ({completed, id, text, onChange, removeTodo }) => {
  const rebules = [];
 switch(completed){
   case true: rebules.push(classes.done);
   case false: rebules.push(classes.text);
 }
  return (
    <div className={classes.item}>
      <div className={classes.checkbox}> <input type="checkbox" checked={completed} onChange={()=> onChange(id)}/> </div>
      <div className={rebules.join(' ')}>{text}</div>
        <div className={classes.button}><button type="submit" onClick={() => removeTodo(id)}>&#9746;</button></div>
      </div>
  )

}
export default ToDoListTask;