import React, { useState } from "react";

const App10 = () => {
  const on = "https://www.w3schools.com/js/pic_bulbon.gif";
  const off = "https://www.w3schools.com/js/pic_bulboff.gif";
  const [url, setUrl] = useState(off);

  const 켜기 = () => setUrl(on);

  return (
    <div>
      <button onClick={켜기}>켜기</button>
      <img src={url} />
      <button onClick={() => setUrl(off)}>끄기</button>
    </div>
  );
};

export default App10;
