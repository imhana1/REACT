// 함수나 변수를 모아서 JS모듈을 만든다 -> export로 내보내면 외부에서 inport로 사용한다
// 모듈에 상태가 필요하다면 -> 리액트 custom hook이나 context api를 사용한다
// - custom hook은 여러개를 만들 수 있다 ex) name, address, tel의 값을 저장하고 변경하고 검증
// - context api는 하나를 공유 ex) 로그인 여부

const PAGE_SIZE = 10;

const BLOCK_SIZE = 5;

const API_URL = 'https://sample.bmaster.kro.kr/contacts';

export { PAGE_SIZE, BLOCK_SIZE, API_URL }