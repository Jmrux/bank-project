import { useNavigate } from "react-router-dom";

const Gestionar = () => {
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
                    <h6>nombre</h6>
                    <li>Numero de cuenta</li>
                    <h6>Cuenta ***3423</h6>
                    <li>Saldo disponible</li>
                    <h6>Saldo ######</h6>
                </ul>
               </div>
            </div>
            <button className='btnTrans'onClick={actualizar} >Actualizar datos</button>

         </div>

         </div>

  )
};

export default Gestionar