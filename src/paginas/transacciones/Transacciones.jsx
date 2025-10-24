import './Transacciones.css'
import { Link } from 'react-router-dom'

const Transacciones = () => {
    const accionTransferir = () => {
        let numCuenta = 0;
        let valTransf = 0;
        numCuenta = prompt("Ingrese el número de cuenta a transferir")
        if(numCuenta == null || numCuenta == ''){
            alert("El usuario no ingresó ningun número de cuenta")
        } else {
            valTransf = prompt("Ingrese la cantidad de Dinero a transferir")
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
    const accionDepositar = () => {
        let valDeposit = 0;
        valDeposit = prompt("Ingrese la Cantidad de Dinero que desea Depositar")
        if(valDeposit == null || valDeposit == '' || valDeposit == 0){
            alert("No se depositó nada a tu cuenta.")
        } else {
            let confirmacion = confirm("Se van a Depositar "+ valDeposit + '$ en Tu Cuenta.')
            if(confirmacion){
                //AQUI IRIA LA LOGICA PARA SUMARLE A LOS FONDOS EL DEPOSITO
                alert('Deposito Exitoso')
            } else {
                alert("Deposito Cancelado")
            }
        }
    }
    const accionRetirar = () => {
        let valRetiro = 0;
        valRetiro = prompt("Ingrese la Cantidad de Dinero que desea Retirar")
        if(valRetiro == null || valRetiro == '' || valRetiro == 0){
            alert("No se retiró nada de tu cuenta.")
        } else {
            let confirmacion = confirm("Se van a Retirar "+ valRetiro + '$ en Tu Cuenta.')
            if(confirmacion){
                // LOGICA PARA RESTARLE A LOS FONDOS
                alert('Retiro Exitoso')
            } else {
                alert("Retiro Cancelado")
            }
        }
    }
    return (
        <div className='container'>
         <div className='cajaUserInfo'>
            Transacciones
         </div>
         <div className='caja'>
            <button className='btnTrans' onClick={accionTransferir}>Transferir</button>
            <button className='btnTrans'onClick={accionDepositar}>Depositar</button>
            <button className='btnTrans' onClick={accionRetirar}>Retirar</button>
         </div>
         </div>
    )
}

export default Transacciones