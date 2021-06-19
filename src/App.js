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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todo = this.state.todos.map((todoData) => (
      <TodoItem
        key={todoData.id}
        prop={todoData}
        handleChange={this.handleChange}
      />
    ));
    return <div className="todo-list">{todo}</div>;
  }
}

export default App;
