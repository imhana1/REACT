import React, { useState } from "react";

const App13 = () => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const reset = () => {
    setText("");
  };

  return (
    <div>
      <input onChange={changeHandler} value={text} />
      <button onClick={reset}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  );
};

export default App13;
