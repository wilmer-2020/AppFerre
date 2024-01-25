import { getProducts } from "../hooks/getProducts"

const Select = () => {

    const { products } = getProducts()

  return (
    <>
        <div className="">
            <label htmlFor="">Productos</label>
            <select name="" id="">
                {products.map(product => 
                    <option key={product.id} value={product.nombre}>{product.nombre}</option>
                )}
            </select>
        </div>
    </>
  )
}

export default Select