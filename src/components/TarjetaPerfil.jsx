function TarjetaPerfil({ nombre, cargo, imagen }) {
  const estiloTarjeta = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    maxWidth: '220px',
  };

  return (
    <div style={estiloTarjeta}>
      <img src={imagen} alt={nombre} width="80" />

      <h3>{nombre}</h3>
      <p>{cargo}</p>
    </div>
  );
}

export default TarjetaPerfil;
