import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { cerrarSesion } from '../services/auth';

function Navegacion() {
  const { sesion } = useAuth();
  const navigate = useNavigate();

  async function salir() {
    await cerrarSesion();
    navigate('/login');
  }

  return (
    <nav className="navegacion">
      <div className="enlaces">
        <Link to="/publicaciones">Publicaciones</Link>

        {sesion && (
          <>
            <Link to="/comisiones">Comisiones</Link>
            <Link to="/notas">Mis notas</Link>
          </>
        )}
      </div>

      <div className="usuario">
        {sesion ? (
          <>
            <span>{sesion.user.email}</span>
            <button onClick={salir}>Salir</button>
          </>
        ) : (
          <Link to="/login">Entrar</Link>
        )}
      </div>
    </nav>
  );
}

export default Navegacion;
