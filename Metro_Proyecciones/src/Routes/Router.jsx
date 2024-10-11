import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MenuPrinsipal from '../paginas/MenuPrinsipal';
import RegistrarFuncion from '../paginas/RegistrarFuncion';
import Gestiondeboletos from '../Paginas/Gestiondeboletos';
import Estadisticas from '../Paginas/Estadisticas';
import DatosHistoricos from '../Paginas/DatosHistoricos';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrinsipal />} />
        <Route path="/registrar-funcion" element={<RegistrarFuncion />} />
        <Route path="/gestion-de-boletos" element={<Gestiondeboletos/>} />
        <Route path="/Estadisticas" element={<Estadisticas/>}/>
        <Route path="/Datos-Historicos" element={<DatosHistoricos/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
