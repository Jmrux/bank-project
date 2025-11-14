import { useState } from 'react'
import '../transacciones/Transacciones.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const PagarPrestamo = () => {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("userData"))
    const [pagos, setPagos] = useState({prestamo_id: '', usuario_id: data.id, cuenta_id: data.numero_cuenta})

    const volver = () =>  {
        navigate('/servicios');
    }

    const accionPagar = () => {
        axios.post('http://localhost:3000/prestamo/pago', pagos)
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
    return (
        <div className='container'>
         <div className='cajaUserInfo'>
            Servicios
         </div>
         <div className='caja caja-transacciones'>
            <h4>Pagar Deudas</h4>
            <input type="text" placeholder='ID del prestamo...' onChange={(e) => setPagos({...pagos, prestamo_id: e.target.value})}/>
            <button className='btnTrans' onClick={accionPagar}>Pagar</button>
            <button className='btnTrans volver' onClick={volver}>Volver</button>
         </div>
         </div>
    )
}

export default PagarPrestamo