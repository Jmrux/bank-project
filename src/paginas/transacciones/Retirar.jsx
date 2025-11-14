import { useState } from 'react'
import './Transacciones.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Transacciones = () => {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("userData"))
    const [retiro, setRetiro] = useState({cuenta_id: data.numero_cuenta, tipo: 'retiro', monto: 0})

    const volver = () =>  {
        navigate('/transacciones');
    }

    const accionRetirar = () => {
            if(retiro.monto == null || retiro.monto == '' || retiro.monto == 0){
                alert("No ingresaste ningun valor")
            } else {
                let confirmacion = confirm('Se van a Retirar: ' + retiro.monto);
                if(confirmacion){
                    axios.post('http://localhost:3000/transacciones', retiro)
                    .then((response) => {
                        alert(response.data.message);
                        data.saldo -= retiro.monto
                        localStorage.setItem("userData", JSON.stringify(data))
                    })
                    .catch((error) => {
                        if (error.response) {
                        alert(error.response.data.message);
                        } else {
                            alert("Error de conexión con el servidor");
                        }
                    });
                } else {
                    alert('Retiro Cancelado');
                }
            }
        }
    return (
        <div className='container'>
         <div className='cajaUserInfo'>
            Transacciones
         </div>
         <div className='caja caja-transacciones'>
            <h4>Retirar Dinero</h4>
            <h6>Tu número de cuenta: {data.numero_cuenta}</h6>
            <input type="text" placeholder='Cantidad a Retirar...' onChange={(e) => setRetiro({...retiro, monto: e.target.value})}/>
            <button className='btnTrans' onClick={accionRetirar}>Retirar</button>
            <button className='btnTrans volver' onClick={volver}>Volver</button>
         </div>
         </div>
    )
}

export default Transacciones