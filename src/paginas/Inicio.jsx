import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <section className="inicio">
      <h1>Cursos del ISDM</h1>
      <p className="resumen">
        Catálogo de cursos de la Tecnicatura en Análisis de Sistemas
        Informáticos. Los datos se leen de una base de datos en Supabase, así
        que esta versión solo consulta: todavía no se puede crear, editar ni
        borrar.
      </p>

      <Link className="enlace-detalle" to="/cursos">
        Ver los cursos
      </Link>
    </section>
  );
}

export default Inicio;
