import { useState } from "react";

// 입력 컴포넌트에서 UI와 처리기능을 분리하자 -> 분리된 처리기능은 독립된 js로 만들자
// 그런데 이렇게 독립된 js가 리액트 훅을 사용한다면 -> 커스텀 훅(use~ 형식으로 만든다)
// - 커스텀훅은 함수 형식 + use 어쩌구 이름 + 속성과 기능을 리턴
const pattern = /^[0-9A-Za-z]{6,10}$/;

function usePassword() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const onChange = e=>setValue(e.target.value);

  const onBlur=()=>{
    setMessage('');
    if(pattern.test(value)) 
      return true;
    setMessage('비밀번호는 영숫자 6~10자입니다');
    return false;
  }

  const reset = () => setValue('');

  return {value, message, onChange, onBlur, reset};
}

export default usePassword