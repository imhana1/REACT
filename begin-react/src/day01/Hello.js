// 현재 모듈에 aaa, bbb, ccc 를 export 한다면
// export {aaa, bbb, ccc} -> import {aaa, bbb}

// 그런데 aaa 만 내보내면 됨
// export default aaa -> import aaa

// 리액트 컴포넌트의 경우 파일 1개에 컴포넌트 1개
// 기본적으로 export default

import React from "react";

function Hello() {
  return (
  <div>안녕하세요</div>
  );
}

export default Hello;
