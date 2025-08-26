'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ClientAreaPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')

  const user = {
    name: 'Marthex',
    email: 'me@marthex.dev',
    joinDate: '15 Ocak 2024',
    avatar: 'MA'
  }

  const stats = [
    { 
      title: 'Aktif Hizmetler', 
      value: '3', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'from-[#678FFF] to-[#4A55A2]',
      bgColor: 'from-[#678FFF]/10 to-[#4A55A2]/5'
    },
    { 
      title: 'Destek Talepleri', 
      value: '1', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/10 to-orange-600/5'
    }
  ]

  const activeServices = [
    {
      id: 'vds-001',
      name: 'Discord Destek Botu',
      type: 'Discord Bot',
      status: 'Aktif',
      ip: '185.169.180.217',
      expiryDate: '15 Şubat 2025',
      statusColor: 'green'
    },
    {
      id: 'bot-001',
      name: 'Discord Moderasyon Botu',
      type: 'Discord Bot',
      status: 'Aktif',
      ip: '185.169.180.218',
      expiryDate: '30 Ocak 2025',
      statusColor: 'green'
    },
    {
      id: 'domain-001',
      name: 'Discord Kayıt Botu',
      type: 'Discord Bot',
      status: 'Aktif',
      ip: '-',
      expiryDate: '15 Aralık 2024',
      statusColor: 'green'
    }
  ]

  const supportTickets = [
    {
      id: '#962005',
      title: 'Bağlantı Sorunları',
      status: 'Kapalı',
      lastUpdate: '12 Ağustos 2025 (14:19)',
      priority: 'Yüksek',
      statusColor: 'gray'
    },
    {
      id: '#515279',
      title: 'Botum Kapalı',
      status: 'Kapalı',
      lastUpdate: '12 Ağustos 2025 (18:13)',
      priority: 'Orta',
      statusColor: 'gray'
    },
    {
      id: '#485842',
      title: 'Discord Bot Token Nasıl Alabilirim?',
      status: 'Kapalı',
      lastUpdate: '11 Mart 2023 (15:41)',
      priority: 'Düşük',
      statusColor: 'gray'
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Genel Bakış', icon: '📊' },
    { id: 'services', label: 'Hizmetlerim', icon: '🖥️' },
    { id: 'support', label: 'Destek', icon: '🎫' }
  ]

  return (
    <main className="bg-[#1a1a1a] min-h-screen pt-15">
      {/* Header */}
      <div className="bg-[#232323] border-b border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Hoşgeldiniz, {user.name}</h1>
              <p className="text-gray-400 text-sm mt-1">Müşteri Paneli</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-white font-medium">{user.email}</div>
                <div className="text-gray-400 text-sm">Üye: {user.joinDate}</div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#678FFF] to-[#4A55A2] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{user.avatar}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-12 mt-8">
        {/* Quick Stats - Always visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative overflow-hidden bg-[#232323] border border-gray-700 rounded-xl p-6">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor}`} />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center text-white`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                </div>
                <h3 className="text-gray-300 font-medium">{stat.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-[#232323] border border-gray-700 rounded-xl mb-6">
          <div className="flex flex-wrap border-b border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium transition-colors duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-[#678FFF] text-[#678FFF] bg-[#678FFF]/5'
                    : 'border-transparent text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Active Services */}
              <div className="bg-[#232323] border border-gray-700 rounded-xl">
                <div className="p-4 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#678FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Aktif Hizmetler
                    </h2>
                    <Link 
                      href="/services" 
                      className="text-[#678FFF] hover:text-white text-sm font-medium transition-colors"
                    >
                      Tümünü Gör
                    </Link>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  {activeServices.slice(0, 3).map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-gray-600">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${service.statusColor === 'green' ? 'bg-green-500' : 'bg-gray-500'}`} />
                        <div>
                          <div className="text-white font-medium text-sm">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.type}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-medium ${service.statusColor === 'green' ? 'text-green-400' : 'text-gray-400'}`}>
                          {service.status}
                        </div>
                        <div className="text-gray-400 text-xs">{service.expiryDate}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Support Tickets */}
              <div className="bg-[#232323] border border-gray-700 rounded-xl">
                <div className="p-4 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#678FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Son Destek Talepleri
                    </h2>
                    <Link href="/newTicket"  className="bg-[#678FFF] text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-[#4A55A2] transition-colors">
                      + Yeni Talep
                    </Link>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  {supportTickets.slice(0, 3).map((ticket, index) => (
                    <div key={index} className="p-3 bg-[#1a1a1a] rounded-lg border border-gray-600">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-[#678FFF] font-medium text-sm">{ticket.id}</div>
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-600 text-gray-300">
                          {ticket.status}
                        </span>
                      </div>
                      <div className="text-white font-medium mb-1 text-sm">{ticket.title}</div>
                      <div className="text-gray-400 text-xs">{ticket.lastUpdate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="bg-[#232323] border border-gray-700 rounded-xl">
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-white">Tüm Hizmetlerim</h2>
                  <Link
                    href="/order"
                    className="bg-[#678FFF] text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-[#4A55A2] transition-colors"
                  >
                    + Yeni Hizmet
                  </Link>
                </div>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Hizmet arama..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-[#678FFF] focus:outline-none text-sm"
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {activeServices.map((service, index) => (
                    <div key={index} className="p-4 bg-[#1a1a1a] rounded-lg border border-gray-600 hover:border-[#678FFF]/30 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${service.statusColor === 'green' ? 'bg-green-500' : 'bg-gray-500'}`} />
                          <div>
                            <h3 className="text-white font-bold text-sm">{service.name}</h3>
                            <p className="text-gray-400 text-xs">{service.type}</p>
                            {service.ip !== '-' && <p className="text-gray-500 text-xs">IP: {service.ip}</p>}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-medium mb-1 text-sm ${service.statusColor === 'green' ? 'text-green-400' : 'text-gray-400'}`}>
                            {service.status}
                          </div>
                          <div className="text-gray-400 text-xs">Bitiş: {service.expiryDate}</div>
                          <Link href="/services" className="mt-1 bg-[#678FFF]/10 text-[#678FFF] px-2 py-1 rounded text-xs hover:bg-[#678FFF]/20 transition-colors">
                            Detayları Gör
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="bg-[#232323] border border-gray-700 rounded-xl">
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">Destek Talepleri</h2>
                  <Link href="/newTicket" className="bg-[#678FFF] text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-[#4A55A2] transition-colors">
                    + Yeni Destek Talebi
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {supportTickets.map((ticket, index) => (
                    <div key={index} className="p-4 bg-[#1a1a1a] rounded-lg border border-gray-600 hover:border-[#678FFF]/30 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[#678FFF] font-bold text-sm">{ticket.id}</span>
                            <span className="px-2 py-1 text-xs rounded-full bg-gray-600 text-gray-300">
                              {ticket.status}
                            </span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              ticket.priority === 'Yüksek' ? 'bg-red-500/20 text-red-400' :
                              ticket.priority === 'Orta' ? 'bg-orange-500/20 text-orange-400' :
                              'bg-green-500/20 text-green-400'
                            }`}>
                              {ticket.priority}
                            </span>
                          </div>
                          <h3 className="text-white font-bold mb-1 text-sm">{ticket.title}</h3>
                          <p className="text-gray-400 text-xs">Son Güncelleme: {ticket.lastUpdate}</p>
                        </div>
                        <Link href="/ticketMessage" className="bg-[#678FFF]/10 text-[#678FFF] px-3 py-1 rounded-lg text-xs hover:bg-[#678FFF]/20 transition-colors">
                          Görüntüle
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}