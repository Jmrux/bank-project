import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({username: '', password:''});
    const a = () => {
        alert('Paila')   
    }

    const login = () => {
        navigate('/')
    }

    const registrarUsuario = () => {
        alert('Usuario Registrado')
    }

    return(
            <div className="caja caja-login">
            <div className="cajita cajita-signup">
                <span className='logo'>EsteBanquito</span>
                <h4>Registrate</h4>
                <input type="text" placeholder='Nombre' onChange={ (e) => setUser({...user, username: e.target.value})}/>
                <input type="text" placeholder='Contraseña' onChange={ (e) => setUser({...user, password: e.target.value})}/>
                <input type="text" placeholder='Correo'/>
                <select name="cuenta" id="cuenta">
                    <option value="ahorro">Cuenta de Ahorros</option>
                    <option value="corriente">Cuenta Corriente</option>
                </select>
                <h6></h6>
                <h6 onClick={login}>¿Ya tienes una Cuenta? Inicia Sesión.</h6>
                <button onClick={registrarUsuario}>Registrarse</button>
            </div>

        </div>
    )   
}

export default Login;