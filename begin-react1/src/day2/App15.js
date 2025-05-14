import React, { useState } from "react";

// 여러개의 input
const App15 = () => {
  const [inputs, setInputs] = useState({ irum: "", nickname: "" });

  const change = (e) => {
    const { name, value } = e.target;
    // 1. ...imputs : inputs를 irum과 nickname으로 분리
    // 2. {}로 irum과 nickname을 묶어 새로운 객체를 생성
    // 3. name에는 irum 또는 nickname이라는 값이 담겨있다
    //    name 변수를 이용해 irum 또는 nickname을 value로 바꿔주자
    //    그런데 아래처럼 적으면 {irum:'', nickname:'', name:'hello'}가 만들어진다. -망함
    // setInputs({...inputs, name:value})
    setInputs({ ...inputs, [name]: value });
  };

  const reset = () => {
    setInputs({ irum: "", nickname: "" });
  };

  return (
    <div>
      <input
        placeholder="이름"
        onChange={change}
        value={inputs.irum}
        name="irum"
      />
      <input
        placeholder="닉네임"
        onChange={change}
        value={inputs.nickname}
        name="nickname"
      />
      <button onClick={reset}>초기화</button>
      <div>
        <b>값 : </b>
        {inputs.irum}({inputs.nickname})
      </div>
    </div>
  );
};

export default App15;
