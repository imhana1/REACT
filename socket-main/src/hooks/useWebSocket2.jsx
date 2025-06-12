import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { useEffect, useRef } from "react";

const useWebSocket2 = () => {
  const clientRef = useRef(null);

  useEffect(() => {
     const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      reconnectDelay: 5000,

      onConnect: () => {
        console.log("✅ WebSocket 연결 성공");
        client.subscribe("/queue/noti", (message) => {
          console.log("📥 받은 메시지:", message.body);  
        });
      },

      onStompError: (frame) => {
        console.error("❌ STOMP 오류:", frame);
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  },[]);

  return clientRef;
};

export default useWebSocket2;