// 부모가 상태를 가진다 -> 자식은 props로 전달받아서 출력한다
// 상태를 외부에 저장 -> 필요한 컴포넌트가 알아서 데이터를 가지고 오자

import { useSearchParams } from "react-router-dom"
import usePostStore from "../../stores/usePostStore";
import { readAll } from "../../utils/postAPi";
import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import Paginations from "../../components/posts/Paginations";
import LoadingSpinner from "../../components/commons/LoadingSpinner";
import { AsyncStatus } from "../../utils/constant";
import { Alert } from "react-bootstrap";

function PostList() {
  const [params] = useSearchParams();
  // 읽기 상태를 저장 : idle -> loading -> success 또는 fail
  const [loadingStatus, setLoadingStatus] = useState(AsyncStatus.IDLE);

  // store에 저장된 posts 상태와 그 상태를 변경할 setter 함수를 가져온다
  const posts = usePostStore(state=>state.posts);
  const setPosts = usePostStore(state=>state.setPosts);
  const setPagination = usePostStore(state=>state.setPagination);

  let pageno = parseInt(params.get('pageno'));
  if(isNaN(pageno) || pageno<1) 
    pageno = 1;

  useEffect(()=>{
    setLoadingStatus(AsyncStatus.LOADING);
    // 서버에서 posts를 읽어와서 store에 저장
    async function fetch() {
      try {
        const response = await readAll(pageno);
        // response.data에는 start, end, next, prev, pageno, posts...이렇게 들어있다
        // 전개 연산자를 이용해서 posts와 나머지를 분리
        const {posts, ...rest} = response.data;
        setPosts(posts);
        setPagination(rest);
        setLoadingStatus(AsyncStatus.SUCCESS);
      } catch(err) {
        setLoadingStatus(AsyncStatus.FAIL)
        console.log(err);
      }
    }
    fetch();
  }, [pageno]);

  if(loadingStatus === AsyncStatus.IDLE || loadingStatus === AsyncStatus.LOADING)
    return <LoadingSpinner />
  if(loadingStatus === AsyncStatus.FAIL)
    return <Alert variant="danger">서버가 응답하지 않습니다</Alert>

  return (
    <div>
      <Posts /> 
      <Paginations />
    </div>
  )
}

export default PostList