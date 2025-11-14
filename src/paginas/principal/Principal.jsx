import axios from 'axios';
import './Principal.css'

const Principal = () => {
   const datos = JSON.parse(localStorage.getItem("userData"))
   axios.post('http://localhost:3000/get/transacciones', {numero_cuenta: datos.numero_cuenta})
   .then(({ data }) => {
      localStorage.setItem('userTrans', JSON.stringify(data))
   })
   .catch(({response}) => {
      console.log(response.data)
   })

   axios.post('http://localhost:3000/get/prestamo', {numero_cuenta: datos.id})
   .then(({ data }) => {
      localStorage.setItem('userDeuda', JSON.stringify(data))
   })
   .catch(({response}) => {
      console.log(response.data)
   })

   const dataResumen = JSON.parse(localStorage.getItem("userTrans"));
   const deuda = JSON.parse(localStorage.getItem("userDeuda"));

   const discriminacion = (value) => {
   if (!dataResumen) return '---';
   const deposito = dataResumen.find(t => t.tipo === value);
   return deposito ? deposito.monto : '---';
};

   const totalDeuda = () => {
      if (!deuda) return '---';
      const deudaValor = deuda.find(t => t.estado === 'aprobado');
      return deudaValor ? deudaValor.monto : '---';
   }

   return (
      <div className='container'>
         <div className='cajaUserInfo'>
            Bienvenido {datos.nombre}! 
         </div>
         <div className='caja'>
            <div className='cajita'>
               <h4>Fondos</h4>
               <div className='valor'>{datos.saldo}$</div>
            </div>
            <div className='cajita'>
               <h4>Ingresos Recientes</h4>
               <div className='valor'>{discriminacion('deposito')}$</div>
            </div>
            <div className='cajita'>
               <h4>Extractos Recientes</h4>
               <div className='valor'>-{discriminacion('retiro')}$</div>
            </div>
            <div className='cajita'>
               <h4>Deudas</h4>
               <div className='valor'>{totalDeuda()}$</div>
            </div>
         </div>
      </div>
      
   )
}

export default Principal;