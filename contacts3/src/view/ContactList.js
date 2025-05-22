import React from 'react'
import Contacts from '../component/Contacts'
import Paginations from '../component/Paginations'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hook/useFetch';
import { API_URL, PAGE_SIZE } from '../component/constants';
import LoadingSpinner from '../component/LoadingSpinner';

function ContactList() {
  // 1. pageno 분리
  const [params] = useSearchParams();
  // - 숫자 1자 이상이라고 패턴 지정
  const pattern = /^[0-9]{1,}$/;
  const raw = params.get('pageno');
  let pageno = pattern.test(raw)? parseInt(raw): 1;
  pageno = pageno===0? 1: pageno; 

  // useFetch 커스텀 훅을 이용
  const {data, loading, error} = useFetch(`${API_URL}?pageno=${pageno}&pagesize=${PAGE_SIZE}`);

  if(loading) return <LoadingSpinner />
  if(error) return <div>에러 발생: {error.message}</div>
  if(!data) return null;

  return (
    <div>
      <Contacts contacts={data.contacts}/>
      <Paginations data={data} />
    </div>
  )
}

export default ContactList