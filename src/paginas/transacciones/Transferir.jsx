import { useState } from 'react'
import './Transacciones.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Transacciones = () => {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("userData"))
    const [transfer, setTransfer] = useState({emisor_id: data.numero_cuenta, receptor_id: '', monto: 0})

    const volver = () =>  {
        navigate('/transacciones');
    }

    const accionTransferir = () => {
        if(transfer.receptor_id == null || transfer.receptor_id == ''){
            alert("El usuario no ingresó ningun número de cuenta")
        } else {
            if(transfer.monto == null || transfer.monto == ''){
                alert("No ingresaste ningun valor")
            } else {
                let confirmacion = confirm('Se van a transferir: ' + transfer.monto + '$\nA la cuenta de número: '+transfer.receptor_id);
                if(confirmacion){
                    axios.post('http://localhost:3000/transacciones/entre-usuarios', transfer)
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
            <input type="text" placeholder='Número de Cuenta...' onChange={(e) => setTransfer({...transfer, receptor_id: e.target.value})}/>
            <input type="text" placeholder='Cantidad a Transferir...' onChange={ (e) => setTransfer({...transfer, monto: e.target.value})}/>
            <button className='btnTrans' onClick={accionTransferir}>Transferir</button>
            <button className='btnTrans volver' onClick={volver}>Volver</button>
         </div>
         </div>
    )
}

export default Transacciones