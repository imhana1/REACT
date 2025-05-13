import React from "react";

// 조건부 렌더링
// - 서버에서 값을 받아와서 출력하는 경우

const App09 = () => {
  const a = 10,
    b = 20;
  const obj = { age: 20 };
  return (
    <div>
      <div>{a + b}</div>
      <div>{a >= 100 && "a가 100이상 입니다"}</div>
      <div>{a >= 10 && "a가 10이상 입니다"}</div>
      <div>
        {/* 
        JSX 표현식은 객체 자료형을 지원하지 않는다
        */}
        {obj}
      </div>
    </div>
  );
};

export default App09;
