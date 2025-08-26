'use client'

import HostingPlanCard from '@/components/HostingPlanCard'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HostingPage() {
  const [activeUsers, setActiveUsers] = useState(2481)
  const [uptime, setUptime] = useState(99.99)

  // Simüle edilmiş canlı istatistikler
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => Math.floor(prev + Math.random() * 10 - 5))
      setUptime(prev => Math.min(100, Math.max(99.95, prev + (Math.random() * 0.02 - 0.01))))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const plans = [
    {
      id: 1,
      name: "Tercih Edilen",
      price: "74.90",
      originalPrice: "80",
      specs: {
        cpu: "XeonE5 2699 v4 - E5 2680 v4",
        cpuDetail: "4 Çekirdek İşlemci",
        ram: "2 GB",
        ramType: "DDR4 RAM",
        storage: "30 GB",
        storageType: "SSD Disk",
        traffic: "Limitsiz",
        trafficDetail: "Aylık Trafik",
        uptime: "%99 Uptime",
        uptimeDetail: "7/24 Kesintisiz Discord Botu",
        os: "İşletim Sistemi",
        osDetail: "Bot için özel olarak dizayn edildi",
        servers: "200 - 300 Sunucu",
        users: "250.000+ Kullanıcı",
        userDetail: "Önerilen Kullanıcı Aralığı"
      },
      color: "rgb(255, 71, 163)",
      recommended: false
    },
    {
      id: 2,
      name: "Gelişmiş",
      price: "84.90",
      originalPrice: "90",
      specs: {
        cpu: "XeonE5 2699 v4 - E5 2680 v4",
        cpuDetail: "4 Çekirdek İşlemci",
        ram: "3 GB",
        ramType: "DDR4 RAM",
        storage: "30 GB",
        storageType: "SSD Disk",
        traffic: "Limitsiz",
        trafficDetail: "Aylık Trafik",
        uptime: "%99 Uptime",
        uptimeDetail: "7/24 Kesintisiz Discord Botu",
        os: "İşletim Sistemi",
        osDetail: "Bot için özel olarak dizayn edildi",
        servers: "300 - 400 Sunucu",
        users: "500.000+ Kullanıcı",
        userDetail: "Önerilen Kullanıcı Aralığı"
      },
      color: "rgb(87, 242, 135)",
      recommended: true
    },
    {
      id: 3,
      name: "Profesyonel",
      price: "94.90",
      originalPrice: "100",
      specs: {
        cpu: "XeonE5 2699 v4 - E5 2680 v4",
        cpuDetail: "4 Çekirdek İşlemci",
        ram: "4 GB",
        ramType: "DDR4 RAM",
        storage: "35 GB",
        storageType: "SSD Disk",
        traffic: "Limitsiz",
        trafficDetail: "Aylık Trafik",
        uptime: "%99 Uptime",
        uptimeDetail: "7/24 Kesintisiz Discord Botu",
        os: "İşletim Sistemi",
        osDetail: "Bot için özel olarak dizayn edildi",
        servers: "400 - xxx Sunucu",
        users: "1.000.000+ Kullanıcı",
        userDetail: "Önerilen Kullanıcı Aralığı"
      },
      color: "rgb(255, 73, 73)",
      recommended: false
    }
  ]

  return (
    <main className="bg-[#1a1a1a]">
      {/* Enhanced Hero Section */}
      <section className="relative bg-[#1a1a1a] min-h-[600px] py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] -top-[400px] -right-[200px] opacity-[0.15]">
            <div className="absolute w-full h-full bg-[#678FFF] rounded-full blur-[100px] animate-pulse"></div>
          </div>
          <div className="absolute w-[600px] h-[600px] -bottom-[300px] -left-[150px] opacity-[0.15]">
            <div className="absolute w-full h-full bg-[#FF4D4D] rounded-full blur-[100px] animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/patterns/grid.png')] opacity-[0.05]"></div>

        {/* Main Content */}
        <div className="relative max-w-[1000px] mx-auto px-4">
          <div className="text-center">
            {/* Top Stats Bar */}
            <div className="inline-flex items-center gap-6 bg-[#232323]/50 backdrop-blur-sm px-6 py-2 rounded-full mb-12 border border-gray-700/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">Aktif Kullanıcı: <span className="text-green-500 font-medium">{activeUsers}</span></span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">Uptime: <span className="text-blue-500 font-medium">{uptime.toFixed(2)}%</span></span>
              </div>
            </div>

            {/* Main Title Section */}
            <div className="max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Discord Bot <span className="text-[#678FFF]">VDS</span> Paketleri
                <span className="block text-lg md:text-xl font-normal text-gray-400 mt-4">
                  Yüksek performanslı VDS çözümleriyle botlarınızı güçlendirin
                </span>
              </h1>
            </div>

            {/* OS Selection Cards */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
              <div className="group bg-[#232323] hover:bg-[#2a2a2a] p-6 rounded-xl border border-gray-700/30 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative animate-float">
                    <Image
                      src="/icons/windows.png"
                      alt="Windows"
                      width={48}
                      height={48}
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold group-hover:text-[#678FFF] transition-colors">Windows VDS</h3>
                    <p className="text-gray-400 text-sm">Kolay yönetim, geniş uyumluluk</p>
                  </div>
                </div>
              </div>
              <div className="group bg-[#232323] hover:bg-[#2a2a2a] p-6 rounded-xl border border-gray-700/30 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative animate-float-delayed">
                    <Image
                      src="/icons/linux.png"
                      alt="Linux"
                      width={48}
                      height={48}
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold group-hover:text-[#678FFF] transition-colors">Linux VDS</h3>
                    <p className="text-gray-400 text-sm">Yüksek performans, düşük kaynak kullanımı</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-[#232323]/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30">
                <div className="text-[#678FFF] font-bold text-2xl">7/24</div>
                <div className="text-gray-400 text-sm">Teknik Destek</div>
              </div>
              <div className="bg-[#232323]/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30">
                <div className="text-[#678FFF] font-bold text-2xl">%99.9</div>
                <div className="text-gray-400 text-sm">Uptime Garantisi</div>
              </div>
              <div className="bg-[#232323]/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30">
                <div className="text-[#678FFF] font-bold text-2xl">DDoS</div>
                <div className="text-gray-400 text-sm">Koruması</div>
              </div>
              <div className="bg-[#232323]/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30">
                <div className="text-[#678FFF] font-bold text-2xl">NVMe</div>
                <div className="text-gray-400 text-sm">SSD Disk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="bg-[#1a1a1a] py-12">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <HostingPlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
              onClick={() => window.location.href = '/contact'}
            >
              TÜM PAKETLERİ GÖRÜNTÜLE
            </button>
          </div>
        </div>
      </section>
    </main>
  )
} 