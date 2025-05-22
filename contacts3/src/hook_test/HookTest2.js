import axios from 'axios';
import React, { useEffect, useState } from 'react'

// api을 get으로 읽어오는 기능을 분리
function useContacts(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    if(!url)
      return;

    // finally : 성공하든 실패하든 무조건 실행
    // 예) 게임 설치 -> 설치에 성공하는 실패하든, 설치 관련 작업 파일은 삭제해라
    axios.get(url).then(res=>setData(res.data)).catch(err=>setError(err)).finally(()=>setLoading(false));
  }, [])

  return {data, loading, error};
}


function HookTest2() {
  const {data, loading, error} = useContacts('https://sample.bmaster.kro.kr/contacts');
  console.log("============================");

  if(loading) return <div>로딩중...</div>
  if(error) return <div>{error.message}</div>
  if(!data) return null;
  return (
    <div>HookTest2</div>
  )
}

export default HookTest2