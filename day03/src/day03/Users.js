import React, { useState } from 'react'

// active 를 가지고 style 을 바꿔줌
function Users() {
  const [users, setUsers] = useState([
    {id:1, username:'spring', active:true},
    {id:2, username:'summer', active:false},
    {id:3, username:'fall', active:false}
  ])

  const [username, setUsername] = useState('');
   
  const[id, setId] = useState(4);

  const add=()=> {
    const newUser = {id, username};
    setId(prev=>prev+1);
    setUsers([...users, newUser]);
    setUsername('');
  }

  // id 를 받아와야 삭제가 가능하기에 () 에 id 를 넣음
  const remove=(id)=> {
    // 배열의 filter 메소드는 참 거짓을 리턴하는 화살표함수를 파라미터로 받아
    // 참인 원소만 추출
    // users에 필터를 더해 선택한 id 와 같지 않은 아이디만 추출해라
    setUsers(users.filter(user=>user.id!==id));
  }

  const toggle=(id)=> {
    // 각 배열의 원소에 대해 → id 가 일치하면 active 를 !active 로, 일치하지 않으면 그대로
    setUsers(users.map(user=>user.id===id?{...user, active:!user.active}:user));
  }

  return (
    <>
      <div>
        <input type="text" name="username" placeholder='아이디 입력' onChange={e=>setUsername(e.target.value)} value={username}/>
        <button onClick={add}>추가하기</button>
      </div>
      <ul>
        {
          users.map(user=> {
            return (
              <li key={user.id}> 
                <span style={{cursor:'pointer', color:user.active? 'green':'black'}}
                  onClick={()=>toggle(user.id)}>{user.username}</span>
                <button onClick={()=>remove(user.id)}>삭제</button>
              </li>
          )})
        }
      </ul>
    </>
  )
}

export default Users


/*
  지금 배열에는
  1 spring true, 2 summer false, 3 fall false

  1. user.forEach(user=>console.log(user))
    forEach 는 입력은 있고 출력은 없는 화살표 함수가 온다
    users의 원소가 하나씩 꺼내져 user 란 파라미터에 담겨 화살표 함수를 호출한다
    하나하나 순서대로 console.log 에 찍혀 나와 값이 총 3개가 됨

  2. users.filter(user=?)
    filter 의 파라미터인 화살표 함수는 입력이 있고 출력이 참거짓으로 나온다
    filter 함수는 화살표 함수의 결과가 true 인 원소만 추출해 새로운 배열을 생성한다

    사용자가 선택한 id        filter의 파라미터            id!==user.id            결과 배열
          3                  1 spring true                   true                  추가
                             2 summer false                  true                  추가
                             3 fall false                   false                  삭제
    filter 는 결과가 배열로 나온다 

  3. users.map(user=>user.id===id? {...user, active:!user.active}: user)
    filter 는 조건을 맞는 것을 추출한다면 map 은 원소를 다른 것으로 변환하는 함수다
    사용자가 선택한 user는 active 값을 toggle 한다
    사용자가 선택하지 않은 user는 그대로 출력한다

  4. {...user, active:!user.active}
    전개 연산자로 user를 id, name, active 로 분해한 다음 {} 로 객체를 만든다
    다음에 active 라는 필드명이 왔다
      여기서 active 라는 필드가 새로운 필드면 객체에 추가
      active 라는 필드가 있으면 변경한다
        현재는 ... user 에 active 라는 필드가 있기 때문에 !user.active 로 바꿔라
    왜 !active 라고 적으면 안되고 !user.active 라고 적어야 하는가?
      현재 화살표 함수를 만드는 중임
        그러면 변수는 함수 안에서 찾는다
        함수 안에서 active 라는 변수는 없다
          {...user} 안에 active 가 들어있지 않나요?
          JS 가 봤을 때 현재 함수 내부에는 user는 있지만 active 라는 이름은 없다
          현재 변수 명은 user 밖에 없기에 꺼낼 수가 없다
          {...user} = 이름 없는 객체 그저 객체의 값


*/