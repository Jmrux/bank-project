import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({username: '', password:''});

    const validarUsuario = () => {
        axios.post('http://localhost:3000/login', user)
        .then(({ data }) => {
            if(data == 'Usuario no existe'){
                alert(data)
            } else {
                alert('Bienvenido ' + data.nombre + '!')
                localStorage.setItem('userData', JSON.stringify(data))
                navigate('/dashboard')
            }
        })
        .catch(({response}) => {
            console.log(response.data)
        })
    }
    return(
            <div className="caja caja-login">
            <div className="cajita cajita-login">
                <span className='logo'>EsteBanquito</span>
                <h4>Iniciar Sesión</h4>
                <input type="text" placeholder='Correo' onChange={ (e) => setUser({...user, username: e.target.value})}/>
                <input type="password" placeholder='Contraseña' onChange={ (e) => setUser({...user, password: e.target.value})}/>
                <h6>
                    ¿Olvidaste tu contraseña?{' '}
                    <a href="/recovery">Recuperala</a>
                </h6>
                <h6>
                    ¿No tienes una cuenta?{' '}
                    <a href="/signup"> Registrate</a>
                </h6>
                <button onClick={validarUsuario}>Iniciar Sesion</button>
            </div>

        </div>
    )   
}

export default Login;