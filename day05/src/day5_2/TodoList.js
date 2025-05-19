import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, remove, toggle }) => {
  return (
    <div>
      <h5 style={{ fontWeight: "bold", marginTop: "32px" }}>할 일 목록</h5>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>할 일</th>
            <th>등록일</th>
            <th>마감일</th>
            <th>완료여부</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Todo todo={todo} toggle={toggle} remove={remove} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
