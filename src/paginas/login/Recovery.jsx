import './Login.css'
import { useState } from 'react'
import axios from 'axios'

export const Recovery = () => {
    const [user, setUser] = useState({username: '', cuenta:''});

    const validarDatosInvalidos = () => {
        if(user.username == '') return true
        if(user.cuenta == '') return true
    }
    
    const recuperarContra = () => {
        if(validarDatosInvalidos()){
            alert('Faltan datos por ingresar.')
        } else {
        axios.post('http://localhost:3000/recovery', user)
         .then(({ data }) => {
            if(data == 'Datos erroneos.'){
                alert(data)
                console.log(data)
            } else {
                const newPass = prompt("Usuario encontrado. Por favor ingrese una nueva contraseña.")
                if(newPass == '')
                    alert("No se ingresó ningun valor.")
                else if(newPass == null)
                    alert("Acción cancelada")
                else{
                    data.contrasena = newPass
                    axios.put('http://localhost:3000/usuarios/'+data.id, data)
                    .then((response) => {
                        alert(response.data.message + '. Ya puedes iniciar sesión.');
                    })
                    .catch(({response}) => {
                        console.log(response.data)
                    })
                }
            }
         })}
    }

    return(
            <div className="caja caja-login">
            <div className="cajita cajita-login">
                <span className='logo'>EsteBanquito</span>
                <h4>Recuperar tu contraseña</h4>
                <input type="text" placeholder='Correo' onChange={ (e) => setUser({...user, username: e.target.value})}/>
                <input type="text" placeholder='Número de Cuenta' onChange={ (e) => setUser({...user, cuenta: e.target.value})}/>
                <h6>
                    Volver al{' '}
                    <a href="/"> Inicio</a>
                </h6>
                <button onClick={recuperarContra}>Solicitar Recuperación</button>
            </div>

        </div>
    )   
}

export default Recovery;