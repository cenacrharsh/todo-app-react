import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through",
    color: "#cdcdcd",
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.prop.completed}
        onChange={() => props.handleChange(props.prop.id)}
      />
      <p style={props.prop.completed ? completedStyle : null}>
        {props.prop.text}
      </p>
    </div>
  );
}

export default TodoItem;
