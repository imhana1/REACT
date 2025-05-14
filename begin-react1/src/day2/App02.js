import React from "react";

// JS 표현식을 출력할 떄는 {}를 사용한다
// 표현식(expression)은 값이 될 수 있는 문장
// const a = 3 + 5;

const App02 = () => {
// 좌변 값  우변 값(표현식)
  const a = 10;
  const b = 20;
  return (
    <div>
      {a} + {b} = {a + b}
    </div>
  );
};

export default App02;
