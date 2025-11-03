import './Transacciones.css'
import { Link, useNavigate } from 'react-router-dom'

const Transacciones = () => {
    const navigate = useNavigate();
    const accionTransferir = () => {
        navigate('/transacciones/transferir')
    }
    const accionDepositar = () => {
        navigate('/transacciones/depositar')
    }
    const accionRetirar = () => {
        navigate('/transacciones/retirar')
    }
    return (
        <div className='container'>
         <div className='cajaUserInfo'>
            Transacciones
         </div>
         <div className='caja caja-transacciones'>
            <button className='btnTrans' onClick={accionTransferir}>Transferir</button>
            <button className='btnTrans'onClick={accionDepositar}>Depositar</button>
            <button className='btnTrans' onClick={accionRetirar}>Retirar</button>
         </div>
         </div>
    )
}

export default Transacciones