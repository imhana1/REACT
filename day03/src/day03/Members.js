import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Members() {
  // 빈 열로 초기화 할 때는 useState([]);
  const [members, setMembers] = useState ([{id: 1, name:'홍길동', tel:'01011112222', regDate:new Date().toLocaleString()}]);
  const [inputs, setInputs] = useState({name:'', tel:''});
  const [id, setId] = useState(2);

  const onChange=(e)=> {
    const {name, value} = e.target;
    // 중괄호를 넣은 이유는 객체를 만들거나 배열을 새로 만들기 위함이다
    // 하지만 에러가 남 왜?
    // 화살표 때문에 이걸 함수로 알아들었기 때문
    // 해결 방법 : 괄호를 하나 더 친다
    setInputs(prev=>({...prev, [name]:value}));
  }

  const addMember=()=> {
    if(inputs.name==='' || inputs.tel==='') {
      alert("이름과 연락처를 입력하세요");
      return
    }
    const newMember = {id:id, name:inputs.name, tel:inputs.tel, regDate:new Date().toLocaleString()};
    setMembers(prev=>[...prev, newMember]);
    setId(prev=>prev+1);
    setInputs({name:'', tel:''});
  }

    const remove=(id)=> setMembers(prev=>prev.filter(member=>member.id!==id));
  return (
    <>
      <h1>연락처</h1>
      <div>
        <input type="text" name="name" placeholder='이름 입력' onChange={onChange} value={inputs.name}/>
        <input type="text" name="tel" placeholder='전화번호 입력' onChange={onChange} value={inputs.tel} />
        <button onClick={addMember}>추가</button>
      </div>
      <table className='table table-border'>
        <thead>
          <tr>
            <th>이름</th>
            <th>연락처</th>
            <th>등록일</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          members.map(member=> {
            return (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.tel}</td>
                <td>{member.regDate}</td>
                <th>
                  <button onClick={()=>remove(member.id)}>삭제</button>
                </th>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </>
  )
}

export default Members