import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// 아이디, 비밀번호, 이메일 패턴
const patterns = {
  username : /^[a-z0-9]{6,10}$/,
  password : /^[a-zA-Z0-9]{6,10}$/,
  email : /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

// 에러 메시지 모아두기
const messages = {
  username : '아이디는 소문자와 숫자 6~10자 입니다',
  password : '비밀번호는 영숫자 6~10자 입니다',
  email : '유효한 이메일이 아닙니다.'
};


function Login02() {
  const [loginForm, setLoginForm] = useState({username:'', password:'', email:''});
  const [errors, setErrors] = useState({username:'', password:'', email:''});

  // 이벤트 처리 (onChange)
  const onChange=(e)=> {
    const {name, value} = e.target;
    setLoginForm({...loginForm, [name]:value})
  }

  // 이벤트 처리 (onBlur)
  const verify=(irum)=> {
    const pattern = patterns[irum];
    const value = loginForm[irum];
    const message = messages[irum];

    if(pattern.test(value)===false) {
      setErrors(prev=>{return {...prev, [irum]:message}});
      return false;
    } else {
      setErrors(prev=> ({...prev, [irum]:''}));
      return true;
    }
  }

  // 로그인 이벤트 처리 (onClick)
  const doLogin=()=> {
    const e1 = verify('username');
    const e2 = verify('password');
    const e3 = verify('email');

    if(e1 && e2 && e3) {
      alert('가입합니다');
    } else {
      alert('가입 실패');
    }
  }

  return (
    <div>
      <div className='mb-3 mt-3'>
        <label htmlFor="username" className='form-label'>아이디:</label>
        <input type="text" className='form-control' placeholder='아이디입력' name="username" onChange={onChange} onBlur={()=>verify('username')} />
        {errors.username!=='' && <span style={{color:'red'}}>{errors.username}</span>}
      </div>

      <div className='mt-3'>
        <label htmlFor="password" className='form-label'>비밀번호:</label>
        <input type="password" className='form-control' placeholder='비밀번호 입력' name="password" onChange={onChange} onBlur={()=>verify('password')} />
        {errors.password!=='' && <span style={{color:'red'}}>{errors.password}</span>}
      </div>

      <div className='mb-3 mt-3'>
        <label htmlFor="email" className='form-label'>이메일:</label>
        <input type="email" className='form-control' placeholder='이메일입력' name="email" onChange={onChange} onBlur={()=>verify('email')} />
        {errors.email!=='' && <span style={{color:'red'}}>{errors.email}</span>}
      </div>

      <div className='mb-3'>
        <button type="submit" className='btn btn-secondary' onClick={doLogin}>Submit</button>
      </div>
    </div>
  )
}

export default Login02