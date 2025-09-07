export default function Features() {
  const features = [
    {
      title: 'Yüksek Performans',
      description: 'Intel ve Ryzen işlemcilerle maksimum performans garantisi',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Güvenlik',
      description: '7/24 güvenlik izleme ve DDoS koruması',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Hızlı SSD',
      description: 'NVMe SSD disklerle ultra hızlı veri erişimi',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Türkiye Lokasyonu',
      description: 'Türkiye\'de bulunan sunucularımızla düşük gecikme',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      color: 'from-red-400 to-pink-500'
    },
    {
      title: '7/24 Destek',
      description: 'Uzman ekibimizden kesintisiz teknik destek',
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      title: 'Uygun Fiyat',
      description: 'Rekabetçi fiyatlarla en iyi hosting deneyimi',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
      color: 'from-emerald-400 to-teal-500'
    }
  ]

  return (
    <section id="features" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-0 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Neden
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                MineHost?
              </span>
            </h2>
          </div>
          
          <div className="animate-fade-in-up delay-200">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light px-4">
              Modern teknoloji ve uzman ekibimizle size en iyi hosting deneyimini sunuyoruz.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full p-6 sm:p-8 bg-gradient-to-br from-gray-900/80 to-purple-900/20 rounded-2xl sm:rounded-3xl border border-purple-500/20 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>
                
                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-center font-light text-sm sm:text-base">
                  {feature.description}
                </p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24 animate-fade-in-up delay-500">
          <div className="inline-flex items-center space-x-3 sm:space-x-4 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl sm:rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-200 font-semibold text-sm sm:text-base">7/24 Teknik Destek</span>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
