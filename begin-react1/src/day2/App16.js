import React, { useState } from "react";

// 비밀번호 확인
// 1. blur 이벤트 비밀번호 검증 -> 에러 메시지 출력
// 2. 버튼 클릭 -> 비밀번호 검증 -> 실패하면 에러 메시지, 성공하면 alert('비밀번호 확인')
const App16 = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const pattern = /^[A-Za-z0-9]{6,10}$/;

  const onBlur = () => {
    setMessage("");
    if (!pattern.test(password)) {
      setMessage("비밀번호는 영숫자 6~10자 입니다.");
      return false;
    }
    return true;
  };

  const onClick = () => {
    const result = onBlur();
    if (result) alert("비밀번호 확인");
  };

  return (
    <div>
      <label htmlFor="password">비밀번호 입력</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        onBlur={onBlur}
      />
      <br />
      <div style={{ height: "25px" }}>
        {message !== "" && (
          <span style={{ color: "red", fontSize: "0.8em" }}>{message}</span>
        )}
      </div>
      <div>
        <button onClick={onClick}>비밀번호 확인</button>
      </div>
    </div>
  );
};

export default App16;
