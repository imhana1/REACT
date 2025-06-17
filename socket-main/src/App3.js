import { useCallback, useState } from "react";
import useWebSocket1 from "./hooks/useWebSocket1";
import api from "./utils/api";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState("");

  // 메시지 수신 시 textarea 업데이트
  const handleMessageReceived = useCallback((msg) => {
    console.log(msg);
    setMessages((prev) => prev + msg + "\n");
  }, []);

  const clientRef = useWebSocket1(handleMessageReceived);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (clientRef.current && clientRef.current.connected) {
        clientRef.current.publish({
          destination: "/pub/echo2", 
          body: input,
        });
        setInput("");
      }
    }
  };

  const login=async(username)=>{
    const requestForm = {username:username, password:'1234'};
    try {
      const response = await api.post('/login', new URLSearchParams(requestForm));
      console.log(response);
    } catch(err) {
      console.log(err);
    } 
  }

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="메시지 입력 후 Enter" />
      <textarea value={messages} readOnly rows={10} style={{ width: "100%", marginTop: "10px" }} />
      <button onClick={()=>login('spring')}>스프링 로그인</button>
      <button onClick={()=>login('winter')}>윈터 로그인</button>
    </div>
  );
}

export default App;
