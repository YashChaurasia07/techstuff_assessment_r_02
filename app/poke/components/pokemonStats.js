import StatCard from './statCard';

export default function PokemonStats({ pokemonDetails, activeTab }) {
  return (
    <div className="space-y-4">
      {/* Game Indices */}
      <StatCard
        title="Game Indices Count"
        value={pokemonDetails.game_indices?.length || 0}
        description="Games this Pokemon appears in"
        colorScheme="purple"
        icon={
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        }
      />

      {/* Total Moves */}
      <StatCard
        title="Total Moves Count"
        value={pokemonDetails.moves?.length || 0}
        description="Available moves to learn"
        colorScheme="green"
        icon={
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        }
      />

      {/* Type Info */}
      <StatCard
        title="Current Type"
        value={pokemonDetails.types?.[activeTab]?.type?.name || 'Unknown'}
        description={`Slot ${pokemonDetails.types?.[activeTab]?.slot || 0}`}
        colorScheme="blue"
        valueClass="text-2xl"
        capitalize
        icon={
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        }
      />

      {/* Base Stats */}
      {pokemonDetails.stats && pokemonDetails.stats.length > 0 && (
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl border border-orange-200 shadow-sm">
          <h3 className="text-sm font-medium text-orange-700 mb-3 uppercase tracking-wide">
            Base Stats
          </h3>
          <div className="space-y-2">
            {pokemonDetails.stats.slice(0, 3).map((stat, idx) => (
              <div key={`${stat.stat.name}-${idx}`} className="flex items-center justify-between">
                <span className="text-xs text-orange-700 capitalize font-medium">
                  {stat.stat.name.replace('-', ' ')}
                </span>
                <div className="flex items-center">
                  <div className="w-24 bg-orange-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((stat.base_stat / 255) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-orange-900 w-8 text-right">
                    {stat.base_stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
