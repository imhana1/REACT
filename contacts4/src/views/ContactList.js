import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { API_URL, PAGE_SIZE } from "../components/constants";
import LoadingSpinner from "../components/LoadingSpinner";
import Contacts from "../components/Contacts";
import Paginations from "../components/Paginations";

const ContactList = () => {
  // /?pageno=n 처리
  const [params] = useSearchParams();
  const raw = params.get("pageno");
  const pattern = /^[0-9]{1,}$/;
  let pageno = pattern.test(raw) ? parseInt(raw) : 1;
  pageno = pageno === 0 ? 1 : pageno;

  const { data, loading, error } = useFetch(
    `${API_URL}?pageno=${pageno}&pagesize=${PAGE_SIZE}`
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <div>{error.message}</div>;
  if (!data) return null;

  
  return (
    <div>
      <Contacts contacts={data.contacts} />
      <Paginations data={data} />
    </div>
  );
};

export default ContactList;
