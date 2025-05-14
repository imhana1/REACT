import React, { useState } from "react";

// 여러개의 input
const App14 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const reset = () => {
    setName("");
    setNickname("");
  };

  // const [inputs, setInputs] = useState({name:'', nickname:''})

  // const changeHandler = () =>

  return (
    <div>
      <input
        placeholder="이름"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        placeholder="닉네임"
        onChange={(e) => setNickname(e.target.value)}
        value={nickname}
      />
      <button onClick={reset}>초기화</button>
      <div>
        <b>값 : </b>
        {name}({nickname})
      </div>
    </div>
  );
};

export default App14;
