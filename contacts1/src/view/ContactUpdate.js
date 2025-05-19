import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../component/Loading";

const ContactUpdate = () => {
  const [contact, setContact] = useState(null);
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

  const change = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const update = () => {
    try {
      axios.put(`https://sample.bmaster.kro.kr/contacts/${no}`, contact);
      navigate(`/read?no=${no}`);
    } catch (err) {
      console.log(err);
    }
  };

  if (contact == null)
    return <Loading />

  return (
    <div>
      <input type="text" name="name" placeholder="이름" value={contact.name} onChange={change} /> <br />
      <input type="text" name="tel" placeholder="연락처" value={contact.tel} onChange={change} /> <br />
      <input type="text" name="address" placeholder="주소" value={contact.address} onChange={change} /> <br />
      <button className="btn btn-primary" onClick={update}>수정</button>
    </div>
  );
};

export default ContactUpdate;
