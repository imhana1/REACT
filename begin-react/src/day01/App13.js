import React from "react";

// 카운터를 만들어보자
const App13 = () => {
    // 개발자는 데이터를 관리 -> 변경되면 리액트가 재 rendering 담당 (리액트는 변수 값을 추적)
    // 그러면 리액트가 모든 변수 값을 다 추적할까? no -> 상태로 지정
  let count = 1;
  const dec = () => {
    count --;
    console.log(count);
  }
  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            count++;
            console.log(count);
          }}
        >
          +
        </button>
        <button onClick={dec}>-</button>
      </div>
    </div>
  );
};

export default App13;
