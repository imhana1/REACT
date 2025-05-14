import React from "react";

// 부모 컴포넌트 : 출력할 데이터를 가진다
// 자식 컴포넌트 : UI 담당 (view)
// 부모에서 자식으로 내려주는 값은 자동으로 props라는 파라미터를 생성
function Idol(props) {
  console.log(props);
  return (
    <div>
      <div>{props.group}</div>
      <div>{props.name}</div>
      <div>{props.birthday}</div>
      <div>{props.role}</div>
    </div>
  );
}

const App04 = () => {
  return (
    <div>
      <Idol group="샤이니" name="온유" birthday="1989.12.14" role="리드보컬" />
    </div>
  );
};

export default App04;
