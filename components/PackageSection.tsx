'use client'

import { useState } from 'react'
import PackageCard from './PackageCard'

interface PackageSectionProps {
  activeTab: 'intel' | 'ryzen'
  setActiveTab: (tab: 'intel' | 'ryzen') => void
}

const intelPackages = [
  { model: 'MINE-XEON-2', cpu: '2 CPU İşlemci', ram: '4 GB', disk: '35 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 65, period: 'Aylık' },
  { model: 'MINE-XEON-3', cpu: '4 CPU İşlemci', ram: '6 GB', disk: '40 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 90, period: 'Aylık' },
  { model: 'MINE-XEON-4', cpu: '4 CPU İşlemci', ram: '8 GB', disk: '45 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 125, period: 'Aylık' },
  { model: 'MINE-XEON-5', cpu: '6 CPU İşlemci', ram: '10 GB', disk: '50 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 150, period: 'Aylık' },
  { model: 'MINE-XEON-6', cpu: '8 CPU İşlemci', ram: '12 GB', disk: '60 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 190, period: 'Aylık' },
  { model: 'MINE-XEON-7', cpu: '10 CPU İşlemci', ram: '14 GB', disk: '70 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 230, period: 'Aylık' },
  { model: 'MINE-XEON-8', cpu: '12 CPU İşlemci', ram: '16 GB', disk: '80 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 240, period: 'Aylık' },
  { model: 'MINE-XEON-9', cpu: '10 CPU İşlemci', ram: '20 GB', disk: '120 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 280, period: 'Aylık' },
  { model: 'MINE-XEON-10', cpu: '12 CPU İşlemci', ram: '24 GB', disk: '120 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 350, period: 'Aylık' },
  { model: 'MINE-XEON-11', cpu: '12 CPU İşlemci', ram: '28 GB', disk: '140 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 470, period: 'Aylık' },
  { model: 'MINE-XEON-12', cpu: '12 CPU İşlemci', ram: '32 GB', disk: '150 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 520, period: 'Aylık' },
]

const ryzenPackages = [
  { model: 'MINE-R9-1', cpu: '1 CPU İşlemci', ram: '2 GB', disk: '30 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 100, period: 'Aylık' },
  { model: 'MINE-R9-2', cpu: '4 CPU İşlemci', ram: '6 GB', disk: '50 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 240, period: 'Aylık' },
  { model: 'MINE-R9-3', cpu: '4 CPU İşlemci', ram: '8 GB', disk: '60 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 320, period: 'Aylık' },
  { model: 'MINE-R9-4', cpu: '4 CPU İşlemci', ram: '10 GB', disk: '70 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 420, period: 'Aylık' },
  { model: 'MINE-R9-5', cpu: '6 CPU İşlemci', ram: '12 GB', disk: '80 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 520, period: 'Aylık' },
  { model: 'MINE-R9-6', cpu: '6 CPU İşlemci', ram: '14 GB', disk: '90 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 625, period: 'Aylık' },
  { model: 'MINE-R9-7', cpu: '8 CPU İşlemci', ram: '16 GB', disk: '110 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 700, period: 'Aylık' },
  { model: 'MINE-R9-8', cpu: '10 CPU İşlemci', ram: '20 GB', disk: '120 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 999.99, period: 'Aylık' },
  { model: 'MINE-R9-9', cpu: '10 CPU İşlemci', ram: '24 GB', disk: '140 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 1080, period: 'Aylık' },
  { model: 'MINE-R9-10', cpu: '12 CPU İşlemci', ram: '28 GB', disk: '150 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 1200, period: 'Aylık' },
  { model: 'MINE-R9-11', cpu: '12 CPU İşlemci', ram: '32 GB', disk: '170 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 1299.99, period: 'Aylık' },
  { model: 'MINE-R9-12', cpu: '14 CPU İşlemci', ram: '36 GB', disk: '200 GB NVMe', network: '100 Mbit Hat / 1G Port', location: 'Türkiye', price: 1450, period: 'Aylık' },
]

export default function PackageSection({ activeTab, setActiveTab }: PackageSectionProps) {
  const packages = activeTab === 'intel' ? intelPackages : ryzenPackages

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hosting Paketlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İhtiyaçlarınıza uygun en iyi hosting paketini seçin. Intel ve Ryzen işlemcili seçeneklerimizle yüksek performans garantisi.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('intel')}
              className={`px-8 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'intel'
                  ? 'bg-white text-primary-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Intel Xeon Paketleri
            </button>
            <button
              onClick={() => setActiveTab('ryzen')}
              className={`px-8 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'ryzen'
                  ? 'bg-white text-primary-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Ryzen Paketleri
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.model} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
