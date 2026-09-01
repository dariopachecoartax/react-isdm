function Buscador({ busqueda, onBuscar }) {
  return (
    <div className="buscador">
      <input
        type="search"
        placeholder="Buscar pokémon"
        value={busqueda}
        onChange={(evento) => onBuscar(evento.target.value)}
      />
    </div>
  );
}

export default Buscador;
