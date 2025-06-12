import React from 'react'
import api from '../utils/api';
import useWebSocketStore from '../stores/useWebSocketStore';

function Index() {
  const login=async(username)=>{
    const requestForm = {username:username, password:'1234'};
    try {
      const response = await api.post('/login', new URLSearchParams(requestForm));
      console.log(response);
    } catch(err) {
      console.log(err);
    } 
  }

  return (
    <div>
      <button onClick={()=>login('spring')}>스프링 로그인</button>
    </div>
  )
}

export default Index