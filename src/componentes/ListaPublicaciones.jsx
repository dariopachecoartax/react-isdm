function ListaPublicaciones({ publicaciones, onEditar, onBorrar }) {
  if (publicaciones.length === 0) {
    return <p>Todavía no hay publicaciones</p>;
  }

  return (
    <ul className="lista-publicaciones">
      {publicaciones.map((publicacion) => (
        <li key={publicacion.id}>
          <h2>{publicacion.titulo}</h2>
          <p>{publicacion.contenido}</p>
          <p className="fecha">
            {new Date(publicacion.creado_en).toLocaleString('es-AR')}
          </p>

          <div className="acciones">
            <button onClick={() => onEditar(publicacion)}>Editar</button>
            <button onClick={() => onBorrar(publicacion.id)}>Borrar</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaPublicaciones;
