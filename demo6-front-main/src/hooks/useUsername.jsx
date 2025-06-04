import { useState } from "react";
import { idAvailableChekc } from "../utils/memberApi";

const pattern = /^[0-9a-z]{6,10}$/;

// useUsername은 회원가입, 로그인 할 때 사용하겠다
// 회원가입할 때는 사용가능한 지 서버와 통신이 필요, 로그인할 때는 불필요 -> availableCheck
function useUsername(availableCheck=false) {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const onChange = e=>setValue(e.target.value.toLowerCase());

  const onBlur=async()=>{
    setMessage('');
    if(!pattern.test(value)) {
      setMessage('아이디는 소문자와 숫자 6~10자입니다');
      return false;
    }
    // 패턴 체크에 성공 && 사용가능여부 확인 필요
    if(availableCheck) {
      try {
        await idAvailableChekc(value);
        return true;
      } catch(err) {
        if(err.status===409)
          setMessage("사용중인 아이디입니다");
        else
          console.log(err);
        return false;
      }
    } else
      return true;
  }

  return {value, message, onChange, onBlur};
}

export default useUsername