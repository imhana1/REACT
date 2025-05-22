// 렌더링 중에 상태를 변경하면 변경된 상태가 재렌더링이 시작된다 => 무한루프
// 상태 변경은 항상 렌더링과 무관한 곳에서만 수행
// 이벤트 핸들러
// -useEffect()

import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useImage from "../hooks/useImage";
import useInput from "../hooks/useInput";
import { useEffect } from "react";
import { API_URL } from "../components/constants";
import ImageField from "../components/ImageField";
import FormField from "../components/FormField";
import BlockButton from "../components/BolckButton";
import axios from "axios";

const ContactUpdate = () => {
  // 1. no를 꺼내서 contact를 읽어온다
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const no = params.get("no");
  if (!no) navigate("/");

  const { data, loading, error } = useFetch(`${API_URL}/${no}`);

  // 2. photo, name, address, tel 커스텀 훅 -> 서버에서 받아온 값을 출력(read) and 사용자가 입력한 값을 저장 (write)
  const { photo, photoUrl, changePhoto, setPhotoUrl } = useImage();
  const nameInput = useInput("이름을 입력하세요");
  const addressInput = useInput("주소를 입력하세요");
  const telInput = useInput("연락처를 입력하세요");

  // 3. 서버에서 받아온 값을 커스텀 훅에 저장하자(useEffect)
  useEffect(() => {
    if(data) {
        nameInput.setValue(data.name);
        addressInput.setValue(data.address)
        telInput.setValue(data.tel)
        setPhotoUrl(data.photo)
    }
  }, [data]);
  
  const update = async() => {
    const r1 = nameInput.check();
        const r2 = addressInput.check();
        const r3 = telInput.check();
        if((r1 && r2 && r3) === false)
            return
        try {
            // 연락처(이름, 주소, 연락처)를 변경
            const contact = {name: nameInput.value, addres: addressInput.value, tel: telInput.value}
            await axios.put(`${API_URL}/${no}`, contact);
            // 이미지를 업로드해 변경
            if (photo) {
                const formData = new FormData();
                formData.append('photo', photo);
                await axios.post(`${API_URL}/${no}/photo`, formData, { headers: {'Content-Type':'multipart/form-data'}})
                navigate(`/read?no=${no}`)
            }
        } catch(err) {
            console.log(err);
        }

  }

  return (
  <div>
    <ImageField photoUrl={photoUrl} alt="미리보기" name="photo" label="사진" onChange={changePhoto} />
      <FormField name='name' label='이름' onChange={nameInput.change} onBlur={nameInput.check} message={nameInput.message} value={nameInput.value} />
      <FormField name='address' label='주소' onChange={addressInput.change} onBlur={addressInput.check} message={addressInput.message} value={addressInput.value} />
      <FormField name='tel' label='연락처' onChange={telInput.change} onBlur={telInput.check} message={telInput.message} value={telInput.value} />
      <BlockButton value='변경' onClick={update} />
  </div>
  );
};

export default ContactUpdate;
