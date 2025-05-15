import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// 아이디와 비밀번호를 입력해 로그인 요청을 보낸다
// 아이디와 비밀번호에 대해 패턴을 검증을 수행, 검증이 실패하면 오류 메시지를 출력한다

const patterns = {
  // 문자들 사이 띄어쓰기 하면 안됨 (왜?방금에러남;)
  username : /^[a-z0-9]{6,10}$/,
  password : /^[a-zA-Z0-9]{6,10}$/
};

const messages = {
  username : '아이디는 소문자와 숫자 6~10 자 입니다',
  password : '비밀번호는 영숫자 6~10자 입니다'
};

function Login() {
  const [loginForm, setLoginForm] = useState({username:'', password:''});
  const [errors, setErrors] = useState({username:'', password:''});
  const onChange=(e)=>{
    const {name, value} = e.target;
    // 반드시 새로운 객체가 만들어져야 한다 
    // UI 변경은 리액트가 한다 → 리액트가 데이터 변경을 눈치챌 수 있게 코딩해야한다 → 객체나 배열의 경우 값 변경이 아닌 새로운 객체를 만들어야만 한다
    setLoginForm({...loginForm, [name]:value})
  }

  // 이게 훨씬 안정적인 코드
  const verify=(irum)=> {
    const pattern = patterns[irum];
    const value = loginForm[irum];
    const message = messages[irum];
    if(pattern.test(value)===false) {
      setErrors(prev => { return{...prev, [irum]:message}});
      return false;
    } else{
      setErrors(prev =>({...prev, [irum]:''}));
      return true;
    }
  }
  
  const doLogin=()=>{
    const r1 = verify('username');
    const r2 = verify('password');

    if(r1 && r2) {
      alert('로그인합니다');
    } else {
      alert ('로그인 실패');
    }
  }
  // 왜 여기다 찍었나? : useState 의 setter 는 비동기 처리
  // login 바로 아래에다 찍으면 업데이트가 됐는지 안 됐는지 모르고 실행이 되어버림
  // 그런데 상태가 update 되면 component 를 다시 출력(return)하잖아? - 비동기 처리
  // 값 확인용 코드
  // console.log(loginForm);
  return (
    <div>
      <div className="mb-3 mt-3">
        <label htmlFor="username" className='form-label'>아이디:</label>
        {/* 함수에 파라미터를 넘길 거라면 화살표 함수 사용해야함 아니면 괄호 안에 있는 코드가 먼저 실행됨 */}
        <input type="text" className='form-control' placeholder='아이디 입력' name="username" onChange={onChange} onBlur={()=>verify ('username')}/>
        {/* 업데이트되고 저장된 정보를 통해 에러 메시지 출력 */}
        {errors.username!=='' && <span style={{color:'red'}}>{errors.username}</span>}
      </div>
      
      <div className="mb-3">
        <label htmlFor="password" className='form-label'>비밀번호:</label>
        <input type="password" className='form-control' placeholder='비밀번호 입력' name="password" onChange={onChange} onBlur={()=>verify ('password')}/>
        {/* 위에 적은 에러메시지와 같은 문장 단독으로 쓰일 때는 똑같은 표현 */}
        {errors['password']!=='' && <span style={{color:'red'}}>{errors.password}</span>}
      </div>
      
      <div className="mb-3">
        <button type="submit" className="btn btn-primary" onClick={doLogin}>Submit</button>
      </div>
    </div>
  )
}

export default Login