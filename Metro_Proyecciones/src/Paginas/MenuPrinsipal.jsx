import './../assets/css/MenuPrinsipal.css';
import imagen from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

const MenuPrinsipal = () => {
  return (
    <>
      <section className="menu-prinsipal-flex">
        <img src={imagen} alt="logo" className="menu-prinsipal-logo" />
        <div className="menu-prinsipal-group-buttons">
          <button className="menu-pricipal-button">Gestión de boletos</button>
          <Link to="/registrar-funcion">
            <button className="menu-pricipal-button">Gestión de función</button>
          </Link>
          <button className="menu-pricipal-button">Estadísticas</button>
        </div>
      </section>
    </>
  );
};

export default MenuPrinsipal;
