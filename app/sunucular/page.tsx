'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServerTable from '@/components/ServerTable'

const intelServers = [
  { 
    name: 'MINE-XEON-2', 
    cpu: '2 CPU', 
    cpuModel: 'E5-2690v4', 
    ram: '4 GB', 
    ramType: 'DDR4-RAM', 
    disk: '35 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 65,
    originalPrice: 80,
    period: 'aylık'
  },
  { 
    name: 'MINE-XEON-3', 
    cpu: '4 CPU', 
    cpuModel: 'E5-2690v4', 
    ram: '6 GB', 
    ramType: 'DDR4-RAM', 
    disk: '40 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 90,
    originalPrice: 110,
    period: 'aylık'
  },
  { 
    name: 'MINE-XEON-4', 
    cpu: '4 CPU', 
    cpuModel: 'E5-2690v4', 
    ram: '8 GB', 
    ramType: 'DDR4-RAM', 
    disk: '45 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 125,
    originalPrice: 150,
    period: 'aylık'
  },
  { 
    name: 'MINE-XEON-5', 
    cpu: '6 CPU', 
    cpuModel: 'E5-2690v4', 
    ram: '10 GB', 
    ramType: 'DDR4-RAM', 
    disk: '50 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 150,
    originalPrice: 180,
    period: 'aylık'
  },
  { 
    name: 'MINE-XEON-6', 
    cpu: '8 CPU', 
    cpuModel: 'E5-2690v4', 
    ram: '12 GB', 
    ramType: 'DDR4-RAM', 
    disk: '60 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 190,
    originalPrice: 230,
    period: 'aylık'
  },
  { 
    name: 'MINE-XEON-7', 
    cpu: '10 CPU', 
    cpuModel: 'E5-2690v4', 
    ram: '14 GB', 
    ramType: 'DDR4-RAM', 
    disk: '70 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 230,
    originalPrice: 280,
    period: 'aylık'
  },
  { 
    name: 'MINE-XEON-8', 
    cpu: '12 CPU', 
    cpuModel: 'E5-2690v4', 
    ram: '16 GB', 
    ramType: 'DDR4-RAM', 
    disk: '80 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 240,
    originalPrice: 290,
    period: 'aylık'
  },
  { 
    name: 'MINE-XEON-9', 
    cpu: '10 CPU', 
    cpuModel: 'E5-2690v4', 
    ram: '20 GB', 
    ramType: 'DDR4-RAM', 
    disk: '120 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 280,
    originalPrice: 340,
    period: 'aylık'
  },
  { 
    name: 'MINE-XEON-10', 
    cpu: '12 CPU', 
    cpuModel: 'E5-2690v4', 
    ram: '24 GB', 
    ramType: 'DDR4-RAM', 
    disk: '120 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 350,
    originalPrice: 420,
    period: 'aylık'
  },
  { 
    name: 'MINE-XEON-11', 
    cpu: '12 CPU', 
    cpuModel: 'E5-2690v4', 
    ram: '28 GB', 
    ramType: 'DDR4-RAM', 
    disk: '140 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 470,
    originalPrice: 560,
    period: 'aylık'
  },
  { 
    name: 'MINE-XEON-12', 
    cpu: '12 CPU', 
    cpuModel: 'E5-2690v4', 
    ram: '32 GB', 
    ramType: 'DDR4-RAM', 
    disk: '150 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 520,
    originalPrice: 620,
    period: 'aylık'
  }
]

const ryzenServers = [
  { 
    name: 'MINE-R9-1', 
    cpu: '1 CPU', 
    cpuModel: 'Ryzen 9 5900X', 
    ram: '2 GB', 
    ramType: 'DDR4-RAM', 
    disk: '30 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 100,
    originalPrice: 120,
    period: 'aylık'
  },
  { 
    name: 'MINE-R9-2', 
    cpu: '4 CPU', 
    cpuModel: 'Ryzen 9 5900X', 
    ram: '6 GB', 
    ramType: 'DDR4-RAM', 
    disk: '50 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 240,
    originalPrice: 290,
    period: 'aylık'
  },
  { 
    name: 'MINE-R9-3', 
    cpu: '4 CPU', 
    cpuModel: 'Ryzen 9 5900X', 
    ram: '8 GB', 
    ramType: 'DDR4-RAM', 
    disk: '60 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 320,
    originalPrice: 380,
    period: 'aylık'
  },
  { 
    name: 'MINE-R9-4', 
    cpu: '4 CPU', 
    cpuModel: 'Ryzen 9 5900X', 
    ram: '10 GB', 
    ramType: 'DDR4-RAM', 
    disk: '70 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 420,
    originalPrice: 500,
    period: 'aylık'
  },
  { 
    name: 'MINE-R9-5', 
    cpu: '6 CPU', 
    cpuModel: 'Ryzen 9 5900X', 
    ram: '12 GB', 
    ramType: 'DDR4-RAM', 
    disk: '80 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 520,
    originalPrice: 620,
    period: 'aylık'
  },
  { 
    name: 'MINE-R9-6', 
    cpu: '6 CPU', 
    cpuModel: 'Ryzen 9 5900X', 
    ram: '14 GB', 
    ramType: 'DDR4-RAM', 
    disk: '90 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 625,
    originalPrice: 750,
    period: 'aylık'
  },
  { 
    name: 'MINE-R9-7', 
    cpu: '8 CPU', 
    cpuModel: 'Ryzen 9 5900X', 
    ram: '16 GB', 
    ramType: 'DDR4-RAM', 
    disk: '110 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 700,
    originalPrice: 840,
    period: 'aylık'
  },
  { 
    name: 'MINE-R9-8', 
    cpu: '10 CPU', 
    cpuModel: 'Ryzen 9 5900X', 
    ram: '20 GB', 
    ramType: 'DDR4-RAM', 
    disk: '120 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 999.99,
    originalPrice: 1200,
    period: 'aylık'
  },
  { 
    name: 'MINE-R9-9', 
    cpu: '10 CPU', 
    cpuModel: 'Ryzen 9 5900X', 
    ram: '24 GB', 
    ramType: 'DDR4-RAM', 
    disk: '140 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 1080,
    originalPrice: 1300,
    period: 'aylık'
  },
  { 
    name: 'MINE-R9-10', 
    cpu: '12 CPU', 
    cpuModel: 'Ryzen 9 5900X', 
    ram: '28 GB', 
    ramType: 'DDR4-RAM', 
    disk: '150 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 1200,
    originalPrice: 1440,
    period: 'aylık'
  },
  { 
    name: 'MINE-R9-11', 
    cpu: '12 CPU', 
    cpuModel: 'Ryzen 9 5900X', 
    ram: '32 GB', 
    ramType: 'DDR4-RAM', 
    disk: '170 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 1299.99,
    originalPrice: 1560,
    period: 'aylık'
  },
  { 
    name: 'MINE-R9-12', 
    cpu: '14 CPU', 
    cpuModel: 'Ryzen 9 5900X', 
    ram: '36 GB', 
    ramType: 'DDR4-RAM', 
    disk: '200 GB', 
    diskType: 'NVMe SSD', 
    network: '1 GBit', 
    networkType: 'İnternet Hattı',
    price: 1450,
    originalPrice: 1740,
    period: 'aylık'
  }
]

