import React from "react";

function Hello({ name, age, leader }) {
  console.log(leader);
  return (
    <div style={{ backgroundColor: leader ? "black" : "white" }}>
      <span style={{ color: age >= 25 ? "blue" : "red" }}>{name}</span>
    </div>
  );
}

const App07 = () => {
  return (
    <div>
      <Hello name="키" age="33" leader={false} />
      <Hello name="태민" age="25" leader={false} />
      <Hello name="민호" age="23" leader={true} />
      <Hello name="온유" age="35" leader={false} />
    </div>
  );
};

export default App07;
