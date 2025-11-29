export default function PokemonTabs({ types, activeTab, onTabChange }) {
  return (
    <div className="border-b">
      <div className="flex overflow-x-auto" role="tablist" aria-label="Pokemon types">
        {types.map((type, index) => (
          <button
            key={`${type.type.name}-${index}`}
            onClick={() => onTabChange(index)}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tabpanel-${index}`}
            className={`flex-shrink-0 px-6 py-3 text-sm font-medium capitalize transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${
              activeTab === index
                ? 'bg-blue-500 text-white border-b-4 border-blue-600 shadow-inner'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-b-4 border-transparent'
            }`}
          >
            {type.type.name}
          </button>
        ))}
      </div>
    </div>
  );
}
