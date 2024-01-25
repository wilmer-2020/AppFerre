import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const ButtonOrden = ({to,text,className}) => {
    const Orden = useSelector(state => state.orden);

  return (
    <>
       <div className="buttons-info">
      <NavLink to={to} className={className}>{text}</NavLink>
    {
      Orden.length > 0 ?  <input type="submit" value="Enviar Orden" className="button-enviar"/> : <input type="submit" hidden={true}/>
    }
   </div>
    
    </>
  )
}

export default ButtonOrden