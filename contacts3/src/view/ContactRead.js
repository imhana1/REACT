import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useFetch from '../hook/useFetch';
import { API_URL } from '../component/constants';
import LoadingSpinner from '../component/LoadingSpinner';
import axios from 'axios';

function ContactRead() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const no = params.get('no');
  if(!no)
    navigate("/");
  const {data, loading, error} = useFetch(`${API_URL}/${no}`);

  const remove=()=>axios.delete(`${API_URL}/${no}`).then(()=>navigate("/")).catch(err=>console.log(err));

  if(loading) return <LoadingSpinner />
  if(error) return <div>에러 발생: {error.message}</div>
  if(!data) return null;

  return (
    <>
      <table>
        <tbody>
          <tr><td><img src={data.photo} style={{height:'200px', objectFit:'cover'}} /></td></tr>
          <tr><td>{data.name}</td></tr>
          <tr><td>{data.address}</td></tr>
          <tr><td>{data.tel}</td></tr>
        </tbody>
      </table>
      <button className='btn btn-success' onClick={()=>navigate(`/update?no=${no}`)}>변경하기</button>
      &nbsp;&nbsp;&nbsp;
      <button className='btn btn-danger' onClick={remove}>삭제하기</button>
    </>
  )
}

export default ContactRead