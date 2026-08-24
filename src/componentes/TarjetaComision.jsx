import Etiqueta from './Etiqueta';

function TarjetaComision({ comision, onInscribir }) {
  const { id, nombre, profe, cupo, inscriptos, turno, nivel } = comision;

  const sinCupo = inscriptos >= cupo;
  const lugares = cupo - inscriptos;

  return (
    <article className="tarjeta">
      <h2>{nombre}</h2>
      <p className="profe">Profe: {profe}</p>

      <div className="etiquetas">
        <Etiqueta texto={nivel} tipo="nivel" />
        <Etiqueta texto={turno} tipo="turno" />
      </div>

      <p className="cupo">
        {sinCupo ? 'Sin cupo' : `Quedan ${lugares} lugares de ${cupo}`}
      </p>

      {!sinCupo && lugares <= 3 && <p className="aviso">¡Últimos lugares!</p>}

      <button
        className="boton-inscribir"
        onClick={() => onInscribir(id)}
        disabled={sinCupo}
      >
        Inscribirme
      </button>
    </article>
  );
}

export default TarjetaComision;
