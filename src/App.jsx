import "./App.css";
import styled from "styled-components";
import Headline from "./Headline";
import Form from "./Form";
import Button from "./Button";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/") // 1. Hole Todos from API
      .then((response) => response.json()) // 2. Wandle den Response in JSON um
      .then((todosFromApi) => {
        // 3. Verarbeite die Todos
        // todosFromApi.slice(0,9).map für nur 10 Objects
        const allTodos = todosFromApi.slice(0, 20).map((todo) => ({
          // 4. Erzeuge die Zielstruktur
          title: todo.title,
          isDone: todo.completed,
          color: "gray",
        }));
        setTodos(allTodos); // 0. Initialisiere Rendering
      });
  }, []);

  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem("_TODOS")) ?? [];
    setTodos(todosFromLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("_TODOS", JSON.stringify(todos));
  }, [todos]);
  //4. Hollywood is calling and wants a new todo
  //5. State update auf die Todos findet statt - Kopie des original Arrays
  function addTodo(newTodo) {
    setTodos([newTodo, ...todos]);
  }
  //0. Initiales Rendering
  //6. Re-render alle Komponenten, die auf Änderungen der Todos lauschen
  return (
    <div className="App">
      <Headline color="black" title="Hello React, this is my shopping list for today!" />
      <Form callAddTodoInAppJsx={addTodo} />
      <div className="App__Container">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
export default App;
