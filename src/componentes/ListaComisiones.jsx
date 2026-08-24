import TarjetaComision from './TarjetaComision';

function ListaComisiones({ comisiones, onInscribir }) {
  return (
    <div className="lista-comisiones">
      {comisiones.map((comision) => (
        <TarjetaComision
          key={comision.id}
          comision={comision}
          onInscribir={onInscribir}
        />
      ))}
    </div>
  );
}

export default ListaComisiones;
