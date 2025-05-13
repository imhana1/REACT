import React, { useState } from "react";

function 계산기(choice) {
  if (choice == "덧셈") {
    return function (a, b) {
      return a + b;
    };
  } else if (choice == "뺼셈") {
    return function (a, b) {
      return a - b;
    };
  }
}

const App14 = () => {
  // JS에서 함수는 "변수가 올 수 있는 모든 곳"에 올 수 있다
  // 함수가 파라미터가 될 수도 있고, 함수를 리턴할 수도 있다

  // const [상태, 상태 변경 함수] = useState(초기값);
  const [count, setCount] = useState(0);
  // const ar = [11, 20];
  // const [first, second] = ar;

  // useState 훅을 이용해서 상태와 상태를 변경하는 함수를 얻어온다

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
    </div>
  );
};

export default App14;
