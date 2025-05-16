import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const [items, setItems] = useState([
    { no: 111, name: "마가렛트", price: 2990, stock: 7, count: 1 },
    { no: 115, name: "칸쵸", price: 1190, stock: 5, count: 1 },
    { no: 211, name: "홈런볼", price: 1520, stock: 6, count: 1 },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;

    for (const item of items) {
      sum = sum + item.count * item.price;
    }
    setTotalPrice(sum);
  }, [items]);

  const remove = (no) => setItems(items.filter((item) => item.no !== no));

  const dec = (no) => {
    // items.map(item => item.no === no ? {개수 감수한 객체} : item)
    setItems(prev =>
      prev.map(item =>
        (item.no === no && item.count > 1) ? { ...item, count: item.count - 1 } : item)
    );
  };

  const inc = (no) => {
    setItems(prev => 
      prev.map(item => (item.no === no && item.count < item.stock) ? {...item, count: item.count + 1} : item)
    );
  }

  return (
    <div>
      <table className="table table-border">
        <thead>
          <tr>
            <th>상품 정보</th>
            <th>구매 예정 금액</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.price * item.count} 원</td>
                <td>
                  <button className="btn btn-primary" onClick={() => inc(item.no)}> + </button>
                  <span> {item.count} </span>
                  <button className="btn btn-primary" onClick={() => dec(item.no)}> - </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => remove(item.no)}
                  >
                    {" "}
                    삭제{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <b>총 금액 : {totalPrice} 원</b>
    </div>
  );
};

export default Cart;
