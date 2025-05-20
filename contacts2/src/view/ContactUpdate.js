import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API_URL } from '../component/constant';
import LoadingSpinner from '../component/LoadingSpinner';
import FormField from '../component/FormField';

function ContactUpdate() {
  const [contact, setContact] = useState({no: 0, name: '', address: '', tel: ''});
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const no = params.get('no');

  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  const handleChange = (e) => {
    setContact({...contact, [e.target.name]: e.target.value});
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoUrl(null);
    }
  };

  const handleUpdate = async () => {
    try {
      // 1. 연락처 정보 업데이트
      await axios.put(`https://sample.bmaster.kro.kr/contacts/${no}`, contact);

      // 2. 사진 업로드 (선택된 경우)
      if (photo) {
        const photoData = new FormData();
        photoData.append('photo', photo);
        await axios.post(`https://sample.bmaster.kro.kr/contacts/${no}/photo`, photoData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }

      // 3. 읽기 화면으로 이동
      navigate(`/read?no=${no}`);
    } catch (error) {
      console.error('연락처 변경 중 오류 발생:', error);
    }
  };

  useEffect(()=>{  
    if(no==null)
      navigate("/");
    async function fetch() {
      const response = await axios.get(`${API_URL}/${no}`);
      setContact(()=>response.data);
      setPhotoUrl(response.data.photo);
    }
    fetch();
  }, []);



  if(contact.name==='')
    return <LoadingSpinner />
  return (
    <>
      <table className='table table-border'>
        <tbody>
          <tr>
            <td>
              {photoUrl && <img src={photoUrl} style={{ height: '200px', objectFit: 'cover' }} alt="미리보기" />}
              <FormField label="사진" name="photo" type="file" onChange={handleFileChange} />
            </td>
          </tr>
          <tr>
            <td><FormField label="이름" name="name" value={contact.name} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td><FormField label="주소" name="address" value={contact.address} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td><FormField label="연락처" name="tel" value={contact.tel} onChange={handleChange} /></td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-3">
        <button type="button" className="btn btn-outline-primary btn-block" onClick={handleUpdate}>
          변경
        </button>
      </div>
    </>
  )
}

export default ContactUpdate