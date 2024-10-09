import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MenuPrinsipal from '../paginas/MenuPrinsipal';
import CancelarFuncion from '../Paginas/CancelarFuncion';
import RegistrarFuncion from '../Paginas/RegistrarFuncion';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrinsipal />} />
        <Route path="/registrar-funcion" element={<RegistrarFuncion />} />
        <Route path="/cancelar-funcion" element={<CancelarFuncion />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
