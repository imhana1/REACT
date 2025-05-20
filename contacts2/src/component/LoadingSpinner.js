import { Spinner } from 'react-bootstrap';
// 깃에 있는 코드 복사해옴!

function LoadingSpinner() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "600px" }} >
            <Spinner animation="border" role="status" />
        </div>
    );
}

export default LoadingSpinner

/*
    1. 부모에 display:flex css를 지정하면 부모의 속성으로 자식들의 배치를 조정할 수 있다
    2. 자식들은 기본 행방향으로(수평) 배치된다 (flex-direction:row) (자식들은 inline-block처럼 움직여?)
    3. 
        ex) <div style='display:flex; justify-content; align-item:center;'>
                <div>A</div>
                <div>B</div>
            </div>
*/