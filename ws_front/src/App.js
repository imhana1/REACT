import React, { useEffect } from "react";
import useAppStore from "./stores/useAppStore";
import { Route, Routes, useLocation } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Nav from "./fragment/Nav";
import Index from "./page/Index";
import axios from "axios";
import Private from "./page/Private";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import UserRoute from "./routes/UserRoute";
import HospitalRoute from "./routes/HospitalRoute";
import Login from "./page/Login";
import User from "./page/User";
import Hospital from "./page/Hospital";
import E403 from "./page/E403";
import NotFound from "./page/NotFound";

function App() {
  // 훅을 통채로 가져온 다음 checkAuth, socket을 꺼낸다
  // 훅에 있는 어떤 상태라도 변경되면 재렌더링
  const { checkAuth, socket } = useAppStore();

  // 훅에 checkAuth만 가져온다
  // const checkAuth = useAppStore(state => state.checkAuth);

  // 주소가 바뀔때마다 로그인 정보를 갱신해라
  const location = useLocation();

  // promise 구조
  // 자바 스크립트에서 비동기 작업의 수행 결과가 Promise
  // Promise 는 언젠가 결과가 도착할 거라는 약속
  // async 함수는 리턴이 있는 것으로 취급된다
  // async 함수는 내부에 await 를 가지고 있다
  // useEffect 의 콜백은 리턴이 없거나 있다면 cleanup 함수다
  // 따라서 useEffect 의 콜백은 async 가 될 수 없다
  // useEffect(async()=> {
  //   await axios.get('주소')
  // })

  useEffect(() => {
    const run = async () => {
      await checkAuth();
    };
    run();
  }, [location]);

  // useEffect는 side effect들을 모아놓은 곳 + 라이프 사이클 관리 함수
  // 라이프 사이클(life cycle, 생명주기, 수명주기) : 생성될때 -> 사용할 때 -> 파괴할 때
  //                                           @PostConstruct           @PreDestroy
  // useEffect의 콜백 파라미터의 리턴 값은 컴포넌트가 파괴될 때 뒷정리하는 cleanup 함수
  // useEffect의 콜백 파라미터는 cleanup 함수를 리턴 한다 -> 다른 걸 리턴할 수 없다
  // useEffect(() => {
  //   console.log("까꿍")
  //   return()=>{
  //     console.log("안녕")
  //   }
  // }, [])

  // 로그인 했으면 toast를 띄울 subscribe를 등록
  useEffect(() => {
    if (!socket) return;
    console.log(socket);
    socket.subscribe("/user/sub/job3", (message) => {
      console.log("aaaaaaaa");
      toast.success("🦄 메시지가 도착했습니다 !", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    });
  }, [socket]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route
          path="/private"
          element={<PrivateRoute element={<Private />} />}
        />
        <Route path="/user" element={<UserRoute element={<User />} />} />
        <Route
          path="/hospital"
          element={<HospitalRoute element={<Hospital />} />}
        />
        <Route path="/e403" element={<E403 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
