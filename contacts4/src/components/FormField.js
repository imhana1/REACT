// 입력상자 + 에러메시지 출력 UI를 컴포넌트로 구성

// FormField(요소 name, 한글이름, )
// name : 요소의 name 문자열
// label : 한글 문자열
// onChange, onBlur, message, value : useInput 커스텀 훅

function FormField({name, label, onChange, onBlur, message, value, readOnly = false}) {
  return (
    <div className='mt-3 mb-3'>
      <label htmlFor={name} className='form-label'>{label}:</label>
      <input type='text' className='form-control' name={name} onChange={onChange}  onBlur={onBlur} value={value} readOnly={readOnly}/>
      {message!=='' && <span style={{color:'red'}}>{message}</span>}
    </div>
  )
}

export default FormField