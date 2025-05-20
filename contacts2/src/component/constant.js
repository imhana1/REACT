// 이건 리액트가 아닌 자바스크립트라서 파일명 첫글자 소문자
// 주소 상수로 빼서 불러와서 쓸거야
// 상수들 모아두는?

const PAGE_SIZE = 10;

const API_URL = 'https://sample.bmaster.kro.kr/contacts';

const BLOCK_SIZE = 5;

// url 링크를 함수로 내보낼거야
const findAllUrl = (pageno) => `${API_URL}?pageno=${pageno}&pagesize=${PAGE_SIZE}`;

const findByNoUrl = (no) => `${API_URL}/${no}`;

const deleteByNoUrl = (no) => `${API_URL}/${no}`;

const createUrl = () => `${API_URL}`;

const changePhotoUrl = (no) => `${API_URL}/${no}/photo`

// js는 상수 정의한 후 내보내줘야 쓸 수 있음 => 필요한 곳에서 import 해서 써
// export { PAGE_SIZE, API_URL, BLOCK_SIZE }
export { PAGE_SIZE, findAllUrl, BLOCK_SIZE, findByNoUrl, deleteByNoUrl, createUrl, changePhotoUrl, API_URL }

// 값과 함수를 export하면 외부에서 import해서 사용할 수 있따
// hook도 상태와 함수를 제공하면 외부에서 import해서 사용
// 무슨 차이가 있나 => hook은 내부적으로 리액트 코드를 사용