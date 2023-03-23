import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

// interface
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // REACT는 상태 관리 시, 아래 코드와 같은 경우 todos가 늘 최신의 상태임을 보장하지 못한다.
    // setTodos([...todos, { id: Math.random().toString(), text: text }]);

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    // todoId와 개별 원소의 id값이 일치하지 않는 원소만을 todos로 저장
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </>
  );
}

export default App;
