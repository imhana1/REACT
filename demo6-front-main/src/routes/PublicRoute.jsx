// 비로그인이면 접근 가능

import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

const PublicRoute = ({ element }) => {
    const username = useAuthStore(state => state.username);

    if (username === undefined)
        return;


    // 로그인이 되어 있다면 루트 경로를 렌더링 해라, 비로그인이면 전달받은 element를 렌더링해라
    return username ? <Navigate to="/" /> : element;
};

export default PublicRoute;