import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import  Home  from './components/Home.jsx'
import { Orden } from './components/Orden.jsx'
import FormOrden from './components/FormOrden.jsx'
import './index.css'
import FormEdit from './components/FormEdit.jsx'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/pedidos' element={<Orden></Orden>}/>
        <Route path='/crear' element={<FormOrden></FormOrden>}/>
        <Route path='/editar/:id' element={<FormEdit></FormEdit>}/>
      </Routes>
    </>
  )
}

export default App
