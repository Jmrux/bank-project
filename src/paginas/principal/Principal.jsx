import { useLocation, useNavigate } from 'react-router-dom';
import './Principal.css'

const Principal = () => {

   const location = useLocation()
   return (
      <div className='container'>
         <div className='cajaUserInfo'>
            Bienvenido ! {localStorage.getItem("data")}
         </div>
         <div className='caja'>
            <div className='cajita'>
               <h4>Fondos</h4>
               <div className='valor'>---$</div>
            </div>
            <div className='cajita'>
               <h4>Ingresos Recientes</h4>
               <div className='valor'>---$</div>
            </div>
            <div className='cajita'>
               <h4>Extractos Recientes</h4>
               <div className='valor'>---$</div>
            </div>
            <div className='cajita'>
               <h4>Deudas</h4>
               <div className='valor'>---$</div>
            </div>
         </div>
      </div>
      
   )
}

export default Principal;