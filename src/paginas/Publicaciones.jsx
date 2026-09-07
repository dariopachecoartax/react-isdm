import { useEffect, useState } from 'react';
import FormularioPublicacion from '../componentes/FormularioPublicacion';
import ListaPublicaciones from '../componentes/ListaPublicaciones';
import {
  actualizarPublicacion,
  crearPublicacion,
  eliminarPublicacion,
  obtenerPublicaciones,
} from '../services/publicaciones';

function Publicaciones() {
  const [lista, setLista] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [publicacionEditando, setPublicacionEditando] = useState(null);

  useEffect(() => {
    obtenerPublicaciones().then(({ data, error }) => {
      if (error) alert(error.message);
      else setLista(data);
      setCargando(false);
    });
  }, []);

  async function refrescarLista() {
    setLista(await obtenerPublicaciones().then((r) => r.data));
  }

  // El mismo formulario crea o edita según si hay una publicación en edición.
  async function guardar(datos) {
    const { error } = publicacionEditando
      ? await actualizarPublicacion(publicacionEditando.id, datos)
      : await crearPublicacion(datos);

    if (error) return alert(error.message);

    setPublicacionEditando(null);
    await refrescarLista();
  }

  async function borrar(id) {
    if (!window.confirm('¿Seguro que querés borrar esta publicación?')) return;

    const { error } = await eliminarPublicacion(id);
    if (error) return alert(error.message);

    setLista(lista.filter((publicacion) => publicacion.id !== id));
  }

  return (
    <section className="publicaciones">
      <h1>Publicaciones</h1>

      <FormularioPublicacion
        publicacionEditando={publicacionEditando}
        onGuardar={guardar}
        onCancelar={() => setPublicacionEditando(null)}
      />

      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <ListaPublicaciones
          publicaciones={lista}
          onEditar={setPublicacionEditando}
          onBorrar={borrar}
        />
      )}
    </section>
  );
}

export default Publicaciones;
