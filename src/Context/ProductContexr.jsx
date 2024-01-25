import { createContext } from "react"
import { getProducts } from "../hooks/getProducts";

export const ProdcutContext = createContext();
const ProductProvider = ({children}) => {

    const { products } = getProducts()
 
  return (
    <ProdcutContext.Provider value={{products}}>
        {children}
    </ProdcutContext.Provider>
  )
}

export default ProductProvider;