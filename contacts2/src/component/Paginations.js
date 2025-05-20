import { useEffect, useState } from "react";
import { BLOCK_SIZE } from "./constant";
import { Navigate, useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";

function Paginations({ data }) {
  // data를 받아왔으니까 이제 여기에서 풀어헤쳐줘야해,, 넘길땐 편했지만 받는쪽은 아니지
  const { pageno, pagesize, totalcount } = data;
  const [pagination, setPagination] = useState(null);
  const navigate = useNavigate();

  // pagination 계산
  // prev, start, end, next
  // 지금 for문을 못돌리니까 0, [1,2,3,4,5], 6 이런식으로 만들어야해
  // 참고: sample.bmaster가 pagination을 front에서 계산하게 되어있어서 작성할게
  useEffect(() => {
    const 페이지의개수 = Math.floor((totalcount - 1) / pagesize + 1); // 생각해보니 pagesize가 data에 담겨있어서 고쳐줌
    const prev = Math.floor((pageno - 1) / BLOCK_SIZE) * BLOCK_SIZE;
    const start = prev + 1;
    let end = prev + BLOCK_SIZE;
    let next = end + 1;
    if (end >= 페이지의개수) {
      end = 페이지의개수;
      next = 0;
    }

    // [1,2,3,4,5]라는 배열이 되어야하니까. map 사용할 수 있게 배열로 바꿔?
    const pageItem = [];
    for (let i = start; i <= end; i++) 
      pageItem.push(i);
    setPagination({ prev, next, pageItem });
  }, []); // 이건 화면이 로딩될 때 한번만 하면 됨

  // useEffect이 pagination 계산이 끝나지 않았으면 출력하지 마라
  if (pagination == null) return;
  return (
    <>
    <Pagination style={{ justifyContent: 'center'}}>
      {
        pagination.prev > 0 && <Pagination.Item onClick={()=>navigate(`/?pageno=${pagination.prev}`)}>이전</Pagination.Item>
      }
      {
        pagination.pageItem.map(i => <Pagination.Item key={i} active={pagination.pageno == i} onClick={()=>navigate(`/?pageno=${i}`)}>{i}</Pagination.Item>)
      }
      {
        pagination.next > 0 && <Pagination.Item onClick={()=>navigate(`/?pageno=${pagination.next}`)}>다음</Pagination.Item>
      }
    </Pagination>
    </>
  );
}

export default Paginations;
