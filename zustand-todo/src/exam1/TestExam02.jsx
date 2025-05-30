import React, { useEffect, useState } from 'react';

// Child는 상태를 가지지 않는다 (자신의 상태 X, 부모가 전달해준 상태 X)
// 컴포넌트는 언제 재렌더링 된다?
// 1. 상태가 변경되면
// 2. 부모가 렌더링되면
const Child = () => {
    console.log("자식 렌더링");

    useEffect(() => {
        console.log("초기화")
    }, []);

    return <div>자식입니다</div>
}

const TestExam02 = () => {
    console.log("부모 렌더링");
    const [count, setCount] = useState(0);

    return (
        <>
         <Child count = {count} />
        <button onClick={() => setCount(c=>c+1)}>+</button>
       
        </>
    );
};



export default TestExam02;