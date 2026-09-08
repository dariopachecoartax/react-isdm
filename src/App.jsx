import { Route, Routes } from 'react-router-dom';
import BarraNavegacion from './componentes/BarraNavegacion';
import Inicio from './paginas/Inicio';
import Cursos from './paginas/Cursos';
import DetalleCurso from './paginas/DetalleCurso';
import NoEncontrada from './paginas/NoEncontrada';
import './App.css';

function App() {
  return (
    <div className="app">
      <BarraNavegacion />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursos/:id" element={<DetalleCurso />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </div>
  );
}

export default App;
