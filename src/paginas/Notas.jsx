import { useEffect, useState } from 'react';
import { borrarNota, crearNota, traerNotas } from '../services/notas';

function Notas() {
  const [notas, setNotas] = useState([]);
  const [contenido, setContenido] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    traerNotas()
      .then((lista) => setNotas(lista))
      .catch((error) => setError(error.message))
      .finally(() => setCargando(false));
  }, []);

  async function agregar(evento) {
    evento.preventDefault();
    if (!contenido.trim()) return;

    try {
      const nota = await crearNota(contenido.trim());
      setNotas([nota, ...notas]);
      setContenido('');
    } catch (error) {
      setError(error.message);
    }
  }

  async function eliminar(id) {
    try {
      await borrarNota(id);
      setNotas(notas.filter((nota) => nota.id !== id));
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <section className="notas">
      <h1>Mis notas</h1>
      <p className="resumen">Cada usuario ve únicamente las notas que creó.</p>

      <form className="form-nota" onSubmit={agregar}>
        <input
          type="text"
          placeholder="Escribir una nota"
          value={contenido}
          onChange={(evento) => setContenido(evento.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>

      {error && <p className="error">{error}</p>}

      {cargando ? (
        <p>Cargando...</p>
      ) : notas.length > 0 ? (
        <ul className="lista-notas">
          {notas.map((nota) => (
            <li key={nota.id}>
              <span>{nota.contenido}</span>
              <button onClick={() => eliminar(nota.id)}>Borrar</button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="sin-resultados">
          <p>Todavía no guardaste ninguna nota.</p>
        </div>
      )}
    </section>
  );
}

export default Notas;
