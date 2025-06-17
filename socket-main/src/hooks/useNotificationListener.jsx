import { useEffect } from "react";
import { toast } from "react-toastify";
import useWebSocketStore from "../stores/useWebSocketStore";

const useNotificationListener = () => {
  const { client } = useWebSocketStore();

  useEffect(() => {
    if (!client) return;

    // onConnect에 구독 로직 등록
    const handleConnect = () => {
      const subscription = client.subscribe("/queue/noti", (message) => {
        const body = message.body;
        console.log("📥 받은 메시지:", body);
        toast.info(`🔔 ${body}`);
      });

      // 연결 해제 시 구독 해제
      return () => {
        subscription.unsubscribe();
      };
    };

    // 이미 연결된 경우
    if (client.connected) {
      return handleConnect();
    }

    // 연결될 때 실행되게 콜백 설정
    client.onConnect = () => {
      handleConnect();
    };

    // cleanup: 컴포넌트 언마운트 시 onConnect 제거
    return () => {
      client.onConnect = null;
    };
  }, [client]);
};

export default useNotificationListener;