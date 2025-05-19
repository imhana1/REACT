import React from "react";

const User = ({ user, remove, toggle }) => {
  return (
    <li>
      <span style={{color: user.active ? 'green' : 'black', cursor: 'pointer'}} onClick={() => toggle(user.id)}>
      {`${user.username} (${user.email})`}
      </span>
      <button onClick={() => remove(user.id)}>삭제</button>
    </li>
  );
};

export default User;
