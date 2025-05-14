import React, { useState } from "react";

function App08() {
  console.log("=========first==========");
  let count = 1;
  console.log("=========second==========");
  // 상태 num과 그 상태의 값을 변경할 함수를 useState 리액트함수(hook)을 이용해 생성
  // usestate 이용해야만 변경 가능

  const [num, setNum] = useState(1); // 이것도 구조분해할당
  // 2개의 원소 리턴(상태, 상태를변경하는함수)
  {
    /*}
    * 구조분해 할당
        객체구조분해할당은 객체의 필드명을 변수명으로 사용(변경불가)
            const obj = {irum:'홍길동', nai:20};
            const {irum, nai} = obj;
        배열을 구조분해할당 할 땐 이름을 자유롭게 지정할 수 있다
            const ar = [10, 20];
            const [first, second] = ar;
            const [첫번째, 두번째] = ar;
    */
  }

  const countInc = () => {
    count++;
    console.log(count);
  };

  const numInc = () => setNum(num + 1);

  return (
    <div>
      비상태: {count}
      <br />
      상태: {num}
      <br />
      <button onClick={countInc}>상태가 아닌 값 증가 (count)</button>
      <button onClick={numInc}>상태 값 증가 (count)</button>
    </div>
    // console에서는 바뀌는데 화면에서는 count값이 바뀌지 않아

    /* 
            리액트는 컴포넌트의 상태가 변경될 경우 메모리에 컴포넌트를 다시 그린다 = 가상DOM
            가상DOM과 실제 DOM을 비교해서 변경된 부분을 업데이트

            지금은 가상dom이 업데이트되지 않아 => 그래서 실제 dom을 업데이트하지 않음
            그래서 '나는 이걸 상태로 관리할거야' 선언을 해줘야해 = set
         */
  );
  // 아니 저렇게 해두고 실행해서 상태아닌 값 증가 누르고 상태값 증가 누르고 다시 상태아닌 값 증가 누르면 2 뜸 신나게 올려뒀어도
  // 왜? let count = 1;가 있잖아. 매번 초기화됨
  // "매번 ()를 다시 그려서 화면이 계속 초기화되기때문에"
  // 리액트는 메모리 출력해놓고? 화면이랑 비교해서 바뀐 부분 있으면 갱신
  // 근데 상태가 아닌애는 상태 유지가 불가능 -> 갱신할때마다 초기화
  // usestate쓰면 이거 상태로 저장해둬~ 하는거야 그래서 이거 안쓰면 매번 초기화됨
}

export default App08;
