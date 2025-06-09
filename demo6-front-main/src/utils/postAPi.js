import api from "./api";

// fetcher 함수 : useSWR이 데이터를 읽어오기 위해 실행할 함수. then까지 있어야 한다
export const readAll = (pageno)=>api.get(`/api/posts?pageno=${pageno}`).then(res => res.data);