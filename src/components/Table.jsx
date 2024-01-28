import { useDispatch, useSelector } from "react-redux"
import { deleteOrden } from "../Features/Orden/OrdenSlice";
import Button from "../layouts/Button.jsx";

const Table = () => {

  const orden = useSelector(state => state.orden)

  const dispatch = useDispatch();

  const DeleteItem = (id) => {
    dispatch(deleteOrden(id))
    console.log(id)
  }
  return (
    <>
    <div className="table-counter">
      <p>Pedidos Realizados</p>
      <p>{orden.length}</p>
    </div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Total</th>
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody>
    {
      orden.map(el => (
        <tr key={el.id}>
          <td>{el.producto}</td>
          <td>{el.cantidad}</td>
          <td>{el.precio}</td>
          <td>{el.total}</td>
          <td>
            <Button to={`/editar/${el.id}`} text={'Editar'} className={'btn btn-warning'}/>
            <Button onClick={() => DeleteItem(el.id)} className="btn btn-danger" text={'Eliminar'}/>
          </td>
        </tr>
      ))
    }
  </tbody>
</table>
    </>
  )
}

export default Table