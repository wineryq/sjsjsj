'use client'

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              MineHost
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {[
                { href: '/', label: 'Ana Sayfa' },
                { href: '/sunucular', label: 'Sunucular' },
                { href: '/#features', label: 'Özellikler' },
                { href: '/#contact', label: 'İletişim' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={typeof window !== 'undefined' && window.location.hash === item.href ? 'page' : undefined}
                className="group relative px-6 py-3 text-purple-200 hover:text-white font-semibold transition-all duration-300 rounded-xl hover:bg-purple-500/10"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-purple-200 hover:text-white transition-colors duration-300"
              aria-label={isMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            >
              <div className={`w-6 h-6 flex flex-col justify-center space-y-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-90' : 'w-6'}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-0' : 'w-6'}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-90' : 'w-6'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 bg-black/90 backdrop-blur-xl rounded-2xl border border-purple-500/20 mt-4">
            <nav className="space-y-2">
              {[
                { href: '/', label: 'Ana Sayfa' },
                { href: '/sunucular', label: 'Sunucular' },
                { href: '/#features', label: 'Özellikler' },
                { href: '/#contact', label: 'İletişim' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-purple-200 hover:text-white hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button 
              onClick={() => window.open('https://discord.gg/qgunuhE7g6','_blank')}
              className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300">
                Sipariş Ver
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}