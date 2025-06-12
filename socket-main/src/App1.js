import React, { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

function App() {
  // 컴포넌트 리렌더링될 때 유지하기 위해서
  const client = useRef(null);
  const [receivedMessage, setReceivedMessage] = useState("");

  // SockJS + STOMP 클라이언트 생성
  // SockJS: WebSocket 연결을 더 안정적이고 폭넓게 지원하도록 도와주는 전송 계층 라이브러리
  // STOMP: WebSocket 위에서 동작하는 메시지 프로토콜 (pub/sub)
  
  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const stompClient = new Client({
      webSocketFactory: () => socket,
      // stomp 클라이언트 내부 로그를 출력
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("✅ STOMP connected");

        // 1. 메시지 수신 구독
        stompClient.subscribe("/sub/chat", (message) => {
          console.log("📩 받은 메시지:", message.body);
          setReceivedMessage(message.body);
        });

        // 2. 메시지 전송 (한 번만 테스트)
        stompClient.publish({
          destination: "/pub/echo",
          body: "hello",
        });
      },
    });

    stompClient.activate();
    client.current = stompClient;

    return () => {
      stompClient.deactivate();
    };
  }, []);

  return (
    <div>
      <h2>에코 메시지 테스트</h2>
      <p>서버로부터 받은 메시지: <strong>{receivedMessage}</strong></p>
    </div>
  );
}

export default App;
