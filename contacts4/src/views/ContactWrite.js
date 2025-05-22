import React from 'react';
import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import ImageField from '../components/ImageField';
import FormField from '../components/FormField';
import BlockButton from '../components/BolckButton'
import useimage from '../hooks/useImage';
import axios from 'axios';
import { API_URL } from '../components/constants';

const ContactWrite = () => {
    const nameInput = useInput('이름을 입력하세요')
    const addressInput = useInput('주소를 입력하세요')
    const telInput = useInput('연락처를 입력하세요')
    const {photo, photoUrl, changePhoto} = useimage();
    const navigate = useNavigate();

    const write = async () => {
        const r1 = nameInput.check();
        const r2 = addressInput.check();
        const r3 = telInput.check();
        if((r1 && r2 && r3) === false)
            return
        try {
            // 연락처를 추가하고 새 번호를 꺼낸다 (연락처 추가할 때 photo는 무조건 기본 레고 블록)
            const contact = {name: nameInput.value, addres: addressInput.value, tel: telInput.value}
            const response = await axios.post(API_URL, contact);
            const newNo = response.data.no;
            // 새 번호로 이미지를 업로드(multipart/form-data) -> 요청헤더에 multipart/form-data로 지정해서 보내야한다
            if (photo) {
                const formData = new FormData();
                formData.append('photo', photo);
                await axios.post(`${API_URL}/${newNo}/photo`, formData, { headers: {'Content-Type':'multipart/form-data'}})
                navigate(`/read?no=${newNo}`)
            }
        } catch(err) {
            console.log(err);
        }

    }

    return (
        <div>
        <ImageField photoUrl={photoUrl} alt="미리보기" name="photo" label="사진" onChange={changePhoto} />
      <FormField name='name' label='이름' onChange={nameInput.change} onBlur={nameInput.check} message={nameInput.message} />
      <FormField name='address' label='주소' onChange={addressInput.change} onBlur={addressInput.check} message={addressInput.message}/>
      <FormField name='tel' label='연락처' onChange={telInput.change} onBlur={telInput.check} message={telInput.message} />
      <BlockButton value='추가' onClick={write} />
        </div>
    );
};

export default ContactWrite;