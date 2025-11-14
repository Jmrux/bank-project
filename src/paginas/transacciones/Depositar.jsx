import { useState } from 'react'
import './Transacciones.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Transacciones = () => {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("userData"))
    const [depos, setDepos] = useState({cuenta_id: data.numero_cuenta, tipo: 'deposito', monto: 0})

    const volver = () =>  {
        navigate('/transacciones');
    }

    const accionDepositar = () => {
            if(depos.monto == null || depos.monto == '' || depos.monto == 0){
                alert("No ingresaste ningun valor")
            } else {
                let confirmacion = confirm('Se van a Depositar: ' + depos.monto);
                if(confirmacion){
                    alert('Cuenta: '+depos.cuenta_id+' Tipo: '+depos.tipo+' monto: '+depos.monto)
                    axios.post('http://localhost:3000/transacciones', depos)
                    .then((response) => {
                        alert(response.data.message);
                        data.saldo = Number(data.saldo) + Number(depos.monto);
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
                    alert('Deposito Cancelado');
                }
            }
        }
    return (
        <div className='container'>
         <div className='cajaUserInfo'>
            Transacciones
         </div>
         <div className='caja caja-transacciones'>
            <h4>Depositar Dinero</h4>
            <h6>Tu número de cuenta: {data.numero_cuenta}</h6>
            <input type="text" placeholder='Cantidad a Depositar...' onChange={ (e) => setDepos({...depos, monto: e.target.value})}/>
            <button className='btnTrans' onClick={accionDepositar}>Depositar</button>
            <button className='btnTrans volver' onClick={volver}>Volver</button>
         </div>
         </div>
    )
}

export default Transacciones