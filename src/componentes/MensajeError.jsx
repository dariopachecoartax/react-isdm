function MensajeError({ mensaje, onReintentar }) {
  return (
    <div className="estado estado-error">
      <h2>No se pudieron cargar los pokémon</h2>
      <p className="detalle-error">{mensaje}</p>
      <button className="boton-reintentar" onClick={onReintentar}>
        Reintentar
      </button>
    </div>
  );
}

export default MensajeError;
