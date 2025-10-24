import './Principal.css'

const Principal = () => {
   return (
      <div className='container'>
         <div className='cajaUserInfo'>
            Bienvenido! usuario
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