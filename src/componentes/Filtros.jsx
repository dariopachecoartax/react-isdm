const turnos = ['todos', 'mañana', 'tarde', 'noche'];

function Filtros({ turnoActivo, onCambiarTurno, busqueda, onBuscar }) {
  return (
    <div className="filtros">
      <div className="botones-turno">
        {turnos.map((turno) => (
          <button
            key={turno}
            className={turno === turnoActivo ? 'boton-turno activo' : 'boton-turno'}
            onClick={() => onCambiarTurno(turno)}
          >
            {turno}
          </button>
        ))}
      </div>

      <input
        type="search"
        className="buscador"
        placeholder="Buscar comisión"
        value={busqueda}
        onChange={(evento) => onBuscar(evento.target.value)}
      />
    </div>
  );
}

export default Filtros;
