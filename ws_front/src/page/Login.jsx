import React from "react";
import useAppStore from "../stores/useAppStore";
import axios from "axios";

const Login = () => {
  const { username, setLogin } = useAppStore();

  const doLogin = async (id) => {
    const requestForm = { username: id, password: "1234" };

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        new URLSearchParams(requestForm),
        { withCredentials: true }
      );
      const { username, role } = response.data;
      setLogin(username, role);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button
        onClick={() => doLogin("spring")}
        disabled={username && username !== ""}
      >
        spring Login
      </button>
      <button
        onClick={() => doLogin("summer")}
        disabled={username && username !== ""}
      >
        summer Login
      </button>
      <button
        onClick={() => doLogin("winter")}
        disabled={username && username !== ""}
      >
        winter Login
      </button>
    </div>
  );
};

export default Login;
