import axios from 'axios';
import React, { useState } from 'react';

const SupplyWrite = () => {
    const [inputs, setInputs] = useState({ name: '', quantity: ''})

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value}))
    }

    const doWrite = async () => {
        try {
            const response = await axios.post('https://mini03.onrender.com/supplies/new', inputs)
            window.location.href= `/supply/read?sno=${response.data.sno}`;
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className='mb-3'>
                <label htmlFor='name' className='form-control'>
                    이름 : 
                </label>
                <input type='name' className='form-control' name='name' onChange={onChange}/>
            </div>      
            <div className='mb-3 mt-3'>
                <label htmlFor='quantuty' className='form-label'>
                    수량 : 
                </label>
                <input type='quantuty' className='form-control' placeholder='수량' name='quantuty' onChange={onChange} />           
            </div>      
            <button className='btn btn-primary' onClick={doWrite}>저장</button>
        </div>
    );
};

export default SupplyWrite;