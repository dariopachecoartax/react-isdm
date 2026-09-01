import TarjetaPokemon from './TarjetaPokemon';

function ListaPokemon({ pokemones }) {
  return (
    <div className="lista-pokemon">
      {pokemones.map((pokemon) => (
        <TarjetaPokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default ListaPokemon;
