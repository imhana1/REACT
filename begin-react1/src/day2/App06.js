import React from "react";

const shinee = [
  {
    name: "온유",
    birthday: "1989.12.14",
    role: "리드보컬",
    image:
      "https://i.namu.wiki/i/841L6-37rru8O6qL0_daS40YgyDljlDdVKpG_uDyozPfxDhGLRr9T2ShA8qRo0KReGUXJfOMLSYGUVFRtqqL1PH82XGSu0IZuXc3t65CCHoYj6vi4uNN0cWBWNlcwzRWVnFJIIym9mZDeUF-dFfx8Q.webp",
  },
  {
    name: "KEY",
    birthday: "1991.09.23",
    role: "보컬",
    image:
      "https://i.namu.wiki/i/yho_qNAEXscHxfeG3t29bwqJBCN6t6eTTUhOk00vW7brEH-8JNCB79oIcT2-x_cGXVtO1CzlpRPkKgx8QFAej9jpXSqvY0xwrVuH1fbNQVEE8nSm5Huoy3ZFJ1JLUORRK0Mn1eCdWAn4jBiFnqNc-g.webp",
  },
  {
    name: "민호",
    birthday: "1991.12.09",
    role: "메인래퍼",
    image:
      "https://i.namu.wiki/i/CJPtdMcto75pozi497JFyNGn6Z072TsSYwlPnDijHSLbiuh79n999Y6iS2AFTNtIQWY25rGk-Mr5UclAQW0g_g12S4zDpJb3i7w9x-_ypTdxGQYDQnfPUjjifYCvmeE54afO8atUHC19R3xqHFWuCA.webp",
  },
  {
    name: "태민",
    birthday: "1993.07.18",
    role: "메인댄서",
    image:
      "https://i.namu.wiki/i/qb21qFh-e9dCdlbK-yf-Sz8_V0tTj_jFd7cn9KqA291bo3OzDaXSIWKQi3EsWGjsZUPleGknSO1x_3WETrso7m4BmD5JktI3yiS1adi38EcM4Yl0ikkEjK7GcVGEZWRia26uIu-0vrCc_cmtVKnYRg.webp",
  },
];

function Idol(props) {
  const {name, birthday, role, image} = props.member;
  const style = {
    display: "inline-block",
    width: "200px",
  };

  return (
    <div style={style}>
      <img src={image} style={{ width: "200px" }} />
      <div>{name}</div>
      <div>{birthday}</div>
      <div>{role}</div>
    </div>
  );
}

const App06 = () => {
  return (
    <div>
      <div>샤이니</div>
      <div>
        {
        shinee.map((member) => {
          //입력 파라미터를 가지고 새로운 객체를 생성
          return <Idol member={member} />
        })
        }
      </div>
    </div>
  );
};

export default App06;
