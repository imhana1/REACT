import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children}</div>;
}

function Hello({ name, color }) {
  return <div style={{ color }}>안녕하세요 {name}</div>;
}

const App08 = () => {
  return (
    <Wrapper>
      <Hello name="홍길동" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
};

export default App08;
