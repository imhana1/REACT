import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePhotoUrl, createUrl } from "../component/constant";

function ContactUpdate() {
    // applcation/json으로 넘긴다
    const [formData, setFormData] = useState({name:'', tel:'', address:''})

    // multipart/form-data로 넘긴다
    const [photo, setPhoto] = useState('');
    const navigate = useNavigate();

    const changePhoto = (e) => {
        // e.target이라고 하면 이벤트가 발생한 html 요소 : <input type='file'~~~>
        // file 요소에는 files라고 배열이 있다. (multiple 속성을 추가하면 사진을 여러장 선택할 수 있기 때문에 배열)
        setPhoto(e.target.files[0])
    }

    const changeFormData = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    const writeContact = async() => {
        try {
        // 1. post /contacts로 연락처 추가
        const response = await axios.post(createUrl(), formData);

        // 2. 응답을 받아서 새로운 contact의 no를 꺼낸ㄴ다
        const newNo = response.data.no;
        
        // 3. no를 이용해서 사진을 변경한다 (photo의 기본 값은 ''이고 JS는 빈 값('', null, undefined)를 false로 취급)
        if(photo) {
            const photoData = new FormData();
            photoData.append('photo', photo);
            // axios의 기본 형식은 application/json -> header에 form-data라고 기록해서 서버로 전송
            await axios.post(changePhotoUrl(newNo), photoData, {
                headers: {'Content-Type':'multipart/form-data'}
            })
        }
        
        // 4. 읽기로 이동
        navigate(`/read?no=${newNo}`)
        } catch(err) {
            console.log(err)
        }
    }

  return (
    <>
      <div className="mb-3 mt-3">
        <label htmlFor="photo" className="form-label">사진:</label>
        <input type="file" className="form-control" name="photo" onChange={changePhoto} />
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="name" className="form-label">이름:</label>
        <input type="text" className="form-control" name="name" onChange={changeFormData} />
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="address" className="form-label">주소:</label>
        <input type="text" className="form-control" name="address" onChange={changeFormData} />
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="tel" className="form-label">연락처:</label>
        <input type="text" className="form-control" name="tel" onChange={changeFormData} />
      </div>
      <div className="mb-3 mt-3">
        <button className="btn btn-primary" onClick={writeContact}>
          추가
        </button>
      </div>
    </>
  );
}

export default ContactUpdate;
