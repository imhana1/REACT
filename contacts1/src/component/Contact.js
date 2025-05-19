import React from "react";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  return (
    <tr>
      <td>{contact.no}</td>
      <td>
        {/* 리액트, vue는 Single Page Application을 구성 */}
        {/* a태그는 화면을 이동시킨다 -> SPA에서는 사용 금지 */}
        <Link to={`/read?no=${contact.no}`}>{contact.name}</Link>
      </td>
      <td>{contact.tel}</td>
      <td>{contact.address}</td>
    </tr>
  );
};

export default Contact;
