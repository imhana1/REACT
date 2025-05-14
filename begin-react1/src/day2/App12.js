import React, { useState } from "react";

// const App12 = () => {
//   const [count, setCount] = useState(1);
//   const [price, setPrice] = useState(1520);

//   const inc = () => setCount(count + 1);
//   const pInc = () => setPrice(price + 1520);

//   return (
//     <div>
//       <h1>상품 </h1>
//       <h1>구매 예정 금액</h1> <br />
//       <img
//         src="https://i.namu.wiki/i/28AIf1wLCcRwVKsiA1eyMc7BWfU8nZ6AgS4SalAVXjcLmQnxuFB_akyoO7hKwsusbRDbjw3sQ2IaJahilyZmbw.webp"
//         width="250px"
//       />
//       <div>{price}원</div>
//       <button
//         onClick={() => {
//           inc();
//           pInc();
//         }}
//       >
//         +
//       </button>
//       <div>{count}</div>
//       <button
//         onClick={() => {
//           if (count > 1) {
//             setCount(count - 1);
//             setPrice(price - 1520);
//           }
//         }}
//       >
//         -
//       </button>
//     </div>
//   );
// };
//======================================================
// 선생님이랑 한 코드

const product = {
  name: "홈런볼 초코",
  price: 1520,
  image:
    "https://i.namu.wiki/i/28AIf1wLCcRwVKsiA1eyMc7BWfU8nZ6AgS4SalAVXjcLmQnxuFB_akyoO7hKwsusbRDbjw3sQ2IaJahilyZmbw.webp",
  count: 1,
};

const App12 = () => {
  const [item, setItem] = useState(product);

  // 리액트는 새로운 객체가 만들어져야 상태가 변경되었다는 사실을 눈치채고 재 렌더링
  // vue는 기존 객체의 값을 바꿔야 상태가 변경되었다는 사실을 눈치채고 재 렌더링
  const inc = () => {
    setItem({ ...item, count: item.count + 1 });
  };

  const dec = () => {
    let count = item.count;
    if (count > 1) {
      setItem({ ...item, count: item.count - 1 });
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>상품</th>
          <th>구매 예정 금액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={item.image} width="200px" />
          </td>
          <td>{item.price * item.count}원</td>
          <td>
            <button onClick={inc}>+</button>
            <span>{item.count}</span>
            <button onClick={dec}>-</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default App12;
