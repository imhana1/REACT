import axios from 'axios';
import React, { useEffect, useState } from 'react'

// https://mini03.onrender.com/todos 에서 todos 목록을 받아서 출력한다
// 생명주기 (lifecycle) : 초기화 → 사용 → 메모리 제거
// 스프링의 경우          @PostConstruct      @PreDestroy
// 리액트의 경우          useEffect(초기화, 사용, 메모리 제거 모두 하나로 사용)
function TodoList() {
  const [todos, setTodos] = useState(null);

  // useEffect(함수,[]) → 빈 배열을 주면 초기화 함수
  useEffect(()=> {
    // 만약 초기화 함수 내부에서 비동기 통신을 할 경우 함수로 만들어서 호출해야한다
    // axios 는 다시 함수로 빼야한다
    const fetch=async ()=> {
      const response = await axios.get('https://mini03.onrender.com/todos');
      // setTodos 로 업데이트
      setTodos(response.data);
    };
    fetch();
  },[])
  // ↑ [] : 의존성 대열로 만약 저 괄호 안에 todos 가 들어 있으면 todos 가 변경되면 다시 useEffect 가 실행된다
        //  useEffect 의 조건이다 (변경하게 되면 다시 재실행된다는 조건)

  // axios 가 끝날 때까지 기다려라
  if(todos===null)
    return;
    // axios 작업이 끝나면 null 이 아니기에 출력
  return (
    <ul>
      {todos.map(todo=>{
        return (
          <li>{todo.tno} {todo.title}</li>
        )
      })}
    </ul>
  )
}

export default TodoList