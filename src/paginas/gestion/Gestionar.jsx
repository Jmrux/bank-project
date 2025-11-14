import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Gestionar = () => {
   const datos = JSON.parse(localStorage.getItem("userData"))
   const [user, setUser] = useState({nombre: '', email:'', contrasena:'', numero_cuenta: datos.numero_cuenta, tipo: datos.tipo, saldo: datos.saldo});
   const navigate = useNavigate();
   const actualizar = ()=>{
        navigate("/gestionar/actualizar")
   }

  return (
         <div className='container'>
         <div className='cajaUserInfo'>
            Tu cuenta
         </div>
         <div className='caja caja-servicios'>
            <div className='cajita cajita-servicios'>
               <h4>Tu cuenta</h4>
               <div className='valor valorCajita'></div>
               <div className='histDeudas'>
                <ul className='listDeudas'>
                    <li>Nombre del titular</li>
                    <h6>{datos.nombre}</h6>
                    <li>Número de cuenta</li>
                    <h6>{datos.numero_cuenta}</h6>
                    <li>Saldo disponible</li>
                    <h6>{datos.saldo}</h6>
                    <li>Correo</li>
                    <h6>{datos.email}</h6>
                </ul>
               </div>
            </div>
            <button className='btnTrans'onClick={actualizar} >Actualizar datos</button>

         </div>

         </div>

  )
};

export default Gestionar