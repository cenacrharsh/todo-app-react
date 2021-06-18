import React from "react";

import TodoItem from "./TodoItem";

import "./App.css";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }

  render() {
    const todo = this.state.todos.map((todoData) => (
      <TodoItem key={todoData.id} prop={todoData} />
    ));
    return <div className="todo-list">{todo}</div>;
  }
}

export default App;
