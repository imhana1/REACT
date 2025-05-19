import axios from 'axios';
import React, { useState } from 'react';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import { useNavigate } from 'react-router-dom';

const ContactWrite = () => {
    const [ formData, setFormData ] = useState({ name: '', tel: '', address: ''});
    const navigate = useNavigate();

    const change = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name] : value }))
    }

    const write = async () => {
        try {
        const response = await axios.post(`https://sample.bmaster.kro.kr/contacts`, formData)
        const no = response.data.no;
        navigate(`/read?no=${no}`);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <input type='text' name='name' placeholder='이름' onChange={change} /> <br />
            <input type='text' name='tel' placeholder='연락처' onChange={change} /> <br />
            <input type='text' name='address' placeholder='주소' onChange={change} /> <br />
            <button className='btn btn-primary' onClick={write}>추가</button>
        </div>
    );
};

export default ContactWrite;