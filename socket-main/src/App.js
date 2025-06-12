import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Memo from "./pages/Memo";
import useWebSocketStore from "./stores/useWebSocketStore";

import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Client } from "@stomp/stompjs";
import { useEffect, useRef } from "react";
import SockJS from "sockjs-client";
import useNotificationListener from "./hooks/useNotificationListener";

function App() {
  const clientRef = useRef(null);
  const { setClient } = useWebSocketStore();

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("✅ WebSocket 연결 성공");
      },
      onStompError: (frame) => {
        console.error("❌ STOMP 오류:", frame);
      },
    });

    client.activate();
    clientRef.current = client;
    setClient(client);

    return () => {
      client.deactivate();
    };
  }, [setClient]);

  // 🔔 알림 구독
  useNotificationListener();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={50000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Zoom} />
    </div>
  );
}

export default App;
