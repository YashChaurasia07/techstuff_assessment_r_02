export default function PokemonHeader({ pokemonDetails }) {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 border-b">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold capitalize text-white">
            {pokemonDetails.name}
          </h2>
          <p className="text-blue-100 text-sm mt-1">
            #{pokemonDetails.id} • Height: {pokemonDetails.height} • Weight: {pokemonDetails.weight}
          </p>
        </div>
        {pokemonDetails.sprites?.front_default && (
          <img 
            src={pokemonDetails.sprites.front_default} 
            alt={pokemonDetails.name}
            className="w-20 h-20 md:w-24 md:h-24 bg-white bg-opacity-20 rounded-full p-2"
          />
        )}
      </div>
    </div>
  );
}
