export default function PokemonTable({ 
  pokemons, 
  currentPage, 
  itemsPerPage, 
  selectedPokemon, 
  onPokemonClick, 
  loading,
  detailsLoading 
}) {
  const hasPokemons = pokemons.length > 0;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-grow">
      {loading && hasPokemons && (
        <div className="bg-blue-50 border-b border-blue-100 px-4 py-2">
          <div className="flex items-center text-blue-700 text-sm">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-700 mr-2"></div>
            <span>Updating...</span>
          </div>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="min-w-full" role="table" aria-label="Pokemon list">
          <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
            <tr>
              <th 
                scope="col"
                className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Sr. Number
              </th>
              <th 
                scope="col"
                className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Poke Name
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {hasPokemons ? (
              pokemons.map((pokemon, index) => {
                const serialNumber = (currentPage - 1) * itemsPerPage + index + 1;
                const isSelected = selectedPokemon === pokemon.name;
                
                return (
                  <tr 
                    key={`${pokemon.name}-${serialNumber}`}
                    className={`transition-colors duration-150 hover:bg-gray-50 ${
                      isSelected ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                    }`}
                  >
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {serialNumber}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button
                        onClick={() => onPokemonClick(pokemon.url, pokemon.name)}
                        className="capitalize text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition-all duration-150 font-medium"
                        aria-label={`View details for ${pokemon.name}`}
                        disabled={detailsLoading}
                      >
                        {pokemon.name}
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="2" className="px-6 py-12 text-center text-gray-500">
                  <svg className="mx-auto h-12 w-12 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg font-medium">No Pokemon found</p>
                  <p className="text-sm mt-1">Try refreshing the page</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
