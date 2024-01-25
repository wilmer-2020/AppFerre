const Input = ({labelText,parrafoText,onChange,name,value}) => {
  return (
    <div className="form-group">
        <label htmlFor="">{labelText}</label>
        <input 
        type="text"
        name={name} 
        value={value}
        onChange={onChange}/>
        <p>{parrafoText}</p>
    </div>
  )
}

export default Input