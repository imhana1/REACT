import React from "react";

const User = ({ user, onRemove }) => {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <button onClick={() => onRemove(user.id)}>삭제</button>
      </td>
    </tr>
  );
};

export default User;
