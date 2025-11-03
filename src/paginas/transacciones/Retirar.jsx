import { useState } from 'react'
import './Transacciones.css'
import { useNavigate } from 'react-router-dom'

const Transacciones = () => {
    const navigate = useNavigate();
    const [retiro, setRetiro] = useState('')

    const volver = () =>  {
        navigate('/transacciones');
    }

    const accionRetirar = () => {
        let valTransf = retiro;
            if(valTransf == null || valTransf == ''){
                alert("No ingresaste ningun valor")
            } else {
                let confirmacion = confirm('Se van a Retirar: ' + valTransf);
                if(confirmacion){
                     // HACE FALTA INCLUIR LA LOGICA QUE VERIFICA SI EL USUARIO SI TIENE SUFICIENTES FONDOS PARA PAGAR
                    // AQUI SE PONDRÍA LA LOGICA PARA DESCONTAR EL DINERO Y PONERLO EN OTRA CUENTA
                    alert('Retiro Exitoso');
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
            <h6>Tu número de cuenta: </h6>
            <input type="text" placeholder='Cantidad a Retirar...' onChange={ (e) => setRetiro(e.target.value)}/>
            <button className='btnTrans' onClick={accionRetirar}>Retirar</button>
            <button className='btnTrans volver' onClick={volver}>Volver</button>
         </div>
         </div>
    )
}

export default Transacciones