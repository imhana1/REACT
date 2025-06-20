import axios from 'axios';
import React, { useState } from 'react';

const Private = () => {
    const [receiver, setReceiver] = useState('');

    const handleChange = (e) => {
        setReceiver(e.target.value);
    }

    const handleClick = async() => {
        if (receiver === '') {
           alert('수신자를 선택하세요.');
           return;
        }
        
        const message = {receiver: receiver, message: "까꿍"};

        try {
            await axios.post("http://localhost:8080/api/message", new URLSearchParams(message));
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            <select onChange={handleChange}>
                <option disabled selected>수신자 선택</option>
                <option>spring</option>
                <option>summer</option>
                <option>winter</option>
            </select>
            <button onClick={handleClick}>보내기</button>
        </div>
    );
};

export default Private;