import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hook/useFetch';
import { API_URL } from '../component/constants';
import useInput from '../hook/useInput';

// 설명용 

function ContactUpdate_1() {
    // 서버에서 Contact를 수신 -> 상태변경 -> 렌더링 시작
    const { data } = useFetch();

    // 렌더링이 끝나기 전에 (=렌더링하는도중에. 렌더링은 리턴까지 가야 끝나) 다른 상태 변경 (useinput안에상태가들었으니까) -> 재렌더링이 발생
    // => 무한루프 발생
    const nameInput = useInput(data.name);  // <- 즉 이 상태 변경하는 코드가  useEffect 안으로 들어갔어야 무한루프 안생겼을거야? 

    // Q. 그럼 상태는 어디에서 바꿔야해? A. 렌더링 도중이 아닌 경우~
    // "렌더링 도중에 상태를 바꾸면 안된다." 렌더링 시작 전 or 렌더링 끝난 후

    // 1. 렌더링이 시작하기 전: ex) 이벤트 핸들러 (이벤트처리하는코드) (ex onClick={()=>setCount(prev=>prev+1)})
    //      버튼을 클릭하면 렌더링이 시작됨
    // 2. useEffect() 내부
    //      useEffect에서 상태를 변경하면 즉시 실행하는 것이 아니라 렌더링이 끝난 다음에 실행
    //          ex Spring에서 따지면 @PostConstruct같은~
    //      useEffect 내부에 상태를 변경하는 코드를 작성하면 나중에 실행해달라고 예약하는 것이다(즉시실행하는게아니라~) <-라고 기억해

    return (
        <div>

        </div>
    )
}

export default ContactUpdate_1