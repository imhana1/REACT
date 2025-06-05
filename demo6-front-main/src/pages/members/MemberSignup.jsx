// 아이디, 비번, 비번확인, 이메일

import { useState } from "react";
import BlockButton from "../../components/commons/BlockButton";
import TextField from "../../components/commons/TextField"
import ProfileField from "../../components/members/ProfileField";
import useConfirmPassword from "../../hooks/useConfirmPassword";
import useEmail from "../../hooks/useEmail";
import usePassword from "../../hooks/usePassword"
import useProfile from "../../hooks/useProfile";
import useUsername from "../../hooks/useUsername";
import api from "../../utils/api";
import { AsyncStatus } from "../../utils/constant";
import { Alert } from "react-bootstrap";
import { signup } from "../../utils/memberApi";

function MemberSignup() {
  const [submittingStatus, setSubmittingStatus] = useState(AsyncStatus.IDLE);

  const vProfile = useProfile();
  const vUsername = useUsername(true);
  const vPassword = usePassword();
  const vConfirmPassword= useConfirmPassword(vPassword);
  const vEmail = useEmail();

  const dosignup=async()=>{
    setSubmittingStatus(AsyncStatus.SUBMITTING);

    const r1 = vUsername.onBlur();
    const r2 = vPassword.onBlur();
    const r3 = vConfirmPassword.onBlur();
    const r4 = vEmail.onBlur();
    if(!(r1 && r2 && r3 && r4)) { 
      setSubmittingStatus(AsyncStatus.IDLE)
      return;
    }
    const formData = new FormData();
    formData.append('profile', vProfile.value);
    formData.append('username', vUsername.value);
    formData.append('password', vPassword.value);
    formData.append('email', vEmail.value);

    try {
      const response = await signup(formData);
      setSubmittingStatus(AsyncStatus.SUCCESS);
    } catch(err) {
      setSubmittingStatus(AsyncStatus.FAIL);
      console.log(err);
    }
  }

  if (submittingStatus === AsyncStatus.SUCCESS) {
    return (
      <Alert variant="success">가입 확인 메일을 보냈습니다. 이메일을 확인하세요</Alert>
    )
  }

  return (
    <div>
      {submittingStatus === AsyncStatus.FAIL && <Alert variant="danger">회원 가입에 실패했습니다</Alert>}
      <ProfileField name='profile' label='프로필' {...vProfile} />
      <TextField name='username' label='아이디' {...vUsername} />
      <TextField name='password' type='password' label='비밀번호' {...vPassword} />
      <TextField name='password' type='password' label='비밀번호 확인' {...vConfirmPassword} />
      <TextField name='email' label='이메일' {...vEmail} />
      {/* 
        버튼을 클릭하면 버튼을 비활성하고, 글자를 가입 처리중으로 바꿔라
      */}
      <BlockButton label={submittingStatus === AsyncStatus.SUBMITTING ? "가입 처리 중" : "회원 가입"} 
      styleName='primary' onClick={dosignup} 
      disabled={submittingStatus === AsyncStatus.SUBMITTING} />
    </div>


  )
}

export default MemberSignup