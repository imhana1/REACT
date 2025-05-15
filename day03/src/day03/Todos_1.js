import React, { useState } from 'react'

// 선생님 코드
function Todos_1() {
    const[todos, setTodos] = useState([]);
    const [inputs, setInputs] = useState({title:'', deadline:''});
    const [tno, setTno] = useState(1);

    const onChange=(e)=> {
      const {name, value} = e.target;
      setInputs(prev=>({...prev, [name]:value}));
    }

    const addTodo=()=> {
      // 구조분해 할당으로 써도 됨
      // const {title, deadline} = inputs;
      const newTodo = {tno, title:inputs.title, deadline:inputs.deadline, regDate:new Date().toLocaleString(), finish:false};
      setTodos(prev=>[...prev, newTodo]);
      setTno(prev=>prev+1);
      setInputs({title:'', deadline:''});
    }

    // 삭제
    const removeTodo=(tno)=>setTodos(prev=>prev.filter(todo=>todo.tno!==tno));

    // 변경 토글
    // {} : todo 를 전개해서 finish 에 있는 값을 !todo.finish 에 덮어 씌운다
    // prev = todos 와 같음
    // map 뒤에 있는 괄호에는 왜 todo 인가? : todo 가 하나 꺼내질 거라 그렇다 (tno만 꺼내짐)
    const toggle=(tno)=> setTodos(prev=>prev.map(todo=>todo.tno===tno?{...todo, finish:!todo.finish}:todo));

  return (
    <div>
      할일:<input name='title' placeholder='할일' onChange={onChange} value={inputs.title} /><br />
      마감일:<input type="date" name='deadline' onChange={onChange} value={inputs.deadline} />
      <button onClick={addTodo}>추가</button>
      <hr />
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>번호</th><th>할일</th><th>작성일</th><th>마감일</th><th></th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map(todo=> {
              return (
                <tr>
                  <td>{todo.tno}</td>
                  <td style={{color:todo.finish?'red':'black'}}>
                    {/* {`${todo.title} ${todo.finish?'(완료)':''}`}  ← 이렇게 해도 됨 ↓ 대신*/}
                    {todo.title + (todo.finish?'(완료)':'')}
                  </td>
                  <td>{todo.regDate}</td>
                  <td>{todo.deadline}</td>
                  <td>
                    <button onClick={()=>toggle(todo.tno)}>{todo.finish? '작업중으로':'완료 체크'}</button>
                    <button onClick={()=>removeTodo(todo.tno)}>삭제</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Todos_1