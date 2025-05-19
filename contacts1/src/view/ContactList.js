import axios from "axios";
import React, { useEffect, useState } from "react";
import Paigination from "../component/Paigination";
import Contacts from "../component/Contacts";
import Loading from "../component/Loading";

const ContactList = () => {
  const PAGE_SIZE = 10;
  const [pageno, setPageno] = useState(1);
  // pageno = 1 -> totalcount, contacts
  const [data, setData] = useState({ contacts: [], totalcount: 0 });

  useEffect(() => {
    // async 지정 불가, 필요한 경우 함수를 다시 만든다
    async function fetch() {
      try {
        const response = await axios.get(
          `https://sample.bmaster.kro.kr/contacts?pageno=${pageno}&pagesize=${PAGE_SIZE}`
        );
        const { contacts, totalcount } = response.data;
        setData({ contacts, totalcount });
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);

  if (data.contacts.length == 0) 
   return <Loading />

  return (
    <div>
      <Contacts contacts={data.contacts} />
      <Paigination />
    </div>
  );
};

export default ContactList;
