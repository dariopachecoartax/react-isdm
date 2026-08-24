import { useState } from 'react';
import { comisiones as comisionesIniciales } from './datos';
import Encabezado from './componentes/Encabezado';
import Filtros from './componentes/Filtros';
import ListaComisiones from './componentes/ListaComisiones';
import SinResultados from './componentes/SinResultados';
import './App.css';

function App() {
  const [comisiones, setComisiones] = useState(comisionesIniciales);
  const [turnoActivo, setTurnoActivo] = useState('todos');
  const [busqueda, setBusqueda] = useState('');

  function inscribir(id) {
    setComisiones(
      comisiones.map((comision) =>
        comision.id === id
          ? { ...comision, inscriptos: comision.inscriptos + 1 }
          : comision
      )
    );
  }

  const texto = busqueda.trim().toLowerCase();

  const comisionesFiltradas = comisiones
    .filter((comision) => turnoActivo === 'todos' || comision.turno === turnoActivo)
    .filter((comision) => comision.nombre.toLowerCase().includes(texto));

  const totalDisponibles = comisiones.filter(
    (comision) => comision.inscriptos < comision.cupo
  ).length;

  return (
    <div className="app">
      <Encabezado
        titulo="Cartelera de comisiones"
        totalComisiones={comisiones.length}
        totalDisponibles={totalDisponibles}
      />

      <Filtros
        turnoActivo={turnoActivo}
        onCambiarTurno={setTurnoActivo}
        busqueda={busqueda}
        onBuscar={setBusqueda}
      />

      {comisionesFiltradas.length > 0 ? (
        <ListaComisiones comisiones={comisionesFiltradas} onInscribir={inscribir} />
      ) : (
        <SinResultados />
      )}
    </div>
  );
}

export default App;
