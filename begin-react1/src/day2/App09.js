import React, { useState } from "react";

// count 다시 만들어보기
// * 화면이 갱신이 되려면 무조건 state 써야해

function App09() {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1); // count는 const라 내가 값을 못바꿔서 count++ 불가능
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={inc}>+</button>
        {/* onClick{inc()}처럼 괄호 열고 닫으면 클릭이랑 상관없이 함수 바로 실행 */}
        {/* 근데 내가 만약 값을 넘기고 싶어 그러면 밑처럼 적어. 그러면 클릭 했을 때 그 값 넘기는 무언가를 실행하겠다~ 됨 */}
        <button onClick={() => setCount(count + 100)}>+100</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default App09;
