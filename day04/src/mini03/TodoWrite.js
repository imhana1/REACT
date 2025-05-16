import axios from "axios";
import React, { useState } from "react";

const TodoWrite = () => {
  const [inputs, setInputs] = useState({ title: "", deadline: "", memo: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const doWrite = async () => {
    try {
      const response = await axios.post(
        "https://mini03.onrender.com/todos/new",
        inputs
      );
      window.location.href = `/todo/read?tno=${response.data.tno}`;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div class="mb-3 mt-3">
        <label htmlFor="title" className="form-label">
          할 일
        </label>
        <input
          type="title"
          className="form-control"
          placeholder="할 일 추가"
          name="title"
          onChange={onChange}
        />
      </div>
      <div class="mb-3">
        <label htmlFor="deadline" className="form-label">
          마감 일 :
        </label>
        <input
          type="date"
          className="form-control"
          name="deadline"
          onChange={onChange}
        />
      </div>
      <div class="form-check mb-3">
        <label htmlFor="memo">상세 내용 :</label>
        <textarea
          className="form-control"
          rows="5"
          name="memo"
          onChange={onChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={doWrite}>
        작성
      </button>
    </div>
  );
};

export default TodoWrite;
