import { NavLink } from "react-router-dom"

const ButtonOrden = ({to,text,className}) => {
  return (
    <NavLink to={to} className={className}>{text}</NavLink>
  )
}

export default ButtonOrden