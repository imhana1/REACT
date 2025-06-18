import { Client } from '@stomp/stompjs';
import React, { useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';


// 1. 커스텀 훅 : 리액트 훅을 사용해서 만든 재사용 가능한 모듈로 use~ 로 시작하는 이름을 가진다
// 2. 커스텀 훅은 컴포넌트 함수 또는 다른 커스텀 훅 내부에서만 사용할 수 있다
// 3. 조건문이나 루프 안에서 호출하면 안된다
//      function App {
//          const [a, setA] = useState(10);
//          const tests = () => {
//              const [b, Setb] = useState(10); ---> XXX 안됨
//          }
//          if(로그인 === true) {
//              const socket = useWs();  -----> XXXXXXX 안돼!
//          }
//      }

const useWs = (url, handler) => {
    const socket = useRef(null);

    useEffect (() => {
        const client = new Client({
            reconnectDelay: 5000,
            webSocketFactory:() => new SockJS("http://localhost:8080/ws"),
            onConnect:() => {
                console.log("웹소켓 연결");
                // 수신 주소, 수신할 때 수행할 동작을 컴포넌트마다 다르게 하겠다
                client.subscribe(url, handler);
            }
        });
        client.activate();
        socket.current = client;
    }, [url]);
    

    return socket;
};

export default useWs;