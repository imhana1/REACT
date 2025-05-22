import { useState } from "react"

function usePhoto() {
    // 사진 입력도 훅으로 뺄거야

    // 업로드할 파일 객체(files[0]에 들어있어)
    const [photo, setPhoto] = useState(null);

    // <img src={}>에 출력하려면 주소 형식이 필요
    // 서버에 저장된 주소 or 미리보기 할 땐 base64 인코딩된 주소 형식
    const [photoUrl, setPhotoUrl] = useState(null);

    const onChangePhoto = e => {
        // 사진을 선택했을 때
        // e.target: <input type='file'>
        // - 파일 input에 multiple 속성을 지정하면 여러 파일이 선택 가능 -> file이 아니라 files배열
        // - multiple을 지정하지 않은 경우에는 선택한 파일은 files[0]에 들어있다
        const file = e.target.files[0];
        setPhoto(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPhotoUrl(reader.result);
            reader.readAsDataURL(file);
        } else {
            setPhotoUrl(null);
        }  // 찾으면 나오는 코드. 되도록 안씀

    }
    return { photo, photoUrl, onChangePhoto, setPhotoUrl };  // 내보내기
}

export default usePhoto