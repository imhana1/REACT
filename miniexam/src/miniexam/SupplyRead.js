import axios from "axios";
import React, { useEffect, useState } from "react";

const SupplyRead = () => {
  const [supply, setSupply] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const sno = searchParams.get("sno");

    if (sno == null || sno == "" || isNaN(Number(sno)))
      window.location.href = "/supply/list";
    async function fetch() {
      try {
        const response = await axios.get(
          `https://mini03.onrender.com/supplies/${sno}`
        );
        setSupply(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
    console.log(sno);
  });

  const toggle = async (sno) => {
    try {
      const response = await axios.put(
        `https://mini03.onrender.com/supplies/toggle/${sno}`
      );
      setSupply((prev) => ({ ...prev, finish: response.data }));
    } catch (err) {
      console.log(err);
    }
  };

  const inc = () => {
    setSupply({ ...supply, count: supply.count + 1 });
  };

  const dec = () => {
    let count = supply.count;
    if (count > 1) {
      setSupply({ ...supply, count: supply.count - 1 });
    }
  };

  const remove = async (sno) => {
    try {
      await axios.delete(`https://mini03.onrender.com/supplies/${sno}`);
      window.location.href = "supply/list";
    } catch (err) {
      console.log(err);
    }
  };

  if (supply == null) return;

  return (
    <div>
      <div>
        <table className="table table-border">
          <tbody>
            <tr>
              <td>상품번호</td>
              <td>{supply.sno}</td>
            </tr>
            <tr>
              <td>상품명</td>
              <td>{supply.name}</td>
            </tr>
            <tr>
              <td>입고일</td>
              <td>{supply.regDate}</td>
            </tr>
            <tr>
              <td>수량</td>
              <td>{supply.quantity}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-success" onClick={inc}>
          {" "}
          +{" "}
        </button>
        <span>{supply.count}</span>
        <button className="btn btn-success" onClick={dec}>
          {" "}
          -{" "}
        </button>
        <button className="btn btn-danger" onClick={() => remove(supply.sno)}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default SupplyRead;
