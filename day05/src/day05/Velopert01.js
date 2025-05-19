import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

const Velopert01 = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "velopert", email: "public.velopert@gmail.com" },
    { id: 2, username: "tester", email: "tester@example.com" },
    { id: 3, username: "liz", email: "liz@example.com" },
  ]);

  const [id, setId] = useState(4);

  const [inputs, setinputs] = useState({ username: "", email: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setinputs((prev) => ({ ...prev, [name]: value }));
  };

  const onCreate = () => {
    const newUser = { id: id, username: inputs.username, email: inputs.email };
    setId((prev) => prev + 1);
    setUsers((prev) => [...prev, newUser]);
    // 입력한 기존 데이터 삭제
    setinputs({ username: "", email: "" });
  };

  const onRemove = (id) =>
    setUsers((prev) => prev.filter((user) => user.id !== id));

  return (
    <div>
      <CreateUser
        onChange={onChange}
        onCreate={onCreate}
        username={inputs.username}
        email={inputs.email}
      />
      <UserList users={users} onRemove={onRemove} />
    </div>
  );
};

export default Velopert01;
