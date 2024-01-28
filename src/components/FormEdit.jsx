import { useState,useEffect,useContext } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../layouts/Input"    
import Select from "../layouts/Select"
import { UpdateOrden } from "../Features/Orden/OrdenSlice";

import { ProdcutContext } from "../Context/ProductContexr.jsx";

const FormEdit = () => {

  const { products } = useContext(ProdcutContext);

const [precio, setPrecio] = useState(0);
const [total, setTotal] = useState(0);

const getPrice = (e) =>{
    products.map(el => {
        if(e.target.value === el.nombre){
            setPrecio(el.precio)
        }
    })
}

const getTotal = () => {
    setTotal(orden.cantidad * precio)
}

const [orden, setOrden] = useState({
    id:'',
    producto:"",
    cantidad:'',
    precio,
    total
})

const dispatch = useDispatch();
const Navigate = useNavigate()
const Param = useParams()
const AllOrdens = useSelector(state => state.orden);


const getDataInput = (e) => {
    setOrden({
        ...orden,[e.target.name]: e.target.value,precio,total
    })
    getPrice(e)
}


const SendORden = (e) => {
    e.preventDefault();
    if(Param.id){
        dispatch(UpdateOrden({...orden,total:total}))
        orden.total = total
    }
    Navigate('/pedidos')
    console.log(orden)
}

useEffect(() => {
    if(Param.id)setOrden(AllOrdens.find(orden => orden.id === Param.id))
}, [])

  return (
    <>
      <form action="" onSubmit={SendORden} className="orden-form">
            <Select name={'producto'} value={orden.producto} onChange={getDataInput}/>
            <Input 
            name={'cantidad'}
            onChange={getDataInput}
            value={orden.cantidad}
            onKeyUp={getTotal}
            labelText={'Cantidad'} 
            />

            <Input 
            name={'precio'}
            value={orden.precio}
            disabled={true}
            labelText={'Precio'}

            />
            <Input
            name={'total'}
            disabled={true}
            value={total}
            id={'total'}
            labelText={'Total'}

            />

            <div className="continer-buttons">
            <input type="submit" value="Editar" className="btn btn-success"/>
            <button onClick={() => Navigate('/pedidos')} className="btn btn-info">Volver</button>
            </div>
        </form>
    </>
  )
}

export default FormEdit