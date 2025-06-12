import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { useEffect, useRef } from "react";

// STOMP 클라이언트 생성
const useWebSocket1 = (onMessageReceived) => {
  const clientRef = useRef(null);

  useEffect(() => {
    const client = new Client({
      reconnectDelay: 5000,
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      onConnect: () => {
        console.log("✅ WebSocket 연결 성공");
        client.subscribe("/sub/chat2", (message) => {
          console.log("📥 받은 메시지:", message.body);
          onMessageReceived(message.body); 
        });
      },
      onStompError: (frame) => console.error("❌ STOMP 오류:", frame)
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, []);

  return clientRef;
};

export default useWebSocket1;