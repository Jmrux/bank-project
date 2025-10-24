import './Servicios.css'

const Servicios = () => {

   const doPrestamo = () => {
      let valPrest = 0;
      valPrest = prompt('Ingrese la cantidad que desea prestar.')
      if(valPrest == null || valPrest == '' || valPrest == 0){
         alert('No se ingresó un valor a prestar.')
      } else {
         let confirmacion = confirm('Se aplicará un credito a su cuenta de: '+valPrest+'$\n¿Continuar?')
         if(!confirmacion){
            alert('Prestamo Cancelado. No se realizaron cambios.')
         } else {
            alert('Prestamo exitoso. Recuerde, es importante mantenerse al dia con los pagos de su credito.')
         }
      }
   }

   const pagPrestamo = () => {
      let tempDeuda = 1000;
      let valPagar = prompt('Usted tiene una deuda acumulada de '+tempDeuda+'$\n¿Cuanto desea pagar?')
      if(valPagar == 0 || valPagar == '' || valPagar == null){
         alert("El usuario canceló la operación.")
      } else {
         let confirmacion = false;
         if(valPagar >= tempDeuda){
            confirmacion = confirm('El valor ingresado cubre la totalidad de la deuda. Se le cobrará solo el valor total de la deuda. \n¿Está de acuerdo?')
         }
         if(valPagar < tempDeuda ){
            confirmacion = confirm('Se abonaran '+valPagar+' al total de su deuda. Podrá pagar el resto cuando quiera. \n¿Está de acuerdo?')
         }
         if(!confirmacion)
            alert('Operación Cancelada.')
         else{
            // HACE FALTA INCLUIR LA LOGICA QUE VERIFICA SI EL USUARIO SI TIENE SUFICIENTES FONDOS PARA PAGAR
            alert('Se han abonado '+valPagar+'$ Exitosamente. \nEl restante de su Deuda es de: '+ (tempDeuda-valPagar))
         }
      }
   }
    return (
         <div className='container'>
         <div className='cajaUserInfo'>
            Servicios
         </div>
         <div className='caja caja-servicios'>
            <div className='cajita cajita-servicios'>
               <h4>Deudas</h4>
               <div className='valor valorCajita'>---$</div>
               <div className='histDeudas'>
                <ul className='listDeudas'>
                    <li>Prestamo 1</li>
                    <h6>Detalles Prestamo</h6>
                    <li>Deuda 2</li>
                    <h6>Detalles Deuda</h6>
                    <li>Prestamo 3</li>
                    <h6>Detalles Prestamo</h6>
                </ul>
               </div>
            </div>
            <button className='btnTrans' onClick={doPrestamo}>Hacer Prestamo</button>
            <button className='btnTrans' onClick={pagPrestamo}>Pagar Deudas</button>
         </div>
         
         </div>
    )
}

export default Servicios