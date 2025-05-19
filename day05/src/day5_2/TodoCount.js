import React, { useEffect, useState } from 'react';

const TodoCount = ({ todos }) => {
    const [ finishCount, setFinishCount ] = useState(0);

    useEffect (() => {
        let finish = 0;
        for(const todo of todos) {
            if(todo.finish)
                finish ++;
        }
        setFinishCount(finish);
    }, [todos])

    return (
        <div>
            할 일 : {todos.length}개, 완료 : {finishCount}개        
        </div>
    );
};

export default TodoCount;