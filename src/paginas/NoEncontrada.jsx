import { Link } from 'react-router-dom';

function NoEncontrada() {
  return (
    <section className="no-encontrada">
      <h1>404</h1>
      <p className="resumen">La página que buscás no existe.</p>

      <Link className="enlace-detalle" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NoEncontrada;
