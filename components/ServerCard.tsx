interface Server {
  name: string
  cpu: string
  cpuModel: string
  ram: string
  ramType: string
  disk: string
  diskType: string
  network: string
  networkType: string
  price: number
  originalPrice: number
  period: string
}

interface ServerCardProps {
  server: Server
  index: number
}

export default function ServerCard({ server, index }: ServerCardProps) {
  const isPopular = index === 2 || index === 3

  return (
    <div className={`bg-gradient-to-br from-gray-900/90 to-purple-900/20 rounded-2xl p-6 border backdrop-blur-sm ${isPopular ? 'border-purple-400/50 shadow-lg shadow-purple-500/25' : 'border-purple-500/30'} relative hover:border-purple-400/70 transition-all duration-300 hover:transform hover:scale-105`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-purple-500/25">
            ⭐ Popüler
          </span>
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">{server.name}</h3>
        <a href="#" className="text-purple-400 text-sm hover:text-purple-300 transition-colors font-semibold">
          🔍 Tüm Özellikler
        </a>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-lg">{server.cpu}</div>
            <div className="text-purple-300 text-sm">{server.cpuModel}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-lg">{server.ram}</div>
            <div className="text-purple-300 text-sm">{server.ramType}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-lg">{server.disk}</div>
            <div className="text-purple-300 text-sm">{server.diskType}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-lg">{server.network}</div>
            <div className="text-purple-300 text-sm">{server.networkType}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-right">
          <div className="text-gray-400 text-sm line-through">
            {server.originalPrice}₺ yerine
          </div>
          <div className="text-2xl font-bold text-white">
            {server.price}₺/{server.period}
          </div>
        </div>
        <button className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
          isPopular
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25'
            : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
        }`}>
          🛒 Satın Al
        </button>
      </div>
    </div>
  )
}
