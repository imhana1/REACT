import { useState } from "react";
import BlockButton from "../../components/commons/BlockButton";
import TextField from "../../components/commons/TextField";
import usePassword from "../../hooks/usePassword";
import useUsername from "../../hooks/useUsername";
import { AsyncStatus } from "../../utils/constant";
import { login } from "../../utils/memberApi";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import useAuthStore from "../../stores/useAuthStore";

const MemberLogin = () => {
    const vUsername = useUsername();
    const vPassword = usePassword();
    const [submittingStatus, setSubmittingStatus] =useState(AsyncStatus.IDLE);
    const [status, setStatus] = useState(0);
    const navigate = useNavigate();
    const setUsername = useAuthStore(state=> state.setUsername);

    const doLogin = async() => {
        setSubmittingStatus(AsyncStatus.SUBMITTING);
        const r1 = vUsername.onBlur();
        const r2 = vPassword.onBlur();
        if(! (r1 && r2)) {
            setSubmittingStatus(AsyncStatus.IDLE);
            return;
        }

        try {
            const params = {username : vUsername.value, password : vPassword.value}
            await login(params);
            // 로그인 성공하면 store에 아이디를 기록한 다음 /로 이동
            setSubmittingStatus(AsyncStatus.SUCCESS);  
            setUsername(vUsername.value)
            navigate("/");
            return; 
        } catch(err) {
            setSubmittingStatus(AsyncStatus.FAIL)
            setStatus(err.status);
            console.log(err);
        }
    }

    return (
        <div>
            {(submittingStatus === AsyncStatus.FAIL && status === 401) && <Alert variant="danger">아이디나 비밀번호를 확인하세요</Alert>}
            {(submittingStatus === AsyncStatus.FAIL && status === 403) && <Alert variant="danger">확인되지 않은 계정. 이메일을 확인하세요</Alert>}
            <TextField label='아이디' name='username' {...vUsername} />
            <TextField label='비밀번호' name='password' type="password" {...vPassword} />
            <BlockButton label={submittingStatus === AsyncStatus.SUBMITTING ? "로그인 처리 중" : "로그인"} 
            styleName='primary' onClick={doLogin} 
            disabled={submittingStatus === AsyncStatus.SUBMITTING} />
        </div>
    );
};

export default MemberLogin;