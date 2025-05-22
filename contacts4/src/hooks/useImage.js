// 이미지 선택, 미리보기, 서버에서 수신한 이미지 출력

import { useState } from "react";

const useImage = () => {
    // 사용자가 선택한 이미지 객체
    const [photo, setPhoto] = useState(null);

    // 업로드한 이미지는 서버에 phot란 이름으로 저장되어 있다 -> 서버에서 photo를 받으면 저장된 이미지의 주소다
    // useImage에서 photo는 사용자가 선택한 객체, 서버에서 photo는 업로드한 이미지의 주소
    
    // 미리보기 할 이미지 주소를 이름을 바꿔 photoUrl이라고 하자
    // 사용자가 선택한 이미지를 미리보기로 && 서버에서 받아온 이미지를 출력
    // 이미지를 src속성으로 출력하려면 객체가 아니라 주소 형식이어야 한다
    const [photoUrl, setPhotoUrl] = useState(null);

    const changePhoto = e => {
        // e.tatget은 html 요소, 지금의 경우는 <input type='file' ...>
        // <input type='file'...>은 선택한 파일을 files라는 배열 속성에 저장한다
        // 보통은 <input type='file> 1개로 파일 1개를 업로드 한다 -> 따라서 선택한 파일은 files[0]이 된다
        const file = e.target.files[0];
        setPhoto(file);

        // 이미지를 선택한 경우 base64 주소형식으로 인코딩해서 미리보기 한다
        if(file) {
            const reader = new FileReader();
            reader.onload = () => setPhotoUrl(reader.result);
            reader.readAsDataURL(file);
        } else {
            setPhotoUrl(null)
        }
    }
    

    return { photo, photoUrl, changePhoto, setPhotoUrl }; 
};

export default useImage;