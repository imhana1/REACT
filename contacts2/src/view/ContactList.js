import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_URL, findAllUrl, PAGE_SIZE } from "../component/constant";
import axios from "axios";
import LoadingSpinner from "../component/LoadingSpinner";
import Contacts from "../component/Contacts";
import Paginations from "../component/Paginations";


function ContactList() {
  // LoadingSpinner 출력하기 위한 조건 지정! console에 2번 찍히는거 막으려는게 아님
  const [loading, setLoading] = useState(false);

  // pageno 받아와야하니까 params 있어야해
  // use로 시작하는 hook들은 어떤 작업을 하기 위해 필요한 상태나 함수들을 리턴
  // null값을 가지는 상태 data와 상태를 변경하는 함수를 리턴하는 usestate hook
  // hook은 use~라는 이름을 가지며, 상태나 함수들을 만들어주는 공장 역할을 담당
  const [data, setData] = useState({
    contacts: [],
    pageno: 0,
    pagesize: 0,
    totalcount: 0,
  });
  const [params] = useSearchParams();
  // 보니까 우리가 params 값을 바꿀 필요가 없어 => 두번째 파라미터 생략하고 첫번째 파라미터만 적어

  // pageno를 꺼내서 숫자로 변환을 하는데 -> pageno가 없는 경우(=null인 경우) Number(null)로 변환하면 0이 나옴 => 조건식 복잡해
  // parseInt를 사용하면 parseInt(null)이 NaN이므로 숫자변환이 불가능한 경우와 함께 간단히 처리할 수 있다

  // 파라미터(지금은 pageno)를 꺼내서 값이없음/숫자로변경불가인 경우 1로 하자 (pageno는 숫자)
  const raw = params.get("pageno"); // 왔다갔다 하는 애들은 다 글자야! 기본적으로 숫자 아님
  // 상태: 계속 유지하는 값. 근데 pageno는 지금 이 내부에서 바뀌지는 않아서 상태 아닌거로 했어
  // parseInt = Number인데 걍 Number 쓰기로 했어,, => 다시 parseInt 쓰기로 했어
  // pageno는 숫자. pageno 없거나 글자인 경우 숫자로 변환하면 NaN
  const pageno = params.get("pageno") == null ? 1 : params.get("pageno");
  // const pagesize = PAGE_SIZE;  // 상수값 import해옴

  useEffect(() => {
    // data 로딩할 때 loading을 true로 만들고 data 로딩 끝나면 loading을 false로 바꿀거야
    setLoading(true);
    async function fetch() {
      try {
        const response = await axios.get(findAllUrl(pageno));
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.log("api 오류", err);
      }
    }
    fetch();
  }, [params]);
  // []에 넣는 친구가 useEffect 밖에 있어야해~

  // 데이터가 없을 때 또는 useEffect로 데이터를 갱신할 때 LoadingSpinner를 띄워라
  if (data.contacts.length == 0 || loading) return <LoadingSpinner />;
  // pageno가 바뀔때 마다 기존 상태로 한번 출력하고 상태가 변경된 다음 한번 출력한다(2번씩 출력)
  // 리액트는 상태가 바뀌면 메모리에서 컴포넌트를 출력한 다음 화면과 비교해 변경된 부분만 갱신한다
  // (2번 출력 중 첫번째, 기존 상태를 출력할 때 변경된 부분이 없으므로 화면은 갱신되지 않는다) -> 신경X
  console.log(data);

  return (
    <>
      <Contacts contacts={data.contacts} />
      <Paginations data={data} />
      {/* 객체로 내보낼기(단점: pagination에는 쓸 일이 없는 contacts가 담김. 근데 이렇게 안내보내면 타이핑할거 너무 많아짐( pageno, pagesize, totalcount )) */}
    </>
  );
}

export default ContactList;
