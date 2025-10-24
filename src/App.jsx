import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import Principal from './paginas/principal/Principal'
import Gestionar from './paginas/gestion/Gestionar'
import Reportes from './paginas/reportes/Reportes'
import Servicios from './paginas/servicios/Servicios'
import Transacciones from './paginas/transacciones/Transacciones'
import './App.css'

function App() {
  return (
      <>
      <BrowserRouter>
      <Navbar/>
      <main>
          <Routes>
            <Route path='/' element={<Principal />} />
            <Route path='/transacciones' element={<Transacciones />} />
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/movimientos' element={<Reportes />} />
            <Route path='/gestionar' element={<Gestionar />} />
          </Routes>
        </main>
      </BrowserRouter>
      </>
  )
}

export default App
