import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MenuPrinsipal from '../paginas/MenuPrinsipal';
import RegistrarFuncion from '../paginas/RegistrarFuncion';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrinsipal />} />
        <Route path="/registrar-funcion" element={<RegistrarFuncion />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
