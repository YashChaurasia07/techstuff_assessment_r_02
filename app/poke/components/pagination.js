export default function pagination({ 
  currentPage, 
  totalPages, 
  onPrevious, 
  onNext, 
  isPreviousDisabled, 
  isNextDisabled,
  itemCount 
}) {
  return (
    <nav 
      className="mt-4 md:mt-6 flex items-center justify-between bg-white shadow-md rounded-lg px-4 md:px-6 py-4"
      aria-label="Pagination"
    >
      <button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        className={`flex items-center px-4 py-2 rounded-md font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isPreviousDisabled
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 shadow-sm hover:shadow-md'
        }`}
        aria-label="Previous page"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div className="flex flex-col items-center">
        <span className="text-sm font-medium text-gray-700">
          Page <span className="font-bold text-blue-600">{currentPage}</span> of <span className="font-bold">{totalPages}</span>
        </span>
        <span className="text-xs text-gray-500 mt-1">
          {itemCount > 0 && `Showing ${itemCount} Pokemon`}
        </span>
      </div>

      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`flex items-center px-4 py-2 rounded-md font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isNextDisabled
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 shadow-sm hover:shadow-md'
        }`}
        aria-label="Next page"
      >
        <span className="hidden sm:inline">Next</span>
        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
}
