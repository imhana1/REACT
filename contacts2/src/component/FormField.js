import React from 'react'

// undefined를 넣으면 React는 이 input을 uncontrolled로 간주합니다.
// 즉, 해당 input은 내부적으로 자체 상태를 관리하게 되며, 이건 file input에 적합합니다.
function FormField({ label, name, type = 'text', value, onChange }) {
  return (
    <div className="mb-3 mt-3">
    <label htmlFor={name} className="form-label">{label}</label>
    <input type={type} name={name} className="form-control" value={type === 'file' ? undefined : value} onChange={onChange} />
  </div>
  )
}

export default FormField