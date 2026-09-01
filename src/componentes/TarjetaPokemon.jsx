import Etiqueta from './Etiqueta';

function TarjetaPokemon({ pokemon }) {
  const { id, nombre, tipos, imagen, altura, peso, experiencia } = pokemon;

  return (
    <article className="tarjeta">
      <img className="imagen" src={imagen} alt={nombre} loading="lazy" />

      <p className="numero">N.º {String(id).padStart(3, '0')}</p>
      <h2>{nombre}</h2>

      <div className="etiquetas">
        {tipos.map((tipo) => (
          <Etiqueta key={tipo} tipo={tipo} />
        ))}
      </div>

      <p className="dato">
        {altura} m · {peso} kg
      </p>
      <p className="dato">Experiencia base: {experiencia}</p>
    </article>
  );
}

export default TarjetaPokemon;
