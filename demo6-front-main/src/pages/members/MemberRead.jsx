import { useEffect, useState } from 'react';
import usePasswordStore from '../../stores/usePasswordStore';
import { Navigate, useNavigate } from 'react-router-dom';
import { AsyncStatus } from '../../utils/constant';
import useProfile from '../../hooks/useProfile';
import useSWR from 'swr';
import { Alert } from 'bootstrap';
import LoadingSpinner from "../../components/commons/LoadingSpinner";
import ProfileField from '../../components/members/ProfileField';
import { changeProfile, read } from '../../utils/memberAPI';


const MemberRead = () => {
    // 1. 필요한 기능 가져오기
    // - 비밀번호 변경 버튼의 핸들러에서 사용할 라우팅 훅
    const navigate = useNavigate();
    
    // - 비밀번호 확인 여부를 store에서 가져온다
    const isPasswordVerified = usePasswordStore(state => state.isPasswordVerified);
    
    // - 프사 업데이트 : 프사 훅과 변경 작업 상태
    const [status, setStatus] = useState(AsyncStatus.IDLE);
    const vProfile = useProfile();

    // 2. 내정보 읽어오기
    // - 훅의 리턴이 [](배열)이다 -> 개발자가 이름을 변경할 수 있다.(배열은 이름은 바꿀 수 있지만 순서는 지켜야함) const [count, setCount] = useState();
    // - 훅의 리턴이 {}(객체)다 -> 이름 변경 불가.(이름은 정해져있고 순서는 상관없다)
    const {data, error, isLoading} = useSWR(['me'], ()=>read(), {revalidateOnFocus: false})

    // 3. 상태 변경 : useEffect 또는 이벤트 핸들러
    //    컴포넌트 렌더링하는 도중에 상태를 변경하면 무한 재렌더링
    //    useEffect(()=>{})에 등록된 콜백함수는 렌더링이 끝난 다음에 실행 -> 무한 재렌더링이 발생하지 X
    useEffect(() => {
      if (data)
        vProfile.setPhotoUrl(data.profile);
    }, [data]);

    const doChangeProfile=async()=>{
        if(status === AsyncStatus.SUBMITTING) return;
        setStatus (AsyncStatus.SUBMITTING);

        // photoUrl : 서버에서 받아온 프사, value : 사용자가 선택한 프사
        // 사용자 프로필을 출력만 한 상태에서 변경버튼 누르면 return
        if(!vProfile.value) {
            setStatus(AsyncStatus.IDLE);
            return;
        }

        try {
            const formData = new FormData();
            formData.append('profile', vProfile.value);
            await changeProfile(formData);
            setStatus(AsyncStatus.SUCCESS);
        } catch (err) {
            setStatus(AsyncStatus.FAIL);
            console.log(err);
        }
    }

    // 버튼을 클릭하면 다른 곳으로 이동해라 : navigate
    //      navigate 훅은 화면 렌더링에 관련된 사이드 이펙트이므로 useEffect 또는 이벤트 핸들러에서만 사용
    // 조건부 렌더링 : <Navigate />
    if (!isPasswordVerified) return <Navigate to='/member/check-password' />
    if (isLoading) return <LoadingSpinner />
    if (error) return <Alert variant='danger'>회원정보를 읽을 수 없습니다</Alert>

    console.log(data);
    return (
        <div>
            <table className='table table-border'>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <ProfileField name='photo' label='사진' alt='미리보기' {...vProfile} />
                            <button className='btn btn-primary' onClick={doChangeProfile}>프사 변경</button>
                        </td>
                    </tr>
                    <tr>
                        <td>아이디</td><td>{data.username}</td>
                    </tr>
                    <tr>
                        <td>이메일</td><td>{data.email}</td>
                    </tr>
                    <tr>
                        <td>레벨</td><td>{data.level}</td>
                    </tr>
                    <tr>
                        <td>가입일</td><td>{data.joinDay}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

};

export default MemberRead;