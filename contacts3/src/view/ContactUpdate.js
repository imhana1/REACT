import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useFetch from '../hook/useFetch';
import { API_URL } from '../component/constants';
import usePhoto from '../hook/usePhoto';
import useInput from '../hook/useInput';
import LoadingSpinner from '../component/LoadingSpinner';
import ImageField from '../component/ImageField';
import FormField from '../component/FormField';
import BlockButton from '../component/BlockButton';
import axios from 'axios';

function ContactUpdate() {
    // 1. no를 꺼내자
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const no = params.get('no');
    if (no === null)
        navigate('/');

    // 2. 서버에서 contact를 읽어온다.
    const { data, loading, error } = useFetch(`${API_URL}/${no}`);

    // 3.  photo, photoUrl, name, address, tel 커스텀 훅 생성
    const { photo, photoUrl, onChangePhoto, setPhotoUrl } = usePhoto();
    const nameInput = useInput('이름을 입력하세요');
    const telInput = useInput('전화번호을 입력하세요');
    const addressInput = useInput('주소를 입력하세요');

    // 4. 수신한 data로 커스텀훅에 값을 주자
    useEffect(() => {
        // 데이터 있는/없는경우
        if (data) {
            nameInput.setValue(data.name);
            addressInput.setValue(data.address);
            telInput.setValue(data.tel);
            // 서버에서 수신한 값을 photo에게 줘야해 (update는 서버에서부터 받아오는거니까)
            setPhotoUrl(data.photo);
        }
    }, [data]);
    // useEffect 처음 실행될 땐 데이터가 도착하지 않아 넘어갈거고 useFetch 실행하는동안 시간 걸려
    // 데이터가 도착하면 그거 받아서 useEffect 다시 실행해야해 => 의존성배열에 data 넣어
    // 

    const update = async () => {
        const r1 = nameInput.check(); // true/false 그거
        const r2 = addressInput.check();
        const r3 = telInput.check();

        if ((r1 && r2 && r3) === false) {
            window.alert('입력을 확인해주세요. ')
            return;
        }

        const contact = { name: nameInput.value, address: addressInput.value, tel: telInput.value };
        try {
            await axios.put(`${API_URL}/${no}`, contact);

            if (photo) {
                const formData = new FormData();
                formData.append('photo', photo);
                await axios.post(`${API_URL}/${no}/photo`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }
            window.alert('변경되었습니다. ')
            navigate(`/read?no=${no}`);
        } catch (err) {
            console.log(err);
        }
    }


    if (loading)
        return <LoadingSpinner />
    return (
        <>
            <ImageField label='사진' name='photo' onChange={onChangePhoto} photoUrl={photoUrl} />
            <div style={{ height: '340px' }}>
                <FormField name='name' label='이름' onChange={nameInput.change} onBlur={nameInput.check} message={nameInput.message} value={nameInput.value} />
                <FormField name='address' label='주소' onChange={addressInput.change} onBlur={addressInput.check} message={addressInput.message} value={addressInput.value} />
                <FormField name='tel' label='연락처' onChange={telInput.change} onBlur={telInput.check} message={telInput.message} value={telInput.value} />
            </div>
            <BlockButton value='변경하기' onClick={update} />
        </>
    )
}

export default ContactUpdate