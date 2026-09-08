import { useEffect, useState } from 'react';
import { obtenerCursos } from '../services/cursos';
import TarjetaDeCurso from '../componentes/TarjetaDeCurso';

function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    obtenerCursos()
      .then((lista) => setCursos(lista))
      .catch((error) => setError(error.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p className="estado">Cargando cursos...</p>;

  if (error) {
    return <p className="error">No pudimos traer los cursos: {error}</p>;
  }

  return (
    <section>
      <header className="encabezado">
        <h1>Cursos</h1>
        <p className="resumen">{cursos.length} cursos publicados</p>
      </header>

      {cursos.length > 0 ? (
        <div className="lista-cursos">
          {cursos.map((curso) => (
            <TarjetaDeCurso key={curso.id} curso={curso} />
          ))}
        </div>
      ) : (
        <div className="sin-resultados">
          <p>Todavía no hay cursos cargados.</p>
        </div>
      )}
    </section>
  );
}

export default Cursos;
