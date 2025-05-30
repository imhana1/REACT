import React, { useState } from 'react';

const IrumInput = React.memo (({onChange})=> {
    console.log("irum 렌더링")
    return (
        <div>
            이름 : <input type='text' onChange={onChange} />
        </div>
    )
});

const EmailInput = React.memo (({onChange})=> {
    console.log("Email 렌더링")
    return (
        <div>
            Email : <input type='email' onChange={onChange} />
        </div>
    )
});

const TestExam07 = () => {
    const [irum, setIrum] = useState('');
    const [email, setEmail] = useState('');
    let value = 0;

    const changeEmail = e => setEmail(e.target.value);
    const changeIrum = e => setIrum(e.target.value);

    const changeValue = () => {
        value++;
        console.log(value);
    }

    return (
       <div>
        {value} <br/>
        <button onClick={changeValue}>증가</button>
            <IrumInput onChage = {changeIrum} />
            <EmailInput onChage = {changeEmail} />
        </div>
    );
};

export default TestExam07;

// 리액트는 상태가 변경되면 메모리에 컴포넌트를 렌더링한다(가상 DOM)
// 그리고 실제 DOM과 가상 DOM을 비교해 변경된 부분만 실제 DOM을 갱신 -> 속도가 빠르다

// 컴포넌트가 재렌더링될 때 상태가 아닌 값들은 다시 초기화한다. 상태의 경우는 리액트가 알아서 유지해준다
// 예제에서 let value = 0 의 경우
//  - 버튼을 클릭하면 value가 증가하지만, 상태가 아니므로 재렌더링이 발생하지는 않는다 (따라서 {value}는 계속 0)
//  - irum이나 email을 입력해서 재렌더링이 발생하면 -> let value=0이 다시 실행 -> value는 0으로 시작

// 함수는 상태가 아니다
// 컴포넌트가 재렌더링될 때 함수도 일반 변수인 value와 마찬가지로 새로 만들어진다
//  새로 만들어진 함수가 props로 자식에 전달되면, React.memo()가 봤을 때 props가 변경된 것이므로 재렌더링을 막지 않는다