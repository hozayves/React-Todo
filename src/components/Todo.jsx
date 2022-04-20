import React from 'react';

const Todo = ({ text, todo, setTodos, todos }) => {
  const todoDelele = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };
  const todoComplete = () => {
    setTodos(todos.map(item => {
     if(item.id === todo.id) {
       return {
         ...item, completed: !item.completed
       }
     }
     return item;
    }));
  };
  return (
    <div className="todo">
      <li className={`todo-item  ${todo.completed ? `completed` : ''}`}>{text}</li>
      <button className="complete-btn" onClick={todoComplete}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={todoDelele}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
