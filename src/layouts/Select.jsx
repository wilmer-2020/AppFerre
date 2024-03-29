import { useContext } from "react"
import { ProdcutContext } from "../Context/ProductContexr.jsx"

const Select = ({name,onChange,value}) => {

    const { products } = useContext(ProdcutContext)

  return (
    <>
        <div className="form-group">
            <label>Productos</label>
            <select 
            name={name} 
            onChange={onChange} 
            value={value}>
            <option value=""> --Selecione el Producto-- </option>
                {products.map(product => 
                    <option 
                    key={product.id} 
                    value={product.nombre}
                    >{product.nombre}
                    </option>
                )}
            </select>
        </div>
    </>
  )
}

export default Select