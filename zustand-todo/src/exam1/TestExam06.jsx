import React, { useState } from 'react';


const ChildA= React.memo(({data}) =>{
    console.log('ChildA 재렌더링');
    return <div>{data.val1}</div>
})


const ChildB= React.memo(({data}) =>{
    console.log('ChildB 재렌더링');
    return <div>{data.val2}</div>
})

const ChildC= React.memo(({val2}) =>{
    console.log('ChildC 재렌더링');
    return <div>{val2}</div>
})

const TestExam06 = () => {
    const [data, setData] = useState({val1:10, val2:500})

    // TestExam04와의 차이점 : val1, val2를 data 객체로 합쳤다
    // val1증가 or val2증가 -> data.val1 또는 data.val2가 증가하는 것이 아니라 -> 증가한 값을 가진 data를 새로 생성

    // "리액트는 상태 객체의 값이 바뀐 것을 눈치채지 못한다 -> 값을 바꿨으면 객체를 새로 만들어야 한다"

    // ChildA, ChildB는 객체를 통채로 props로 받았다. 이 경우 객체의 어떤 부분이 바뀌든 props가 변경되었다고 인식
    // 객체를 통째로 props로 받는 것이 아니라 필요한 부분만 받아야 재렌더링을 막을 수 있다 (zustand에서는 selector)

    // 컴포넌트는 자신이 필요한 값만 구독해야 한다
    // 자신이 필요한 값을 포함한 객체를 구독해서는 안된다
    return (
        <div>
            <ChildA data={data} />
            <ChildB data={data} />
            <ChildC val2={data.val2} />
            {/* 
                리액트는 값이 아니라 객체가 새로 만들어져야 상태가 바뀌었다고 판단한다
            */}
            <button onClick={() => setData(prev=>({...prev, val1:prev.val1+1}))}>윗값 증가</button>
            <button onClick={() => setData(prev=>({...prev, val2:prev.val2+1}))}>아랫값 증가</button>
        </div>
    );
};

export default TestExam06;