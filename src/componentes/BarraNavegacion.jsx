import { NavLink } from 'react-router-dom';

function BarraNavegacion() {
  return (
    <nav className="barra">
      <NavLink to="/" end>
        Inicio
      </NavLink>
      <NavLink to="/cursos">Cursos</NavLink>
    </nav>
  );
}

export default BarraNavegacion;
