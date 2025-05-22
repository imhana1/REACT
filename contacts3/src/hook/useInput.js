import React, { useState } from 'react'

// 훅: 상태와 함수의 결합. 근데 2가지가 있음 -> 커스텀 훅, Context
// 커스텀훅: 이름에 따라 값과 메시지, 주소에 따라 ... , => 각각 만드는거야
// Context: 전체가 공유 => 하나만 만들어
// ex) 장바구니: 장바구니가 있고 개수 감소 증가 등 있음. 그런데 사람마다 하나만 있어 => 이건 Context로 만들어야하지
// 지금 우리는 name, address, tel에 대해 각각 useInput 사용할거야
function useInput(msg) {
    const [value, setValue] = useState('');
    const [message, setMessage] = useState('');

    const change = e => setValue(e.target.value);

    const check = () => {
        setMessage('');
        if (value === '') {
            setMessage(msg);
            return false;
        }
        return true;

    }
    return { value, message, change, check, setValue };
}

export default useInput