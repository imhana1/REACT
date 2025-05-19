import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../component/Loading";

const ContactRead = () => {
  const [contact, setContact] = useState();
  // location.search를 다루는 react router 훅(리액트 훅은 use~로 시작)
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const no = params.get("no");

  useEffect(() => {
    // no가 없을 경우 /로 이동. navigate()는 함수 내부에서 호출해야한다
    if (no == null) navigate("/");
    async function fetch() {
      const response = await axios.get(
        `https://sample.bmaster.kro.kr/contacts/${no}`
      );
      setContact(response.data);
    }
    fetch();
  }, []);

  if (contact === undefined) 
    return <Loading />;

  const remove = async () => {
    try {
        axios.delete(`https://sample.bmaster.kro.kr/contacts/${no}`);
        navigate("/");
    } catch(err){
        console.log(err);
    }
  }

  return (
    <>
      <table className="table table-border">
        <tbody>
          <tr>
            <td><img src={contact.photo} /></td>
          </tr>
          <tr>
            <td>{contact.name}</td>
          </tr>
          <tr>
            <td>{contact.tel}</td>
          </tr>
          <tr>
            <td>{contact.address}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => navigate(`/update?no=${no}`)}>
        변경
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-danger" onClick={remove}>삭제</button>
    </>
  );
};

export default ContactRead;
