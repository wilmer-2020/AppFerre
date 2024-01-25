import Input from "../layouts/Input"
import Select from "../layouts/Select"

const FormOrden = () => {
  return (
    <>
        <form action="">
            <Select/>
            <Input labelText={'Cantidad'}/>
            <Input labelText={'Precio'}/>
            <Input labelText={'Total'}/>
        </form>
    </>
  )
}

export default FormOrden