import React, { useEffect, useState } from "react";
import TodoCount from "./TodoCount";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

// 할 일 추가, 할 일 출력, 할 일 통계 컴포넌트로 구성
// 기능 : 할 일 추가, 할 일 삭제, 할 일 toggle
// 할 일 통계 : 할 일 개수, 완료된 할 일 개수

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "영어 공부",
      regDate: new Date().toDateString(),
      deadline: "2025-12-10",
      finish: false,
    },
  ]);

  const [inputs, setInputs] = useState({ title: "", deadline: "" });
  const [id, setId] = useState(2);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const create = () => {
    const newTodo = { id: id, title: inputs.title, deadline: inputs.deadline };
    setTodos((prev) => [...prev, newTodo]);
    setId((prev) => prev + 1);
    setInputs({ title: "", deadline: "" });
  };

  const remove = (id) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  const toggle = (id) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == id ? { ...todo, finish: !todo.finish } : todo
      )
    );

  return (
    <div style={{ margin: "7px" }}>
      <TodoCount todos={todos} />
      <CreateTodo
        create={create}
        change={change}
        title={inputs.title}
        deadline={inputs.deadline}
      />
      <TodoList todos={todos} toggle={toggle} remove={remove} />
    </div>
  );
};

export default TodoApp;
