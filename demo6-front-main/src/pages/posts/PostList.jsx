// 부모가 상태를 가진다 -> 자식은 props로 전달받아서 출력한다
// 상태를 외부에 저장 -> 필요한 컴포넌트가 알아서 데이터를 가지고 오자

import { useSearchParams } from "react-router-dom"
import { readAll } from "../../utils/postAPi";
import Posts from "../../components/posts/Posts";
import Paginations from "../../components/posts/Paginations";
import LoadingSpinner from "../../components/commons/LoadingSpinner";
import { Alert } from "react-bootstrap";
import useSWR from "swr";

function PostList() {
  const [params] = useSearchParams();

  let pageno = parseInt(params.get('pageno'));
  if(isNaN(pageno) || pageno<1) 
    pageno = 1;

  // SWR : 서버에서 데이터를 패칭하고 메모리에서 관리하는 역할
  //       데이터를 읽어오는 사이드 이펙트이므로 useEffect를 이용해서 상태를 변경 -> 그 작업을 수행해 준다
  const {data, error, isLoading} = useSWR(['post'], () => readAll(pageno))

  if (isLoading) return <LoadingSpinner />
  if (error) return <Alert variant="danger">서버가 응답하지 않습니다</Alert>

  // data : {posts, prev, start, end, next, pageno}에서 posts를 posts에, 나머지들을 rest란 이름으로
  const {posts, ...pagination} = data;

  return (
    <div>
      <Posts posts = {data.posts} /> 
      <Paginations pagination = {pagination} />
    </div>
  )
}

export default PostList