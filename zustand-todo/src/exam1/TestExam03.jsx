import React, { useState } from "react";

// 컴포넌트 변경 -> React.memo -> useCallback -> zustand 상태 분리 -> 커스텀훅으로 기능을 분리
// 컴포넌트는 상태가 변경 or 부모가 재렌더링 -> 재렌더링이 발생
// 상태가 변경되는 경우는 당연히 재렌더링(컴포넌트는 UI담당 View)
// 부모가 재렌더링 된다고 해서 자식이 따라가는 것을 방지하자

// Reaxt.memo : 상태가 변경되지 않은 경우 재렌더링을 방지
//              컴포넌트를 파라미터로 받아서 재랜더링 방지 기능을 추가한 다음 리턴

const ChildA = React.memo(() => {
    // 상태가 없으므로 재렌더링이 불필요
    console.log('상태가 없는 자식 A 렌더링');
    return <div>자식A</div>
})

const ChildB = React.memo(() => {
     // 자신의 상태가 변경되었을 때만 재렌더링되면 된다
    console.log('상태를 가진 자식 B 렌더링');
    const [data, setData] = useState('');

    return(
    <div>
        B : <input onChange={e=>setData(e.target.value)} />
    </div>
    )
})

const ChildC = ({onChange}) => {
    // 이 컴포넌트가 부모의 상태를 변경 -> 부모가 재렌더링 -> 모든 자식들이 재 렌더링
    console.log('부모의 상태를 변경하는 자식 C 렌더링');

    return(
    <div>
        C : <input onChange={onChange} />
    </div>
    )
}

const TestExam03 = () => {
    const [value, setValue] = useState('');
    return (
        <div>
            <ChildA />
            <ChildB />
            <ChildC onChange = {e=>setValue(e.target.value)} />
        </div>
    );
};

export default TestExam03;