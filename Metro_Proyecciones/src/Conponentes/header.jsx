import { faBars } from '@fortawesome/free-solid-svg-icons'
import Icon from './icon';
import { useState } from 'react';
import './../assets/css/header.css';
import {Link} from 'react-router-dom';



const MenuDesplegado = ({handleClick}) =>{
    return(<>
    <button className='menu-desplegado-button-menu' onClick={handleClick}><Icon className="icon-menu"icon={faBars} /></button>
    <section className='menu-desplegado'>
        <Link to="/registrar-funcion"><button className='menu-desplegado-button'>Registrar Funcion</button></Link>
        <Link to="/"><button className='menu-desplegado-button'>Cancelar Funcion</button></Link>
        <Link to="/"><button className='menu-desplegado-button'>Funciones Registradas</button></Link>
        <Link to="/"><button className='menu-desplegado-button'>Menu</button></Link>
    </section>
    </>)    
}

// eslint-disable-next-line react/prop-types
const Header = ({nombreTitulo}) => {
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }
    return (
        <>
        <section className='header'> 
            <button className='header-button-menu' onClick={handleClick}><Icon icon={faBars} /></button>
            <h1 className='h1'>{nombreTitulo}</h1>
        </section>
        {menu? <MenuDesplegado handleClick={handleClick} /> : <></>}
        </>
    )
}

export default Header