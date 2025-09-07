import { Mail, Phone, MapPin, Headphones } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-0 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Branding and Social Links */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
              MineHost
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-lg leading-relaxed text-base sm:text-lg">
              Türkiye'nin en güvenilir hosting sağlayıcısı. Intel ve Ryzen işlemcili sunucularımızla 
              yüksek performanslı hosting çözümleri sunuyoruz.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 sm:space-x-6">
              <a 
                href="https://discord.gg/qgunuhE7g6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Discord"
                className="group w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Hızlı Linkler
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/sunucular", label: "Sunucular" },
                { href: "/#features", label: "Özellikler" },
                { href: "/#contact", label: "İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="group text-gray-300 hover:text-purple-300 transition-all duration-300 font-medium hover:translate-x-2 inline-block"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              İletişim
            </h4>
            <ul className="space-y-4">
              {[
                { icon: <Mail className="w-5 h-5" />, text: "info@minehost.com.tr", href: "mailto:info@minehost.com.tr" },
                { icon: <Phone className="w-5 h-5" />, text: "+63 963 852 7195", href: "tel:+639638527195" },
                { icon: <MapPin className="w-5 h-5" />, text: "İstanbul, Türkiye" },
                { icon: <Headphones className="w-5 h-5" />, text: "7/24 Destek" },
              ].map((contact, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-300 group">
                  <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </span>
                  {contact.href ? (
                    <a href={contact.href} className="group-hover:text-purple-300 transition-colors duration-300">
                      {contact.text}
                    </a>
                  ) : (
                    <span className="group-hover:text-purple-300 transition-colors duration-300">
                      {contact.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left text-sm sm:text-base">
              © 2025 MineHost. Tüm hakları saklıdır.
            </p>
            
            {/* Additional Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-500">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Sunucular Aktif</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                <span>99.9% Uptime</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
