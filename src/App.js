import React from "react";

import TodoItem from "./TodoItem";

import "./App.css";
import todosData from "./todosData";

function App() {
  const todo = todosData.map((todoData) => (
    <TodoItem key={todoData.id} prop={todoData} />
  ));
  return <div className="todo-list">{todo}</div>;
}

export default App;
