import React from 'react';

const CreateTodo = ({ create, change, title, deadline }) => {
    return (
        <div>
            <h5 style={{ fontWeight: 'bold', marginTop: '35px' }}>할 일 추가</h5>
            <div class="mb-3">
                <label htmlFor="title" className="form-label">할 일: </label>
                <input type="text" className="form-control" placeholder="할 일 입력..." name="title" value={title} onChange={change} required />
            </div>
            <div class="mb-3 mt-3">
                <label htmlFor="deadline" className="form-label">마감일: </label>
                <input type="date" className="form-control" name="deadline" value={deadline} onChange={change} required />
            </div>
            <button onClick={create} className='btn btn-primary'>추가</button>
            <br /><br />
        </div>
    );
};

export default CreateTodo;