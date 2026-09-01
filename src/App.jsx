import { useEffect, useState } from 'react';
import axios from 'axios';
import { nombresPokemon } from './datos';
import Encabezado from './componentes/Encabezado';
import Buscador from './componentes/Buscador';
import ListaPokemon from './componentes/ListaPokemon';
import Cargando from './componentes/Cargando';
import MensajeError from './componentes/MensajeError';
import SinResultados from './componentes/SinResultados';
import './App.css';

const urlBase = import.meta.env.VITE_API_URL;

// La respuesta de PokeAPI trae muchísimos campos. Nos quedamos sólo con los que muestra la tarjeta.
function armarPokemon(datos) {
  return {
    id: datos.id,
    nombre: datos.name,
    tipos: datos.types.map((entrada) => entrada.type.name),
    imagen: datos.sprites.other['official-artwork'].front_default,
    altura: datos.height / 10,
    peso: datos.weight / 10,
    experiencia: datos.base_experience,
  };
}

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [estado, setEstado] = useState('cargando');
  const [mensajeError, setMensajeError] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [intento, setIntento] = useState(0);

  useEffect(() => {
    async function traerPokemones() {
      setEstado('cargando');

      if (!urlBase) {
        setMensajeError('Falta definir VITE_API_URL en el archivo .env');
        setEstado('error');
        return;
      }

      try {
        const respuestas = await Promise.all(
          nombresPokemon.map((nombre) => axios.get(`${urlBase}/pokemon/${nombre}`))
        );

        setPokemones(respuestas.map((respuesta) => armarPokemon(respuesta.data)));
        setEstado('exito');
      } catch (error) {
        setMensajeError(error.message);
        setEstado('error');
      }
    }

    traerPokemones();
  }, [intento]);

  const texto = busqueda.trim().toLowerCase();

  const pokemonesFiltrados = pokemones.filter((pokemon) =>
    pokemon.nombre.includes(texto)
  );

  return (
    <div className="app">
      <Encabezado titulo="Pokédex ISDM" total={pokemones.length} />

      {estado === 'cargando' && <Cargando />}

      {estado === 'error' && (
        <MensajeError
          mensaje={mensajeError}
          onReintentar={() => setIntento(intento + 1)}
        />
      )}

      {estado === 'exito' && (
        <>
          <Buscador busqueda={busqueda} onBuscar={setBusqueda} />

          {pokemonesFiltrados.length > 0 ? (
            <ListaPokemon pokemones={pokemonesFiltrados} />
          ) : (
            <SinResultados />
          )}
        </>
      )}
    </div>
  );
}

export default App;
