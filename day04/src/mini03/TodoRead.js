import axios from "axios";
import React, { useEffect, useState } from "react";

function TodoRead() {
  // 화면 뜨자마자 받아와야해
  // /todo/read?tno=111 이런식으로 넘어오니까 번호 꺼내야지
  //  번호 접근방법: location.search
  const [todo, setTodo] = useState(null); // 이 밑에 있는(useEffect쪽) 값들을 상태로 출력할거야
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tno = searchParams.get("tno");
    // /todo/read => tno==null
    // /todo/read?tno=aaa => isNaN(tno)==true
    // /todo/read?tno= => ''
    // tno가 null이거나 글자거나 빈 문자열이면 루트페이지로 가라
    if (tno == null || tno == "" || isNaN(Number(tno)))
      window.location.href = "/todo/list";
    async function fetch() {
      try {
        const response = await axios.get(
          `https://mini03.onrender.com/todos/${tno}`
        );
        setTodo(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
    console.log(tno);
  });

  const toggle = async (tno) => {
    try {
        const response = await axios.put(`https://mini03.onrender.com/todos/toggle/${tno}`);
        setTodo(prev => ({...prev, finish: response.data}))
    } catch(err) {
        console.log(err);
    }
  }

  const remove = async (tno) => {
    try {
        await axios.delete(`https://mini03.onrender.com/todos/${tno}`);
        window.location.href = "/todo/list";
    } catch(err) {
        console.log(err)
    }
  }

  if (todo == null) return; // 통신 받기 전에 냅다 넣으려는거 막아야지 제발
  return (
    <div>
      <div>
        <table className="table table-border">
          <tbody>
            <tr>
              <td>할일</td>
              <td>{todo.title}</td>
            </tr>
            <tr>
              <td>작성일</td>
              <td>{todo.regDate}</td>
            </tr>
            <tr>
              <td>마감일</td>
              <td>{todo.finish ? todo.deadline: <input type="date" name="deadline" className="form-control" value={todo.deadline} />}</td>
            </tr>
            <tr>
              <td>상세설명</td>
              <td>{todo.finish ? todo.memo: <textarea name="memo" className="form-control" value={todo.memo} rows='4' />}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-success" onClick={() => toggle(todo.tno)}>{todo.finish ? '작업중' : '완료'}</button>
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger" onClick={() => remove(todo.tno)}>삭제</button>
      </div>
    </div>
  );
}

export default TodoRead;
