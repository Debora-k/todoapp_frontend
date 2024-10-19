import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteTask, toggleComplete }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 &&
        todoList.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
    </div>
  );
};

export default TodoBoard;
