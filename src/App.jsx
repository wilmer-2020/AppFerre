import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Nav from './components/Nav.jsx'
import  Home  from './components/Home.jsx'
import { Orden } from './components/Orden.jsx'
import FormOrden from './components/FormOrden.jsx'
import './index.css'

function App() {

  const Ordenstate = useSelector(state => state.orden)
  console.log(Ordenstate)

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/pedidos' element={<Orden></Orden>}/>
        <Route path='/crear' element={<FormOrden></FormOrden>}/>
        <Route path='/editar/:id' element={<FormOrden></FormOrden>}/>
      </Routes>
    </>
  )
}

export default App
