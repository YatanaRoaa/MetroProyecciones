import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MenuPrinsipal from '../paginas/MenuPrinsipal';
import RegistrarFuncion from '../paginas/RegistrarFuncion';
import Gestiondeboletos from '../Paginas/Gestiondeboletos';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrinsipal />} />
        <Route path="/registrar-funcion" element={<RegistrarFuncion />} />
        <Route path="/Gestion-de-boletos"element={<Gestiondeboletos/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
