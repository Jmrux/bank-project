import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({nombre: '', email:'', contrasena:'', numero_cuenta:'', tipo:'', saldo:0});

    const login = () => {
        navigate('/')
    }

    const registrarUsuario = () => {
        axios.post('http://localhost:3000/signup', user)
        .then((response) => {
            alert(response.data.message);
        })
        .catch((error) => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Error de conexión con el servidor");
            }
        });
    };

    return(
            <div className="caja caja-login">
            <div className="cajita cajita-signup">
                <span className='logo'>EsteBanquito</span>
                <h4>Registrate</h4>
                <input type="text" placeholder='Nombre' onChange={ (e) => setUser({...user, nombre: e.target.value})}/>
                <input type="text" placeholder='Contraseña' onChange={ (e) => setUser({...user, contrasena: e.target.value})}/>
                <input type="text" placeholder='Correo' onChange={ (e) => setUser({...user, email: e.target.value})}/>
                <input type="text" placeholder='Telefono (Número de Cuenta)' onChange={ (e) => setUser({...user, numero_cuenta: e.target.value})}/>
                <select name="cuenta" id="cuenta" onChange={(e) => setUser({...user, tipo: e.target.value})}>
                    <option value="ahorros">Cuenta de Ahorros</option>
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