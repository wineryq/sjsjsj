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

interface ServerTableProps {
  servers: Server[]
}

export default function ServerTable({ servers }: ServerTableProps) {
  return (
    <div className="relative">
      {/* Table Container */}
      <div className="bg-gradient-to-br from-gray-900/95 to-purple-900/30 rounded-3xl overflow-hidden border border-purple-500/30 backdrop-blur-xl shadow-2xl shadow-purple-500/20 relative">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-purple-600/5 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
        {/* Header - Hidden on mobile */}
        <div className="hidden lg:block bg-gradient-to-r from-purple-600/15 to-pink-600/15 px-6 lg:px-8 py-6 lg:py-8 border-b border-purple-500/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-white font-bold text-lg">Sunucu Özellikleri</span>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 lg:gap-6 text-xs lg:text-sm font-bold text-purple-200">
              <div className="col-span-1 flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg shadow-purple-400/50"></div>
                <span>Sunucu İsmi</span>
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg shadow-blue-400/50"></div>
                <span>İşlemci</span>
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg shadow-green-400/50"></div>
                <span>Bellek</span>
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg shadow-orange-400/50"></div>
                <span>Disk</span>
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full shadow-lg shadow-cyan-400/50"></div>
                <span>Network</span>
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-lg shadow-pink-400/50"></div>
                <span>Fiyat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Server Rows */}
        <div className="divide-y divide-purple-500/20">
          {servers.map((server, index) => (
            <div 
              key={server.name} 
              className="group px-4 sm:px-6 lg:px-8 py-6 sm:py-8 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-6 gap-4 lg:gap-6 items-center relative z-10">
                {/* Server Name */}
                <div className="col-span-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-black text-white text-lg lg:text-xl group-hover:text-purple-200 transition-colors duration-300">
                        {server.name}
                      </div>
                      <div className="text-xs text-purple-300">Premium Server</div>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 text-xs lg:text-sm font-semibold transition-all duration-300 hover:scale-105 group/link"
                  >
                    <span>Tüm Özellikler</span>
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Processor */}
                <div className="col-span-1">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm lg:text-lg">{server.cpu}</div>
                      <div className="text-xs lg:text-sm text-purple-300">{server.cpuModel}</div>
                    </div>
                  </div>
                </div>

                {/* Memory */}
                <div className="col-span-1">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm lg:text-lg">{server.ram}</div>
                      <div className="text-xs lg:text-sm text-purple-300">{server.ramType}</div>
                    </div>
                  </div>
                </div>

                {/* Disk */}
                <div className="col-span-1">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm lg:text-lg">{server.disk}</div>
                      <div className="text-xs lg:text-sm text-purple-300">{server.diskType}</div>
                    </div>
                  </div>
                </div>

                {/* Network */}
                <div className="col-span-1">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm lg:text-lg">{server.network}</div>
                      <div className="text-xs lg:text-sm text-purple-300">{server.networkType}</div>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-1">
                  <div className="text-right">
                    <div className="flex items-center justify-end space-x-2 mb-2">
                      <div className="text-xs text-gray-400 line-through">
                        {server.originalPrice}₺
                      </div>
                      <div className="px-2 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                        <span className="text-green-300 text-xs font-bold">KDV Dahil</span>
                      </div>
                    </div>
                    <div className="text-2xl lg:text-3xl font-black text-white mb-3 lg:mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {server.price}₺/{server.period}
                    </div>
                    <a 
                      href="https://discord.gg/qgunuhE7g6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl lg:rounded-2xl shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/40 overflow-hidden text-sm lg:text-base inline-block w-full text-center"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <span>Satın Al</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden relative z-10">
                {/* Server Name and Price */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-black text-white text-lg mb-1 group-hover:text-purple-200 transition-colors duration-300">
                        {server.name}
                      </div>
                      <div className="text-xs text-purple-300">Premium Server</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end space-x-2 mb-2">
                      <div className="text-xs text-gray-400 line-through">
                        {server.originalPrice}₺
                      </div>
                      <div className="px-2 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                        <span className="text-green-300 text-xs font-bold">KDV Dahil</span>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-white mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {server.price}₺/{server.period}
                    </div>
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Processor */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{server.cpu}</div>
                      <div className="text-xs text-purple-300">{server.cpuModel}</div>
                    </div>
                  </div>

                  {/* Memory */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/25">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{server.ram}</div>
                      <div className="text-xs text-purple-300">{server.ramType}</div>
                    </div>
                  </div>

                  {/* Disk */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{server.disk}</div>
                      <div className="text-xs text-purple-300">{server.diskType}</div>
                    </div>
                  </div>

                  {/* Network */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{server.network}</div>
                      <div className="text-xs text-purple-300">{server.networkType}</div>
                    </div>
                  </div>
                </div>

                {/* Buy Button */}
                <a 
                  href="https://discord.gg/qgunuhE7g6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full group relative px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/40 overflow-hidden inline-block text-center"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span>Satın Al</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
