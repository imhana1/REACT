import React from "react";

const CreateUser = ({ create, change, username, email }) => {
  return (
    <>
      <input type="text" name="username" placeholder="아이디" onChange={change} value={username} />
      <input type="email" name="email" placeholder="이메일" onChange={change} value={email} />
      <button onClick={create} >추가</button>
    </>
  );
};

export default CreateUser;
