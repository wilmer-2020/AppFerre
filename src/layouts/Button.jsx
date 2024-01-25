import { NavLink } from "react-router-dom"

const Button = ({to,className,text,onClick}) => {
  return (
    <NavLink 
    to={to}
    className={className}
    onClick={onClick}
    >
    {text}
    </NavLink>
  )
}

export default Button