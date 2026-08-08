const NOMBRE = 'Dario';
const CARRERA = 'Tecnicatura en Análisis de Sistemas de Información';
const AÑO_ACTUAL = new Date().getFullYear();

const estiloTarjeta = {
  border: '1px solid #888',
  borderRadius: '8px',
  padding: '12px',
  marginBottom: '12px',
};

function Encabezado() {
  return (
    <header className="encabezado">
      <h1>Hola, soy {NOMBRE}</h1>
      <p>
        Estudio {CARRERA} y estamos en {AÑO_ACTUAL}.
      </p>
    </header>
  );
}

function Materia(props) {
  const detalle = props.nombre + ' — ' + props.profesor;
  return (
    <section style={estiloTarjeta} title={detalle}>
      <h2>{props.nombre}</h2>
      <p>Profesor: {props.profesor}</p>
      <p>Estado: {props.aprobada ? 'Aprobada' : 'En curso'}</p>
    </section>
  );
}

function Pie() {
  return (
    <footer className="pie">
      Práctica de React — {NOMBRE} — {AÑO_ACTUAL}
    </footer>
  );
}

function App() {
  return (
    <div>
      <Encabezado />
      <Materia nombre="Programación I" profesor="Rodrigo Alday" aprobada={true} />
      <Materia nombre="Bases de Datos" profesor="Soledad Miranda" aprobada={false} />
      <Pie />
    </div>
  );
}

export default App;
