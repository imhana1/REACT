import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Memo() {
  const handleClick = () => {
    toast.success('버튼을 클릭했습니다!', {
      position: "top-right",
      autoClose: 5000,
    });
  };

  return (
    <div>
      <button onClick={handleClick}>토스트 띄우기</button>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Zoom} />
      <h1>메모보내기</h1>
      <div className='mb-3 mt-3'>
        <label htmlFor='username' className='form-label'>받는이:</label>
        <input name="username" className='fom-control' />
      </div>
      <div className='mb-3 mt-3'>
        <label htmlFor='content' className='form-label'></label>
        <textarea name='content' cols='5' className='form-control'></textarea>
      </div>
      <div className='mb-3 mt-3'>
        <button className='btn btn-primary'>보내기</button>
      </div>
    </div>
  )
}

export default Memo