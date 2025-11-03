import { useState } from 'react'
import './Transacciones.css'
import { useNavigate } from 'react-router-dom'

const Transacciones = () => {
    const navigate = useNavigate();
    const [depos, setDepos] = useState('')

    const volver = () =>  {
        navigate('/transacciones');
    }

    const accionDepositar = () => {
        let valTransf = depos;
            if(valTransf == null || valTransf == ''){
                alert("No ingresaste ningun valor")
            } else {
                let confirmacion = confirm('Se van a Depositar: ' + valTransf);
                if(confirmacion){
                     // HACE FALTA INCLUIR LA LOGICA QUE VERIFICA SI EL USUARIO SI TIENE SUFICIENTES FONDOS PARA PAGAR
                    // AQUI SE PONDRÍA LA LOGICA PARA DESCONTAR EL DINERO Y PONERLO EN OTRA CUENTA
                    alert('Deposito Exitoso');
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
            <h6>Tu número de cuenta: </h6>
            <input type="text" placeholder='Cantidad a Depositar...' onChange={ (e) => setDepos(e.target.value)}/>
            <button className='btnTrans' onClick={accionDepositar}>Depositar</button>
            <button className='btnTrans volver' onClick={volver}>Volver</button>
         </div>
         </div>
    )
}

export default Transacciones