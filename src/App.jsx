import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './paginas/principal/Principal'
import Gestionar from './paginas/gestion/Gestionar'
import Reportes from './paginas/reportes/Reportes'
import Servicios from './paginas/servicios/Servicios'
import Transacciones from './paginas/transacciones/Transacciones'
import LayoutAuth from './components/layouts/AuthLayout'
import LayoutPrincipal from './components/layouts/MainLayout'
import Login from './paginas/login/Login'
import Register from './paginas/login/SignUp'
import Actualizar from './paginas/gestion/Actualizar'
import Transferir from './paginas/transacciones/Transferir'
import Depositar from './paginas/transacciones/Depositar'
import Retirar from './paginas/transacciones/Retirar'
import Prestar from './paginas/servicios/Prestar'
import Pagar from './paginas/servicios/PagarPrestamo'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<LayoutPrincipal />}>
          <Route path="/dashboard" element={<Principal />} />
          <Route path="/transacciones" element={<Transacciones />} />
          <Route path="/transacciones/transferir" element={<Transferir />} />
          <Route path="/transacciones/depositar" element={<Depositar />} />
          <Route path="/transacciones/retirar" element={<Retirar />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/prestamo" element={<Prestar />} />
          <Route path="/servicios/prestamo/pagos" element={<Pagar />} />
          <Route path="/movimientos" element={<Reportes />} />
          <Route path="/gestionar" element={<Gestionar />} />
          <Route path="/gestionar/actualizar" element={<Actualizar />} />
        </Route>

        <Route element={<LayoutAuth />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
// function App() {
//   return (
//       <>
//       <BrowserRouter>
//       <Navbar/>
//       <main>
//           <Routes>
//             <Route path='/' element={<Principal />} />
//             <Route path='/transacciones' element={<Transacciones />} />
//             <Route path='/servicios' element={<Servicios />} />
//             <Route path='/movimientos' element={<Reportes />} />
//             <Route path='/gestionar' element={<Gestionar />} />
//           </Routes>
//         </main>
//       </BrowserRouter>
//       </>
//   )
// }

export default App
