import { useState } from 'react'
import '../transacciones/Transacciones.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Prestamos = () => {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("userData"))
    const [presta, setPresta] = useState({usuario_id: data.id, monto: 0, plazo: 0})

    const volver = () =>  {
        navigate('/servicios');
    }

    const accionPrestar = () => {
        if(confirm("Va a solicitar un prestamo de: "+presta.monto+'\n¿Continuar?')){
            axios.post('http://localhost:3000/prestamo', presta)
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
        
    }
    return (
        <div className='container'>
         <div className='cajaUserInfo'>
            Servicios
         </div>
         <div className='caja caja-transacciones'>
            <h4>Prestamo de Dinero</h4>
            <h6>Tu número de cuenta: {data.numero_cuenta}</h6>
            <input type="number" placeholder='Cantidad a Prestar...' onChange={ (e) => setPresta({...presta, monto: e.target.value})}/>
            <input type="number" placeholder='Plazo (Meses)' min="3" max="12" onChange={ (e) => setPresta({...presta, plazo: e.target.value})}/>
            <button className='btnTrans' onClick={accionPrestar}>Prestar</button>
            <button className='btnTrans volver' onClick={volver}>Volver</button>
         </div>
         </div>
    )
}

export default Prestamos