import React, { useState } from 'react';

// val2가 변경될 경우 ChildA는 재렌더링이 되지 않는다(React.memo)
const ChildA= React.memo(({val1}) =>{
    console.log('ChildA 재렌더링');
    return <div>{val1}</div>
})

// val1 변경 -> 부모 재렌더링 -> ChildB 재렌더링
const ChildB= ({val2}) =>{
    console.log('ChildB 재렌더링');
    return <div>{val2}</div>
}

const TestExam04 = () => {
    const [val1, setVal1] = useState(10);
    const [val2, setVal2] = useState(500);
    return (
        <div>
            <ChildA val1={val1} />
            <ChildB val2={val2} />
            <button onClick={() => setVal1(prev=>prev+1)}>윗값 증가</button>
            <button onClick={() => setVal2(prev=>prev+1)}>아랫값 증가</button>
        </div>
    );
};

export default TestExam04;