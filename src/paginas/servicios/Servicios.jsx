import { useNavigate } from 'react-router-dom'
import './Servicios.css'
import axios from 'axios'
import { useState } from 'react'

const Servicios = () => {

   const data = JSON.parse(localStorage.getItem("userData"))
   const deuda = JSON.parse(localStorage.getItem("userDeuda"))
   const [estado, setEstado] = useState({estado: 'aprobado', numero_cuenta: data.numero_cuenta})
   const navigate = useNavigate()

   const doPrestamo = () => {
      navigate('/servicios/prestamo')
   }

   const pagPrestamo = () => {
      navigate('/servicios/prestamo/pagos')
   }

   const mostrarDeudas = () => {
      let text = ''
      for (let i=0; i < deuda.length; i++){
         text += deuda[i].monto +'\nID: '+deuda[i].id+'\nFecha: '+ deuda[i].fecha_solicitud +'\nPlazo de: '+deuda[i].plazo+' meses' +'\nEstado: '+deuda[i].estado+'\n\n' + '---------------\n\n'
      }
      return text
   }

   const aprobarPrestamo = () => {
      const idPrestamo = prompt('Ingrese el ID del prestamo para el cual desea solicitar aprobación.')
      axios.put('http://localhost:3000/prestamo/'+idPrestamo, estado)
      .then((response) => {
         alert(response.data.message);
      })
      .catch((error) => {
         if (error.response) {
            alert(error.response.data.message);
         } else {
            alert("Error de conexión con el servidor");
         }
      }); 
   }

   const totalDeuda = () => {
      let total = 0;
      for (let i = 0; i < deuda.length; i++){
         if(deuda[i].estado == "aprobado"){
            total += parseFloat(deuda[i].monto)
         }
      }
      return total;
   }


   return (
         <div className='container'>
         <div className='cajaUserInfo'>
            Servicios
         </div>
         <div className='caja caja-servicios'>
            <div className='cajita cajita-servicios'>
               <h4>Deudas</h4>
               <div className='valor valorCajita'>{totalDeuda()}$</div>
               <div className='histDeudas'>
                <ul className='listDeudas'>
                    <li>{mostrarDeudas()}</li>
                </ul>
               </div>
            </div>
            <button className='btnTrans' onClick={doPrestamo}>Hacer Prestamo</button>
            <button className='btnTrans' onClick={aprobarPrestamo}>Solicitar Aprobación</button>
            <button className='btnTrans' onClick={pagPrestamo}>Pagar Deudas</button>
         </div>
         
         </div>
    )
}

export default Servicios