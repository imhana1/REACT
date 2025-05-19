import React from "react";

const Todo = ({ todo, remove, toggle }) => {
  return (
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.regDate}</td>
      <td>{todo.deadline}</td>
      <td>
        <button onClick={() => toggle(todo.id)} className="btn btn-success">
          {todo.finish ? "완료" : "미완료"}
        </button>
      </td>
      <td>
        <button onClick={() => remove(todo.id)} className="btn btn-danger">
          삭제
        </button>
      </td>
    </tr>
  );
};

export default Todo;
