const Table = () => {
  return (
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
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>
        <button>Eliminar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  </tbody>
</table>
  )
}

export default Table