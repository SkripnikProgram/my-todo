import React, { useState } from "react";
import "./App.css";
import ToDoListCarcass from "./ToDoListCarcass/ToDoListCarcass";

function App(props) {
  const [tasks, setTodos] = React.useState([]);
  let toggleToDo = (id) => {
    setTodos(
      tasks.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  let removeTodo = (id) => setTodos(tasks.filter((todo) => todo.id !== id));
  let addTodo = (text) =>
    setTodos(
      tasks.concat([
        {
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
          text: text,
          completed: false,
        },
      ])
    );
  return (
    <div className="App">
      <ToDoListCarcass
        store={tasks}
        onToggle={toggleToDo}
        removeTodo={removeTodo}
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
