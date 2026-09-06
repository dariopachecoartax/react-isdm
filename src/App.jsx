import { Navigate, Route, Routes } from 'react-router-dom';
import Navegacion from './componentes/Navegacion';
import LoginForm from './componentes/LoginForm';
import RegisterForm from './componentes/RegisterForm';
import RutaPrivada from './componentes/RutaPrivada';
import Comisiones from './paginas/Comisiones';
import Notas from './paginas/Notas';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navegacion />

      <Routes>
        <Route path="/" element={<Navigate to="/comisiones" replace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registro" element={<RegisterForm />} />

        <Route
          path="/comisiones"
          element={
            <RutaPrivada>
              <Comisiones />
            </RutaPrivada>
          }
        />

        <Route
          path="/notas"
          element={
            <RutaPrivada>
              <Notas />
            </RutaPrivada>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
