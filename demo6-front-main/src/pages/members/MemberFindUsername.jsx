import React, { useState } from 'react';
import useEmail from '../../hooks/useEmail';
import { AsyncStatus } from '../../utils/constant';
import { Alert } from 'react-bootstrap';
import TextField from '../../components/commons/TextField';
import BlockButton from '../../components/commons/BlockButton';
import { findUsername } from '../../utils/memberApi';

const MemberFindUsername = () => {
    const vEmail = useEmail();
    const [submittingStatus, setSubmittingStatus] = useState(AsyncStatus.IDLE);
    const [username, setUsername] = useState('');

    const doFindUsername = async () => {
        setUsername('');
        setSubmittingStatus(AsyncStatus.SUBMITTING);

        if (!vEmail.onBlur()) {
            setSubmittingStatus(AsyncStatus.IDLE);
            return;
        }

        try {
            const response = await findUsername(vEmail.value);
            setUsername(response.data);
            setSubmittingStatus(AsyncStatus.SUCCESS);
        } catch(err) {
            setSubmittingStatus(AsyncStatus.FAIL);
            console.log(err);
        }
    }

    const onBlur = () => {
        // 현재 출력된 결과를 지운 다음, 이메일을 검증
        setSubmittingStatus(AsyncStatus.IDLE);
        setUsername('');
        vEmail.onBlur();
    }

    return (
        <div>
            {submittingStatus === AsyncStatus.SUCCESS && <Alert variant='success'>아이디 : {username}</Alert>}
            {submittingStatus === AsyncStatus.FAIL && <Alert variant='danger'>아이디를 찾지 못했습니다</Alert>}
            <TextField label='이메일' name='email' message={vEmail.message} onChange={vEmail.onChange} onBlur={onBlur} />
            <BlockButton label = {submittingStatus === AsyncStatus.SUBMITTING ? "검색중" : "아이디 찾기"}
                onClick={doFindUsername} styleName='dark' disabled={submittingStatus === AsyncStatus. SUBMITTING} />
        </div>
    );
};

export default MemberFindUsername;