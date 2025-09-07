interface Package {
  model: string
  cpu: string
  ram: string
  disk: string
  network: string
  location: string
  price: number
  period: string
}

interface PackageCardProps {
  pkg: Package
  index: number
}

export default function PackageCard({ pkg, index }: PackageCardProps) {
  const isPopular = index === 2 || index === 3 // Mark some packages as popular

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 card-hover relative ${isPopular ? 'ring-2 ring-primary-500' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Popüler
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.model}</h3>
        <div className="text-3xl font-bold text-primary-600 mb-2">
          {pkg.price.toLocaleString('tr-TR')} TL
        </div>
        <div className="text-gray-500 text-sm">{pkg.period}</div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600 font-medium">CPU:</span>
          <span className="text-gray-900 font-semibold">{pkg.cpu}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600 font-medium">RAM:</span>
          <span className="text-gray-900 font-semibold">{pkg.ram}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600 font-medium">Disk:</span>
          <span className="text-gray-900 font-semibold">{pkg.disk}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600 font-medium">Network:</span>
          <span className="text-gray-900 font-semibold text-sm">{pkg.network}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 font-medium">Lokasyon:</span>
          <span className="text-gray-900 font-semibold">{pkg.location}</span>
        </div>
      </div>
    </div>
  )
}
