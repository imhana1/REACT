import React, { useState } from 'react'
import useInput from '../hook/useInput';
import FormField from '../component/FormField';
import axios from 'axios';
import { API_URL } from '../component/constants';
import { useNavigate } from 'react-router-dom';
import ImageField from '../component/ImageField';
import BlockButton from '../component/BlockButton';
import usePhoto from '../hook/usePhoto';
// 내보낼 때 export로 한 애들은  {} 써야하고 export default로 내보낸 애들은 {} 안써도 됨

function ContactWrite() {
    const nameInput = useInput('이름을 입력하세요');
    const addressInput = useInput('주소를 입력하세요');
    const telInput = useInput('연락처를 입력하세요');

    const { photo, photoUrl, onChangePhoto } = usePhoto();

    /* 훅 만들어서 지움
    // 사용자가 선택한 사진 객체
    const [photo, setPhoto] = useState(null);
    // // 사진을 base64로 인코딩해서 <img srs=''>에 지정하면 볼 수 있도록(미리보기) base64인코딩해서 주소 형식으로 변환
    // const [photoUrl, setPhotoUrl] = useState(null);
    */

    const navigate = useNavigate();

    // 사진을 주소로 변하ㅗㄴ
    // const changePhoto = (e) => {
    //     const file = e.target.files[0];
    //     setPhoto(file);
    //     if (file) {
    //         const reader = new FileReader();  // 검색하면 나옴. 권장한느 코드는 아님
    //         reader.onload = () => setPhotoUrl(reader.result);
    //         reader.readAsDataURL(file);
    //     }
    // }

    const write = async () => {
        // 일단 검증부터
        const r1 = nameInput.check(); // true/false 그거
        const r2 = addressInput.check();
        const r3 = telInput.check();

        if ((r1 && r2 && r3) === false) {
            window.alert('입력을 확인해주세요. ')
            return;
        }


        // 이름, 주소, 연락처를 담은 요청 객체 생성
        const contact = { name: nameInput.value, address: addressInput.value, tel: telInput.value };
        try {
            // 객체를 axios에 전달하면 json 형식으로 변환해서 요청한다 <- json이 표준이라 header 설정 안해도 됨
            const response = await axios.post(API_URL, contact);
            const newNo = response.data.no;

            if (photo) {  // photo에 값이 들어있으면
                // 파일을 담은 multipart/form/data 처리하는 객체
                const formData = new FormData();
                formData.append('photo', photo);
                await axios.post(`${API_URL}/${newNo}/photo`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }
            window.alert('추가되었습니다. ')
            navigate(`/read?no=${newNo}`);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <ImageField name='photo' label='사진' onChange={onChangePhoto} photoUrl={photoUrl} alt='미리보기' />
            {/* 사진, 이름, 연락처, 주소 
                검증하고 실패하면 오류메시지 출력할거야(사진은 선택입력이라 검증x 오류메시지도x)
                상태랑 상태 관련 함수니까 훅으로 빼자
                input도 같은 형태 세번 입력하는거라 component로 빼서 만들었어 */}
            <div style={{ height: '340px' }}>
                <FormField name='name' label='이름' onChange={nameInput.change} onBlur={nameInput.check} message={nameInput.message} />
                <FormField name='address' label='주소' onChange={addressInput.change} onBlur={addressInput.check} message={addressInput.message} />
                <FormField name='tel' label='연락처' onChange={telInput.change} onBlur={telInput.check} message={telInput.message} />
            </div>
            <BlockButton value='추가' onClick={write} />
        </div>
    )
}

export default ContactWrite