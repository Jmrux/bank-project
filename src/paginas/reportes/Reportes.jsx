import './Reportex.css'

const Reportes = () => {
    return (
        <div className='container'>
            <div className='cajaUserInfo'>Movimientos</div>
            <div className='caja caja-reportes'>
                <div className="cajita cajita-reportes">
                    <h4>Ingresos</h4>
                    <div className='cajita cajita-historia'>
                        <h5>ingresos...</h5>
                        <h5>ingresos...</h5>
                        <h5>ingresos...</h5>
                        <h5>ingresos...</h5>
                        <h5>ingresos...</h5>
                    </div>
                </div>
                <div className="cajita cajita-reportes">
                    <h4>Extractos</h4>
                    <div className='cajita cajita-historia'>
                        <h5>extractos...</h5>
                        <h5>extractos...</h5>
                        <h5>extractos...</h5>
                        <h5>extractos...</h5>
                        <h5>extractos...</h5>
                    </div>
                </div>
                <div className="cajita cajita-reportes">
                    <h4>Prestamos</h4>
                    <div className='cajita cajita-historia'>
                        <h5>deudas...</h5>
                        <h5>deudas...</h5>
                        <h5>deudas...</h5>
                        <h5>deudas...</h5>
                        <h5>deudas...</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reportes