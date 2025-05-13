import React from "react";

function Idol({ group, name }) {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      {group}의 멤버 : {name}
    </div>
  );
}

const App10 = () => {
  const shinee = ["온유", "KEY", "민호", "태민"];
  return (
    <div>
      <ul>
        {shinee.map((m) => (
          <li>{m}</li>
        ))}
      </ul>
      <div>
        {
            shinee.map(m=><Idol group="샤이니" name={m}/>)
        }
      </div>
    </div>
  );
};

export default App10;
