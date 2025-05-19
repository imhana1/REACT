import React, { useEffect, useState } from 'react';

const UserCount = ({ users }) => {
    const[activeCount, setActiveCount] = useState(0);

    useEffect(() => {
        let active = 0;
        for(const user of users) {
            if(user.active)
                active++;
        }
        setActiveCount(active);
    }, [users]);

    return (
        <div>
            {/* 총 인원수, active인원수 */}
            총 유저수 : {users.length}명, 액티브 유저수 : {activeCount}명
        </div>
    );
};

export default UserCount;