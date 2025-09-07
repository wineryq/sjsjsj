export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-6 sm:mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Bilişim
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-1 sm:mt-2">
              Teknolojileri
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-in-up delay-200">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 sm:mb-16 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light px-4">
            Intel ve Ryzen işlemcili sunucularımızla yüksek performanslı hosting deneyimi yaşayın.
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">
              <span className="text-purple-300 font-semibold">Türkiye lokasyonunda</span> güvenilir ve hızlı hizmet.
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-300">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center px-4">
            <a 
              href="/sunucular" 
              className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl shadow-2xl shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 hover:shadow-purple-500/40 overflow-hidden"
            >
              <span className="relative z-10">Sunucuları İncele</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
            
            <a 
              href="https://discord.gg/qgunuhE7g6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 border-2 border-purple-400 text-purple-300 font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl backdrop-blur-sm transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 hover:bg-purple-400 hover:text-black hover:shadow-glow inline-block text-center"
            >
              <span className="relative z-10">İletişime Geç</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
