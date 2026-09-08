import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { obtenerCursoPorId } from '../services/cursos';

function DetalleCurso() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    obtenerCursoPorId(id)
      .then((curso) => setCurso(curso))
      .catch((error) => setError(error.message))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) return <p className="estado">Cargando curso...</p>;

  if (error) {
    return (
      <section>
        <p className="error">{error}</p>
        <Link className="enlace-detalle" to="/cursos">
          Volver a la lista
        </Link>
      </section>
    );
  }

  return (
    <article className="detalle">
      <header className="encabezado">
        <h1>{curso.nombre}</h1>
      </header>

      <dl>
        <dt>Id</dt>
        <dd>{curso.id}</dd>

        <dt>Profesor</dt>
        <dd>{curso.profesor || 'Sin asignar'}</dd>

        <dt>Nivel</dt>
        <dd>{curso.nivel || 'Sin definir'}</dd>

        <dt>Cupo</dt>
        <dd>{curso.cupo} personas</dd>

        <dt>Descripción</dt>
        <dd>{curso.descripcion || 'Sin descripción'}</dd>

        <dt>Creado</dt>
        <dd>{new Date(curso.creado_en).toLocaleDateString('es-AR')}</dd>
      </dl>

      <Link className="enlace-detalle" to="/cursos">
        Volver a la lista
      </Link>
    </article>
  );
}

export default DetalleCurso;
