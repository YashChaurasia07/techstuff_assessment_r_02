const colorSchemes = {
  purple: {
    bg: 'from-purple-50 to-purple-100',
    border: 'border-purple-200',
    text: 'text-purple-700',
    value: 'text-purple-900',
    description: 'text-purple-600',
    iconBg: 'bg-purple-200'
  },
  green: {
    bg: 'from-green-50 to-green-100',
    border: 'border-green-200',
    text: 'text-green-700',
    value: 'text-green-900',
    description: 'text-green-600',
    iconBg: 'bg-green-200'
  },
  blue: {
    bg: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    text: 'text-blue-700',
    value: 'text-blue-900',
    description: 'text-blue-600',
    iconBg: 'bg-blue-200'
  },
  orange: {
    bg: 'from-orange-50 to-orange-100',
    border: 'border-orange-200',
    text: 'text-orange-700',
    value: 'text-orange-900',
    description: 'text-orange-600',
    iconBg: 'bg-orange-200'
  }
};

export default function StatCard({ 
  title, 
  value, 
  description, 
  colorScheme = 'blue', 
  icon,
  valueClass = 'text-3xl',
  capitalize = false
}) {
  const colors = colorSchemes[colorScheme] || colorSchemes.blue;

  return (
    <div className={`bg-gradient-to-br ${colors.bg} p-5 rounded-xl border ${colors.border} shadow-sm hover:shadow-md transition-shadow duration-150`}>
      <div className="flex items-center justify-between">
        <div className="flex-grow">
          <h3 className={`text-sm font-medium ${colors.text} mb-1 uppercase tracking-wide`}>
            {title}
          </h3>
          <p className={`${valueClass} font-bold ${colors.value} ${capitalize ? 'capitalize' : ''}`}>
            {value}
          </p>
          <p className={`text-xs ${colors.description} mt-1`}>
            {description}
          </p>
        </div>
        {icon && (
          <div className={`${colors.iconBg} p-3 rounded-full`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