export default function SunucularPage() {
  const [activeTab, setActiveTab] = useState<'intel' | 'ryzen'>('intel')
  const servers = activeTab === 'intel' ? intelServers : ryzenServers

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <Header />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home Button */}
          <div className="mb-8">
            <a 
              href="/"
              className="inline-flex items-center space-x-2 text-purple-300 hover:text-white transition-colors duration-300 group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-semibold">Ana Sayfaya Dön</span>
            </a>
          </div>

          {/* Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <span className="text-purple-300 font-semibold text-lg">Premium Sunucu Çözümleri</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-6 sm:mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Güçlü
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                  Sunucular
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up delay-200">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light px-4">
                İhtiyaçlarınıza uygun en iyi sunucu paketini seçin.
                <br className="hidden sm:block" />
                <span className="block sm:inline mt-2 sm:mt-0">
                  <span className="text-purple-300 font-semibold">Intel ve Ryzen işlemcili</span> seçeneklerimizle yüksek performans garantisi.
                </span>
              </p>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up delay-300 mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">24+</div>
                  <div className="text-purple-300 text-sm font-semibold">Sunucu Paketi</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">99.9%</div>
                  <div className="text-purple-300 text-sm font-semibold">Uptime</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">7/24</div>
                  <div className="text-purple-300 text-sm font-semibold">Destek</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">TR</div>
                  <div className="text-purple-300 text-sm font-semibold">Lokasyon</div>
                </div>
              </div>
            </div>

            {/* Features Highlight */}
            <div className="animate-fade-in-up delay-300 mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-500/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Yüksek Performans</h3>
                  <p className="text-gray-400 text-sm">Intel & Ryzen işlemciler</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-500/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Güvenlik</h3>
                  <p className="text-gray-400 text-sm">DDoS koruması</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-500/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">NVMe SSD</h3>
                  <p className="text-gray-400 text-sm">Ultra hızlı disk</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-500/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">7/24 Destek</h3>
                  <p className="text-gray-400 text-sm">Kesintisiz hizmet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16 sm:mb-20">
            <div className="animate-fade-in-up delay-400">
              <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-xl rounded-3xl p-3 border border-purple-500/30 shadow-2xl shadow-purple-500/20 w-full max-w-2xl">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={() => setActiveTab('intel')}
                    className={`group relative px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-500 transform hover:scale-105 ${
                      activeTab === 'intel'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                        : 'text-purple-200 hover:text-white hover:bg-purple-500/20'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activeTab === 'intel' 
                          ? 'bg-white/20' 
                          : 'bg-purple-500/20'
                      }`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <span className="relative z-10">Intel Xeon</span>
                    </div>
                    {activeTab === 'intel' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('ryzen')}
                    className={`group relative px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-500 transform hover:scale-105 ${
                      activeTab === 'ryzen'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                        : 'text-purple-200 hover:text-white hover:bg-purple-500/20'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activeTab === 'ryzen' 
                          ? 'bg-white/20' 
                          : 'bg-purple-500/20'
                      }`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="relative z-10">AMD Ryzen</span>
                    </div>
                    {activeTab === 'ryzen' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Servers Table */}
          <div className="animate-fade-in-up delay-500">
            <ServerTable servers={servers} />
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 sm:mt-20 lg:mt-24 animate-fade-in-up delay-600">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl sm:rounded-3xl border border-purple-500/30 backdrop-blur-sm shadow-2xl shadow-purple-500/10">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-200 font-bold text-sm sm:text-base lg:text-lg">7/24 Teknik Destek</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-pulse delay-500"></div>
                <span className="text-purple-200 font-bold text-sm sm:text-base lg:text-lg">Anında Kurulum</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>
                <span className="text-purple-200 font-bold text-sm sm:text-base lg:text-lg">Güvenli Altyapı</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
