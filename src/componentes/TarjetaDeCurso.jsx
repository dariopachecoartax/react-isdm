import { Link } from 'react-router-dom';
import Etiqueta from './Etiqueta';

function TarjetaDeCurso({ curso }) {
  const { id, nombre, profesor, nivel, cupo } = curso;

  return (
    <article className="tarjeta">
      <h2>{nombre}</h2>
      <p className="profe">Profesor: {profesor || 'Sin asignar'}</p>

      {nivel && (
        <div className="etiquetas">
          <Etiqueta texto={nivel} tipo="nivel" />
        </div>
      )}

      <p className="cupo">Cupo: {cupo} personas</p>

      <Link className="enlace-detalle" to={`/cursos/${id}`}>
        Ver detalle
      </Link>
    </article>
  );
}

export default TarjetaDeCurso;
