import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.prop.completed}
        onChange={() => props.handleChange(props.prop.id)}
      />
      <p>{props.prop.text}</p>
    </div>
  );
}

export default TodoItem;
