import React from "react";

// props 는 부모에서 자식으로 전달되는 값을 담고 있는 객체
function Hello(props) {
  console.log(props);
  return (
    <div style={{ color: props.color }}>
      {props.name} {props.age}
    </div>
  );
}

function App05() {
  return (
    <div>
      <Hello name="홍길동" age="20" color="red" />
      <Hello name="심우준" age="30" color="blue" />
      <Hello name="강백호" age="25" color="green" />
    </div>
  );
}

export default App05;
