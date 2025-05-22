// 사용자가 입력한 값을 저장하고, 검증한다

import { useState } from "react";

const useInput = (msg, initialValue = '') => {
    // useInput은 name, addree, tel 입력 사용 => 셋 모두 문자열 => ''로 초기화

    const [value, setValue] = useState(initialValue);
    const [message, setMessage] = useState('');

    const change = e => setValue(e.target.value);

    const check = () => {
        setMessage('');
        if(value === '') {
            setMessage(msg);
            return false;
        }
        return true;
    }
    
    return { value, message, change, check, setValue };
};

export default useInput;