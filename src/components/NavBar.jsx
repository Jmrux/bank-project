import { Link } from 'react-router-dom'
import { GoHomeFill } from "react-icons/go";
import { FaMoneyCheck } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LiaUserNinjaSolid } from "react-icons/lia";
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserAltSlash } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
    const [ showBarrita, setShowBarrita ] = useState(false);
    return (
        <nav id='sidenav' className={showBarrita ? "close" : ""}>
            <ul>
            <li>
                <span className='logo'>EsteBanquito</span>
                <button id="togglebarrita" onClick={() => {
                    setShowBarrita(!showBarrita);
                }}>
                    <GiHamburgerMenu/>
                </button>
            </li>
            <li className='active'>
                    <Link to='/dashboard'><GoHomeFill/>Principal</Link>
            </li>
            <li>
                <Link to='/transacciones'><FaMoneyCheck/>Transacciones</Link>
            </li>
            <li>
                <Link to='/servicios'><GiReceiveMoney/>Servicios</Link>
            </li>
            <li>
                <Link to='/movimientos'><FaMoneyBillTransfer/>Movimientos</Link>
            </li>                
            <li>
                   <Link to='/gestionar'><LiaUserNinjaSolid/>Tu Cuenta</Link>
            </li>
            <li className='abajo'>
                   <Link to='/' onClick={() => localStorage.clear()}><FaUserAltSlash/>Cerrar Sesion</Link>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar