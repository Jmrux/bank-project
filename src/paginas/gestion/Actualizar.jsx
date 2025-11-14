import './Gestionar.css'
import { useState } from 'react'
import axios from 'axios'

const Actualizar = () => {
   const datos = JSON.parse(localStorage.getItem("userData"))
   const [user, setUser] = useState({nombre: '', email:'', contrasena:'', numero_cuenta: datos.numero_cuenta, tipo: datos.tipo, saldo: datos.saldo});
   const [pass, setPass] = useState('')
   const validacion = () => {
      if(pass !== datos.contrasena){
         alert('La constraseña actual es incorrecta.')
      } else {
         let userChoice = confirm('Se actualizaran sus datos personales. \n¿Continuar?')
            if(!userChoice){
               alert('Acción Cancelada.')
            } else {
               if(user.contrasena == '' || user.contrasena == undefined){
                  user.contrasena = datos.contrasena
               }
               if(user.nombre == '' || user.nombre == undefined){
                  user.nombre = datos.nombre
               }
               if(user.email == '' || user.email == undefined){
                  user.email = datos.email
               }
               axios.put('http://localhost:3000/usuarios/'+datos.id, user)
               .then((response) => {
                  alert(response.data.message);
                  alert('Por favor vuelva a iniciar sesión.')
               })
               .catch((error) => {
                  if (error.response) {
                     alert(error.response.data.message);
                  } else {
                     alert("Error de conexión con el servidor");
                  }
               });
            }
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
                     <input type="text" className='gestionarInput' placeholder={datos.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                     <li>Nueva Contraseña</li>
                     <input type="text" className='gestionarInput' onChange={(e) => setUser({...user, contrasena: e.target.value})}/>
                    <li>Nombre del titular</li>
                    <input type="text" className='gestionarInput' placeholder={datos.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
                    <li>Confirmar contraseña actual</li>
                     <input type="password" className='gestionarInput' onChange={(e) => setPass(e.target.value)}/>
                </ul>
               </div>
            </div>
            <button className='btnTrans' onClick={validacion}>Actualizar datos</button>

         </div>

         </div>

  )
};

export default Actualizar