import axios from "axios";
import React, { useEffect, useState } from "react";

const SupplyList = () => {
  const [supplies, setSupplies] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(
          "https://mini03.onrender.com/supplies"
        );
        setSupplies(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);

  if (supplies == null) return;

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>등록일</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {supplies.map((supply) => {
            return (
              <tr>
                <td>{supply.sno}</td>
                <td>
                  <a href={`/supply/read?sno=${supply.sno}`} />
                  {supply.name}
                </td>
                <td>{supply.regDate}</td>
                <td>{supply.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a href="/supply/write" type="button" className="btn btn-primary">
        상품 추가
      </a>
    </div>
  );
};

export default SupplyList;
