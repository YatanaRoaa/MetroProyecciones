import { faBars } from '@fortawesome/free-solid-svg-icons'
import Icon from './icon';
import './../assets/css/header.css';
// eslint-disable-next-line react/prop-types
const Header = ({nombreTitulo}) => {
    return (
        <>
        <section className='header'> 
            <button className='header-button-menu'><Icon icon={faBars} /></button>
            <h1 className='h1'>{nombreTitulo}</h1>
        </section>
        </>
    )
}

export default Header