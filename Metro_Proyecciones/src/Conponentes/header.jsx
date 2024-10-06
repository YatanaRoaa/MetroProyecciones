import { faBars } from '@fortawesome/free-solid-svg-icons'
import Icon from './icon';
import './../assets/css/header.css';
const Header = () => {
    return (
        <>
        <section className='header'> 
            <button className='header-button-menu'><Icon icon={faBars} /></button>
            <h1 className='h1'>Registrar funcion</h1>
        </section>
        </>
    )
}

export default Header