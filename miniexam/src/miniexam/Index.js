import React from "react";

const Index = () => {
  return (
    <>
      <h1>WELCOME</h1>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="#">연락처</a>
        </li>
        <li>
          <a href="/supply/list">비품</a>
        </li>
        <li>
          <a href="/todo/list">할 일</a>
        </li>
      </ul>
    </>
  );
};

export default Index;
