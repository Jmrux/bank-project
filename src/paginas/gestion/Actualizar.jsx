import './Gestionar.css'

const Actualizar = () => {
   const validacion = () => {
      //SE REQUIERE HACER LA VALIDACION DEL CAMPO DE LA CONTRASEÑA ACTUAL CUANDO SE IMPLEMENTE EL BACKEND
      let userChoice = confirm('Se actualizaran sus datos personales. \n¿Continuar?')
      if(!userChoice){
         alert('Acción Cancelada.')
      } else {
         //LOGICA DE ACTUALIZACION EN LA BASE DE DATOS.
         alert('Datos Actualizados.')
      }
   }
  return (
         <div className='container'>
         <div className='cajaUserInfo'>
            Tu cuenta
         </div>
         <div className='caja caja-servicios'>
            <div className='cajita cajita-servicios'>
               <h4>Actualizar datos</h4>
               <div className='valor valorCajita'></div>
               <div className='histDeudas'>
                <ul className='listDeudas'>
                     <li>Email</li>
                     <input type="text" className='gestionarInput' />
                     <li>Contraseña</li>
                     <input type="text" className='gestionarInput'/>
                    <li>Nombre del titular</li>
                    <input type="text" className='gestionarInput'/>
                    <li>Confirmar contraseña actual</li>
                     <input type="text" className='gestionarInput'/>
                </ul>
               </div>
            </div>
            <button className='btnTrans' onClick={validacion}>Actualizar datos</button>

         </div>

         </div>

  )
};

export default Actualizar