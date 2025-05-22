import React, { useState } from 'react'

// 상태와 그 상태를 처리하는 함수를 분리 : hook -> use어쩌구 커스텀 훅

function useCounter(initialValue=1) {
  const [value, setValue] = useState(initialValue);
  const inc = ()=>setValue(prev=>prev+1);
  const dec = ()=>setValue(prev=>prev-1);

  return {value, inc, dec};
}

function HookTest1() {
  // 상태와 그 상태를 변경하는 함수를 컴포넌트 외부로 분리 -> 재사용하자
  const {value, inc, dec} = useCounter(1);
  return (
    <div>
      <div>{value}</div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default HookTest1
