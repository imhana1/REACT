import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// todo : tno, title, regDate, deadline, finish
// title, deadline 을 입력 받는다
// bootstrap 으로 화면 구성
// 할일 추가, 할일 삭제, finish (toggle-true,false) 변경
// finish 가 true 인 할 일은 빨간색으로 출력



function Todos() {
  const [todos, setTodos] = useState([{tno:1, title:'할일', regDate:new Date().toLocaleString(), deadline:'2025-10-22', finish:false}])
  const [inputs, setInputs] = useState({title:'',deadline:''});
  const [tno, setTno] = useState(2);

  const add=()=> {
    // finish 는 어떻게 해야하지...
    const newTodo = {tno:tno, title:inputs.title, regDate:new Date().toLocaleString(), deadline:inputs.deadline, finish:false};
    // tno 증가
    setTno(prev=>prev+1);
    setTodos([...todos, newTodo]);
    // 다시 초기화
    setInputs({title:'', deadline:''});
    // 둘 중 하나, 모두 입력 하지 않았을 때 나갈 에러메시지
    if(inputs.title==='' || inputs.deadline==='') {
      alert('할 일과 날짜를 기재해주세요');
      return
    }
  }

  const onChange=(e)=> {
    const {name, value} = e.target;
    setInputs(prev=>({...prev, [name]:value}));
  }

  const toggle=(tno)=> {
    setTodos(todos.map(todo=>todo.tno===tno?{...todo, finish:!todo.finish}:todo));
  }

  const remove=(tno)=> {
    setTodos(todos.filter(todo=>todo.tno!==tno));
  }

  return (
    <>
    <div className='mt-3 mb-3'>
      <input type="text" className='form-control' id="title" name="title" placeholder='Enter Title' onChange={onChange} value={inputs.title}/>
      <input type="date" className='form-control' id="date" name="deadline" onChange={onChange} value={inputs.deadline} />
      <button onClick={add} className="btn btn-success">추가하기</button>
    </div>

    <h1>To-do List</h1>
    <table className='table table-border'>
      <thead>
        <tr>
          <th>no</th>
          <th>title</th>
          <th>date</th>
          <th>deadline</th>
          <th>finish</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          todos.map(todo=> {
            return (
              <tr key={todo.tno}>
                <td style={{color:todo.finish? 'red':'black'}} onClick={()=>toggle(todo.tno)}>{todo.tno}</td>
                <td style={{color:todo.finish? 'red':'black'}} onClick={()=>toggle(todo.tno)}>{todo.title}</td>
                <td style={{color:todo.finish? 'red':'black'}} onClick={()=>toggle(todo.tno)}>{todo.regDate}</td>
                <td style={{color:todo.finish? 'red':'black'}} onClick={()=>toggle(todo.tno)}>{todo.deadline}</td>
                <td>
                  {todo.finish}
                  <button onClick={()=>toggle(todo.tno)} className='btn btn-light'>완료</button>
                </td>
                <td>
                  <button onClick={()=>remove(todo.tno)} className='btn btn-dark'>삭제</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default Todos