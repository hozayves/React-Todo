import React, { useState, useEffect } from 'react';
import './style.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

export default function App() {
  // State stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);
  // Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  // Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  // Save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  // Get to local storage
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };
  return (
    <div>
      <header>
        <h1>Ed's Todo List</h1>;
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <ToDoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}
