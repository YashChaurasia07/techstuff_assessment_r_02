
export default function loadingSpinner({ message = 'Loading...', submessage = '' }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex-grow">
      <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mb-4"></div>
        <div className="text-xl text-gray-700 font-medium">{message}</div>
        {submessage && <div className="text-sm text-gray-500 mt-2">{submessage}</div>}
      </div>
    </div>
  );
}
