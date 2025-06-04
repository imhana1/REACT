// store는 zustand나 redux가 사용하는 외부 상태 저장공간
// - 서버에서 데이터를 읽어올 때는 store에 저장 +  UI 컴포넌트로 출력
// - 서버로 데이터를 보낼 때는 커스텀훅으로 저장 및 검증 + UI 컴포넌트

import { create } from "zustand";

// 예를 들어 /read?pno=11에서 변경하기 버튼을 눌러 /update?pno=11로 이동했다고 하자
// 여기서 11번글을 새로 읽어올 필요가 있나?

// zustand 스토어는 craete 함수로 생성한다
// create함수의 파라미터는 set함수가 전달되고 스토어 객체를 리턴
const usePostStore=create((set)=>{
  return {
    posts: null,
    pagination: null,

    // 상태를 바꾸는 함수는 useState의 함수형 업데이트처럼 작성한다
    // state는 최신의 usePostStore 객체 -> 객체에서 posts 속성만 파라미터 params로 바꿔라
    setPosts: (params)=>set(state=>({...state, posts: params})),

    setPagination: (params)=>set(state=>({...state, pagination: params})),
  }
})

export default usePostStore;