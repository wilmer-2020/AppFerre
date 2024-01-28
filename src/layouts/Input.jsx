const Input = ({labelText,parrafoText,onChange,name,value,disabled,onKeyUp,id}) => {
  return (
    <div className="form-group">
        <label htmlFor="">{labelText}</label>
        <input 
        type="text"
        name={name} 
        value={value}
        id={id}
        disabled={disabled}
        onChange={onChange}
        onKeyUp={onKeyUp}
        required
        />
        <p>{parrafoText}</p>
    </div>
  )
}

export default Input