import React, { useState } from 'react'

const NameList = React.memo(({ list }) => {
    console.log("NameList 재렌더링");
    return (
        <ul>
            {
                list.map((n,i) => <li key={i}>{n}</li>)
            }
        </ul>
    )
})

const NameInput = ({ onClick, onChange, value }) => {
    console.log("NameInput 재렌더링");
    return (
        <div>
            <input type='text' name='name' onChange={onChange} value={value} />
            <button onClick={onClick}>추가</button>
        </div>
    )
}

function TestExam05() {
    const [list, setList] = useState(['전우치']);
    const [name, setName] = useState('');
    const onChange = (e) => setName(e.target.value);
    const onClick = () => {
        setList(prev => [...prev, name]);
        setName("");
    }
    return (
        <div>
            <NameInput onChange={onChange} onClick={onClick} value={name} />
            <NameList list={list} />
        </div>
    )
}

// 재렌더링 난리남 input에 입력하는건데 NameList까지 재렌더링됨

export default TestExam05