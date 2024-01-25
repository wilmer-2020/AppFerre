import ButtonOrden from "../layouts/ButtonOrden.jsx"
import Form from "./Form.jsx"
import Table from "./Table.jsx"


export const Orden = () => {
  return (
    <>
        <Form/>
        <ButtonOrden to={'/crear'} text={'Crear Orden'} className={'btn btn-primary'}/>
        <Table/>
    </>
  )
}
