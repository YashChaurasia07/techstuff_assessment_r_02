export default function pageHeader({ title, subtitle }) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        {title}
      </h1>
      <p className="text-gray-600">
        {subtitle}
      </p>
    </header>
  );
}
