'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TicketMessagePage() {
  const [message, setMessage] = useState('')

  const ticket = {
    id: '#962005',
    title: 'Bağlantı Sorunları',
    status: 'Kapalı',
    priority: 'Yüksek',
    department: 'Teknik Destek Ekibi',
    createdDate: '12 Ağustos 2025 (14:19)'
  }

  const messages = [
    {
      id: 1,
      sender: 'Marthex',
      isStaff: true,
      date: '12 Ağustos 2025 (14:19)',
      message: `Sunucunuzu farklı bir cihaza aktarmaya başladık. 20 dakika içerisinde aktif olacaktır.

Başka bir talebiniz bulunuyor ise çekinmeden belirtebilirsiniz. İyi günler.

Saygılarımızla,
Teknik Destek Ekibi`
    },
    {
      id: 2,
      sender: 'UserMart',
      isStaff: false,
      email: 'user@marthex.dev',
      date: '12 Ağustos 2025 (14:17)',
      message: 'Evet sorun bende devam etmektedir.'
    },
    {
      id: 3,
      sender: 'Marthex',
      isStaff: true,
      date: '12 Ağustos 2025 (14:17)',
      message: 'SSH erişimi aktif gözüküyor. Sorun devam ediyor mu?'
    }
  ]

  return (
    <main className="bg-[#1a1a1a] min-h-screen pt-15">
      {/* Header */}
      <div className="bg-[#232323] border-b border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/clientArea" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white">{ticket.title}</h1>
                <p className="text-gray-400 text-sm mt-1">Destek Talebi - {ticket.id}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                ticket.priority === 'Yüksek' ? 'bg-red-500/20 text-red-400' :
                ticket.priority === 'Orta' ? 'bg-orange-500/20 text-orange-400' :
                'bg-green-500/20 text-green-400'
              }`}>
                {ticket.priority}
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-gray-600 text-gray-300">
                {ticket.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        {/* Status Alert */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
          <p className="text-yellow-400 text-sm">
            Bu destek talebi kapalı. Destek talebine tekrar cevap vererek açabilirsiniz
          </p>
        </div>

        {/* Messages */}
        <div className="bg-[#232323] border border-gray-700 rounded-xl">
          {/* Header */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Yanıtla</h2>
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages List */}
          <div className="p-4 space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className="bg-[#1a1a1a] border border-gray-600 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    msg.isStaff ? 'bg-blue-600' : 'bg-gray-600'
                  }`}>
                    {msg.isStaff ? 'MA' : 'US'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-white font-medium text-sm">{msg.sender}</h4>
                      {msg.isStaff && (
                        <span className="px-2 py-0.5 bg-blue-600/20 text-blue-400 text-xs rounded">
                          Admin
                        </span>
                      )}
                    </div>
                    {msg.email && (
                      <p className="text-gray-400 text-xs mb-2">{msg.email}</p>
                    )}
                    <p className="text-gray-400 text-xs mb-3">{msg.date}</p>
                    <div className="text-gray-200 text-sm whitespace-pre-line">
                      {msg.message}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Reply Form */}
            <div className="bg-[#1a1a1a] border border-gray-600 rounded-lg p-4">
              <div className="mb-4">
                <label className="block text-white font-medium mb-2 text-sm">Yanıtınız</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mesajınızı yazın..."
                  rows={6}
                  className="w-full bg-[#232323] border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:border-[#678FFF] focus:outline-none resize-none text-sm"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    Dosya Ekle
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    disabled={!message.trim()}
                    className="bg-[#678FFF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4A55A2] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Gönder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}