import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import UserCount from "./UserCount";


const Velopert02 = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "velopert", email: "public.velopert@gmail.com", active: true },
    { id: 2, username: "tester", email: "tester@example.com", active: false },
    { id: 3, username: "liz", email: "liz@example.com", active: false },
  ]);

  const [inputs, setinputs] = useState({username: '', email: ''});
  const [id, setId] = useState(4);

  const change = e =>{
    const {name, value} = e.target;
    // username에 a라고 입력 : {username:'', email:''} -> {username:'a', email:''}
    // 변경만 생각하면 prev[name]=value라고 쓰면 되겠지만, 리액트는 상태는 새로운 객체, 배열이 만들어질 때만 갱신
    // 새로운 객체를 만들려면 값이 바뀐 username을 제외한 나머지 필드는 그대로 복사하면 된다
    // 그래서 전개(spread) 연산자를 사용 : spread연산자는 배열이나 객체의 원소들을 나열한다
    // ...inputs라고 하면 inputs의 필드들을 나열. 이걸 다시 {}로 감싸면 새로운 객체, []로 감싸면 새로운 배열이 만들어진다
    // {...inputs}라고 하면 기본 inputs과 똑같은 필드와 값을 가진 새로운 객체가 생성된다
    setinputs(prev => ({...prev, [name]: value}));
  }

  const create = () => {
    const newUser = {id: id, username: inputs.username, email: inputs.email}
    setUsers(prev => [...prev, newUser])
    setinputs({username: '', email: ''})
    setId(prev => prev + 1);
  }
  // []는 배열, {}는 객체
  // useState는 새로운 배열 또는 객체를 생성한다

  const remove = (id) => setUsers(prev => prev.filter(user => user.id !== id)) 

  // users 배열의 모든 원소(user)에 대해서
  // 사용자가 선택한 id에 해당하는 user는 active를 반전 {...user, active : ! user.active}
  // 사용자가 선택하지 않는 user는 그대로 출력 : user
  const toggle = (id) => setUsers(prev => prev.map(user => user.id == id ? {...user, active: ! user.active}: user))

  return (
    <div>
      <UserCount users={users} />
      <CreateUser change = {change} create = {create} username = {inputs.username} email = {inputs.email} />
      <UserList users = {users} remove = {remove} toggle = {toggle} />
    </div>
  );
};

export default Velopert02;
