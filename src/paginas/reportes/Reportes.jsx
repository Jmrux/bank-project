import './Reportex.css'

const Reportes = () => {
    const dataTrans = JSON.parse(localStorage.getItem('userTrans'));
    const deuda = JSON.parse(localStorage.getItem('userDeuda'))
    
    const getValores = (value) => {
        let text = '';
        for (let dato of dataTrans){
            if(dato.tipo === value){
                text += 'Monto: '+dato.monto +' Fecha: '+ dato.fecha +'\n\n'
            }
        }
        return text;
    }

    const mostrarDeudas = () => {
      let text = ''
      for (let dato of deuda){
         text += dato.monto +'\nFecha: '+ dato.fecha_solicitud +'\nPlazo de: '+dato.plazo+' meses' +'\nEstado: '+dato.estado+'\n\n' + '--------------------------------------------------------\n\n'
      }
      return text 
   }
    
    return (
        <div className='container'>
            <div className='cajaUserInfo'>Movimientos</div>
            <div className='caja caja-reportes'>
                <div className="cajita cajita-reportes">
                    <h4>Ingresos</h4>
                    <div className='cajita cajita-historia'>
                        <h5>{getValores('deposito')}</h5>
                    </div>
                </div>
                <div className="cajita cajita-reportes">
                    <h4>Extractos</h4>
                    <div className='cajita cajita-historia'>
                        <h5>{getValores('retiro')}</h5>
                    </div>
                </div>
                <div className="cajita cajita-reportes">
                    <h4>Prestamos</h4>
                    <div className='cajita cajita-historia'>
                        <h5>{mostrarDeudas()}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reportes