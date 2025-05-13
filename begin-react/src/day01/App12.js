import React from 'react';

// JSX 내부에서는 for 문을 사용 X -> 출력할 값 들을 배열을 생성한 다음 map을 돌린다
const App12 = () => {
    const start = 1;
    const end = 5;
    const pagination = [];
    for(let i = start; i <= end; i++)
        pagination.push(i);
    return (
        <div>
            <ul>
                {
                    pagination.map(page => <li>{page}</li>)
                }
            </ul>
        </div>
    );
};

export default App12;