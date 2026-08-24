function Encabezado({ titulo, totalComisiones, totalDisponibles }) {
  return (
    <header className="encabezado">
      <h1>{titulo}</h1>
      <p className="resumen">
        {totalComisiones} comisiones · {totalDisponibles} con lugar disponible
      </p>
    </header>
  );
}

export default Encabezado;
