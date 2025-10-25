import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({username: '', password:''});
    const a = () => {
        alert('Paila')   
    }
    const validarUsuario = () => {
        if(user.password !== 'admin' && user.username !== 'admin'){
            alert('Usuario o Contraseña Incorrectos')
        } else {
            alert('Bienvenido ' +user.username)
            navigate('/dashboard', {state: user})
        }
    }
    return(
            <div className="caja caja-login">
            <div className="cajita cajita-login">
                <span className='logo'>EsteBanquito</span>
                <h4>Iniciar Sesión</h4>
                <input type="text" placeholder='Usuario' onChange={ (e) => setUser({...user, username: e.target.value})}/>
                <input type="password" placeholder='Contraseña' onChange={ (e) => setUser({...user, password: e.target.value})}/>
                <h6 onClick={a}>Olvidé mi Contraseña.</h6>
                <h6 onClick={a}>¿No tienes una cuenta? Registrate.</h6>
                <button onClick={validarUsuario}>Iniciar Sesion</button>
            </div>

        </div>
    )   
}

export default Login;