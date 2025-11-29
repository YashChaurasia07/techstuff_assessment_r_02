import PokemonHeader from './PokemonHeader';
import PokemonTabs from './PokemonTabs';
import PokemonStats from './PokemonStats';

export default function PokemonDetails({ 
  pokemonDetails, 
  activeTab, 
  onTabChange 
}) {
  if (!pokemonDetails) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 flex-grow">
        <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-gray-400">
          <svg className="w-24 h-24 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg font-medium text-gray-500">No Pokemon Selected</p>
          <p className="text-sm text-gray-400 mt-2 text-center max-w-xs">
            Click on a Pokemon name from the list to view detailed information
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-grow">
      <PokemonHeader pokemonDetails={pokemonDetails} />
      
      {pokemonDetails.types && pokemonDetails.types.length > 0 && (
        <PokemonTabs 
          types={pokemonDetails.types}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      )}

      <div 
        className="p-6"
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        <PokemonStats 
          pokemonDetails={pokemonDetails}
          activeTab={activeTab}
        />
      </div>
    </div>
  );
}
