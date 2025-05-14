import React from "react";
import "./App03.css";

// 삼항 또는 true/false로 조건부 렌더링
const App07 = () => {
  const a = 10;
  const b = 15;
  const message1 = "아이디는 소문자와 숫자 6~10자 입니다";
  const message2 = "";

  return (
    <div>
      <h1>삼항 조건부 렌더링</h1>
      <div className={a % 2 == 0 ? "green" : "red"}>{a}</div>
      <div className={b % 2 == 0 ? "green" : "red"}>{b}</div>
      <div className={a > 100 ? "red" : ""}>
        {a > 100 ? "100초과" : "100이하"}
      </div>
      <h1>true/false로 조건부 렌더링</h1>
      <p>null, false, undefined를 렌더링하면 아무것도 나타나지 않는다</p>
      {a > 10 && "a는 10보다 큽니다"} <br />
      {a <= 10 && "a는 10이하 입니다"}
      <h1>에러메시지가 있으면 출력, 비어있으면 출력하지 X, false처리</h1>
      {message1 != "" && <span style={{ color: "red" }}>{message1}</span>}
      {message2 != "" && <span style={{ color: "red" }}>{message2}</span>}
      {message1 != '' ? <span style={{color: 'red'}}>삼항으로 하면 빈 문자열을 추가</span> : ''}
      {/* ㄴ 삼항 표현식 */}
    </div>
  );
};

export default App07;
