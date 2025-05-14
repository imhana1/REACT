import React, { useState } from "react";

const App11 = () => {
  const on = "https://www.w3schools.com/js/pic_bulbon.gif";
  const off = "https://www.w3schools.com/js/pic_bulboff.gif";

  const [url, setUrl] = useState(off);
  const [title, setTitle] = useState("켜기");

  const toggle = () => {
    if (title === "켜기") {
      setUrl(on);
      setTitle("끄기");
    } else {
      setUrl(off);
      setTitle("켜기");
    }
  };

  return (
    <div>
      <img src={url} />
      <button onClick={toggle}>{title}</button>
    </div>
  );
};

export default App11;
