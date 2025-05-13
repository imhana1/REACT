import React from "react";

const App11 = () => {
  const shinee = [
    { name: "온유", role: "리더", birthday: "1989-12-14", isLeader: true },
    { name: "KEY", role: "보컬", birthday: "1990-12-14" },
    { name: "민호", role: "메인래퍼", birthday: "1989-12-14" },
    { name: "태민", role: "메인댄서", birthday: "1989-12-14" },
  ];
  return (
    <table>
      {/* 이름, 역할, 생일을 테이블로 출력하고, 리더인 경우 이름을 색을 지정해 출력 */}
      <thead>
        <tr>
          <th>이름</th>
          <th>역할</th>
          <th>생일</th>
        </tr>
      </thead>
      <tbody>
        {
        shinee.map(m => {
          return (
            <tr>
              <td style={{ color: m.isLeader ? "gold" : "black" }}>{m.name}</td>
              <td>{m.role}</td>
              <td>{m.birthday}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default App11;
