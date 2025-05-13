import React from "react";

function Hello(props) {
  // 이름과 나이를 받아서 나이가 20살 이상이면 파랑, 미만이면 빨강
  const { name, age } = props;
  return (
  <div style={{ color: props.age >= 20 ? "blue" : "red" }}>
    {name}
    </div>
  );
}

const App06 = () => {
  return (
    <div>
      <Hello name="심우준" age="30" />
      <Hello name="정우주" age="19" />
    </div>
  );
};

export default App06;
