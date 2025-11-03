import { useState } from 'react'
import './Transacciones.css'
import { useNavigate } from 'react-router-dom'

const Transacciones = () => {
    const navigate = useNavigate();
    const [transfer, setTransfer] = useState({numCuenta: '', valTrans: 0})

    const volver = () =>  {
        navigate('/transacciones');
    }
    
    const accionTransferir = () => {
        let numCuenta = transfer.numCuenta;
        let valTransf = transfer.valTrans;
        if(numCuenta == null || numCuenta == ''){
            alert("El usuario no ingresó ningun número de cuenta")
        } else {
            if(valTransf == null || valTransf == ''){
                alert("No ingresaste ningun valor")
            } else {
                let confirmacion = confirm('Se van a transferir: ' + valTransf + '$\nA la cuenta de número: '+numCuenta);
                if(confirmacion){
                     // HACE FALTA INCLUIR LA LOGICA QUE VERIFICA SI EL USUARIO SI TIENE SUFICIENTES FONDOS PARA PAGAR
                    // AQUI SE PONDRÍA LA LOGICA PARA DESCONTAR EL DINERO Y PONERLO EN OTRA CUENTA
                    alert('Transferencia Exitosa');
                } else {
                    alert('Transferencia Cancelada');
                }
            }
        }
    }
    return (
        <div className='container'>
         <div className='cajaUserInfo'>
            Transacciones
         </div>
         <div className='caja caja-transacciones'>
            <h4>Transferir Dinero</h4>
            <input type="text" placeholder='Número de Cuenta...' onChange={(e) => setTransfer({...transfer, numCuenta: e.target.value})}/>
            <input type="text" placeholder='Cantidad a Transferir...' onChange={ (e) => setTransfer({...transfer, valTrans: e.target.value})}/>
            <button className='btnTrans' onClick={accionTransferir}>Transferir</button>
            <button className='btnTrans volver' onClick={volver}>Volver</button>
         </div>
         </div>
    )
}

export default Transacciones