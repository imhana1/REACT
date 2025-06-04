// 데이터를 출력할 때는 store(데이터) + UI 컴포넌트
// 데이터를 입력받을 때는 커스텀 훅(데이터, 검증) + UI 컴포넌트
//   useUsername, useEmail, usePassword, useConfirmPassword + TextField


function TextField({name, type='text', label, onChange, onBlur, message}) {
  return (
    <div className='mb-3 mt-3'>
      <label htmlFor={name} className='form-label'>{label}:</label>
      <input type={type} className='form-control' onChange={onChange} onBlur={onBlur} />
      {message!=='' && <span style={{color:'red'}}>{message}</span>}
    </div>
  )
}

export default TextField;