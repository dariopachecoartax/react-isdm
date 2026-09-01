function Encabezado({ titulo, total }) {
  return (
    <header className="encabezado">
      <h1>{titulo}</h1>
      {total > 0 && (
        <p className="resumen">{total} pokémon traídos desde PokeAPI</p>
      )}
    </header>
  );
}

export default Encabezado;
