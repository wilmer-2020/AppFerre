import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../layouts/Input"    
import Select from "../layouts/Select"
import { addOrden,UpdateOrden } from "../Features/Orden/OrdenSlice";
import { v4 as uuid } from "uuid";
const FormOrden = () => {

    const [orden, setOrden] = useState({
        id:'',
        producto:"",
        cantidad:'',
        precio:"",
        total:''
    })

    const dispatch = useDispatch();
    const Navigate = useNavigate()
    const Param = useParams()
    const AllOrdens = useSelector(state => state.orden)
    const getDataInput = (e) => {
        setOrden({
            ...orden,[e.target.name]: e.target.value
        })
    }

    const SendORden = (e) => {
        e.preventDefault();
        if(Param.id){
            dispatch(UpdateOrden(orden))
        }else{
        dispatch(addOrden({...orden,id:uuid()}))
        }
       
        Navigate('/pedidos')
        console.log(orden)
    }

    useEffect(() => {
        if(Param.id)setOrden(AllOrdens.find(orden => orden.id === Param.id))
    }, [])
    

  return (
    <>
        <form action="" onSubmit={SendORden}>
            <Select name={'producto'} value={orden.producto} onChange={getDataInput}/>
            <Input 
            name={'cantidad'}
            value={orden.cantidad}
            onChange={getDataInput}
            labelText={'Cantidad'} 
            />

            <Input 
            name={'precio'}
            value={orden.precio}
            onChange={getDataInput}
            labelText={'Precio'}

            />
            <Input
            name={'total'}
            value={orden.total}
            onChange={getDataInput}
            labelText={'Total'}

            />

            <input type="submit" value="Agregar" className="btn btn-success"/>
            <button onClick={() => Navigate('/pedidos')} className="btn btn-info">Volver</button>
        </form>
    </>
  )
}

export default FormOrden