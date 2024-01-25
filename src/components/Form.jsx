import Input from "../layouts/Input"

const Form = () => {
  return (
    <>
        <form action="" className="info-form">
            <Input labelText={'Nombre'}/>
            <Input labelText={'Identidad'}/>
            <Input labelText={'Telefono'}/>
            <Input labelText={'Direccion'}/>
        </form>
    </>
  )
}

export default Form