'use client'

import BotCard from '@/components/BotCard'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { bots } from '@/data/bots'

export default function BotsPage() {
  const [botCount, setBotCount] = useState(12)
  const [userCount, setUserCount] = useState(8263)

  // Simüle edilmiş canlı istatistikler
  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => Math.floor(prev + Math.random() * 20 - 5))
    }, 3000)
    return () => clearInterval(interval)
  }, [])


  return (
    <main className="bg-[#1a1a1a]">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[600px] py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
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
        <div className="relative max-w-[1200px] mx-auto px-4">
          {/* Stats Bar */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-8 bg-[#232323]/50 backdrop-blur-sm px-8 py-3 rounded-full border border-gray-700/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/icons/bot-icon.png"
                    alt="Bot"
                    width={40}
                    height={40}
                    className="opacity-70"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#678FFF]">{botCount}</div>
                  <div className="text-gray-400 text-sm">Aktif Bot</div>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-700/30"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/icons/users-icon.png"
                    alt="Users"
                    width={40}
                    height={40}
                    className="opacity-70"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#678FFF]">{userCount.toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">Aktif Kullanıcı</div>
                </div>
              </div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discord Botları
              <span className="block text-lg md:text-xl font-normal text-gray-400 mt-4">
                Sunucunuzu güçlendirecek, yönetimi kolaylaştıracak ve eğlenceyi artıracak özel botlarımız
              </span>
            </h1>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-[#232323]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 hover:border-[#678FFF]/50 transition-colors group">
              <div className="w-12 h-12 mb-4 text-[#678FFF] mx-auto">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold text-center mb-2 group-hover:text-[#678FFF] transition-colors">Yüksek Performans</h3>
              <p className="text-gray-400 text-sm text-center">Optimize edilmiş kodlama ile kesintisiz çalışma</p>
            </div>
            <div className="bg-[#232323]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 hover:border-[#678FFF]/50 transition-colors group">
              <div className="w-12 h-12 mb-4 text-[#678FFF] mx-auto">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold text-center mb-2 group-hover:text-[#678FFF] transition-colors">Güvenli Altyapı</h3>
              <p className="text-gray-400 text-sm text-center">En son güvenlik standartlarıyla korunur</p>
            </div>
            <div className="bg-[#232323]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 hover:border-[#678FFF]/50 transition-colors group">
              <div className="w-12 h-12 mb-4 text-[#678FFF] mx-auto">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold text-center mb-2 group-hover:text-[#678FFF] transition-colors">7/24 Destek</h3>
              <p className="text-gray-400 text-sm text-center">Uzman ekibimizden anında yardım alın</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bots Grid */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {bots.map((bot) => (
              <BotCard key={bot.id} bot={bot} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 