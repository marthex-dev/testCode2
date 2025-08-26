'use client'

import Image from 'next/image'
import Link from 'next/link'
import { getBotById } from '@/features/bots/data'
import { useState } from 'react'
import { useParams } from 'next/navigation'

export default function BotDetailPage() {
  const params = useParams()
  const id = Array.isArray(params.id) ? params.id[0] : params.id
  const [selectedImage, setSelectedImage] = useState(0)

  const bot = getBotById(Number(id))

  if (!bot) {
    return (
      <main className="bg-[#1a1a1a] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <div className="text-white text-2xl font-bold mb-2">Bot bulunamadı</div>
          <p className="text-gray-400 mb-6">Aradığınız bot mevcut değil veya kaldırılmış olabilir.</p>
          <Link 
            href="/bots"
            className="bg-[#678FFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4A55A2] transition-colors duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Botlara Dön
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#1a1a1a] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#232323] border-b border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</Link>
            <span className="text-gray-600">/</span>
            <Link href="/bots" className="text-gray-400 hover:text-white transition-colors">Discord Botları</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">{bot.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sol – Görseller */}
          <div className="space-y-6">
            <div className="relative w-full h-96 bg-gradient-to-br from-[#232323] to-[#1a1a1a] rounded-xl overflow-hidden border border-gray-700 shadow-2xl group">
              <Image 
                src={bot.images[selectedImage]} 
                alt={`${bot.name} ${selectedImage + 1}`} 
                fill 
                className="object-cover transition-all duration-500 group-hover:scale-105" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute top-4 right-4 bg-black/50 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                {selectedImage + 1} / {bot.images.length}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {bot.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-full h-28 bg-[#232323] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === idx ? 'border-[#678FFF] shadow-lg shadow-[#678FFF]/20 scale-105' : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <Image src={img} alt={`${bot.name} ${idx + 1}`} fill className="object-cover" />
                  {selectedImage === idx && (
                    <div className="absolute inset-0 bg-[#678FFF]/20 flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#678FFF] rounded-full" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Bot Bilgileri */}
            <div className="bg-gradient-to-r from-[#232323] to-[#2a2a2a] border border-gray-700 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-[#678FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                Teknik Detaylar
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-[#1a1a1a] rounded-lg border border-gray-600">
                  <div className="text-[#678FFF] font-semibold">Platform</div>
                  <div className="text-gray-300 text-sm">Discord Bot</div>
                </div>
                <div className="text-center p-3 bg-[#1a1a1a] rounded-lg border border-gray-600">
                  <div className="text-[#678FFF] font-semibold">Kategori</div>
                  <div className="text-gray-300 text-sm">Moderasyon</div>
                </div>
                <div className="text-center p-3 bg-[#1a1a1a] rounded-lg border border-gray-600">
                  <div className="text-[#678FFF] font-semibold">Kurulum</div>
                  <div className="text-gray-300 text-sm">Otomatik</div>
                </div>
                <div className="text-center p-3 bg-[#1a1a1a] rounded-lg border border-gray-600">
                  <div className="text-[#678FFF] font-semibold">Destek</div>
                  <div className="text-gray-300 text-sm">7/24</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ – İçerik */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#678FFF] to-[#4A55A2] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{bot.name}</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">(4.9)</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">{bot.description}</p>
            </div>

            <div className="bg-gradient-to-r from-[#232323] to-[#2a2a2a] border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-400 text-sm">Fiyat</span>
                  <div className="text-4xl font-bold text-[#678FFF]">{bot.price}</div>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 text-sm">Tek Seferlik Ödeme</span>
                  <div className="text-green-400 text-sm font-medium">✓ Ömür Boyu Kullanım</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-[#678FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                Bot Özellikleri
              </h3>
              <div className="space-y-3">
                {bot.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3 bg-[#232323] border border-gray-700 rounded-lg hover:border-[#678FFF]/30 transition-colors duration-300"
                  >
                    <div className="w-6 h-6 bg-[#678FFF]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#678FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#232323] border border-gray-700 rounded-lg p-4 text-center">
                <svg className="w-6 h-6 text-[#678FFF] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                <div className="text-xl font-bold text-white">1.2K+</div>
                <div className="text-gray-400 text-sm">Aktif Kullanıcı</div>
              </div>
              <div className="bg-[#232323] border border-gray-700 rounded-lg p-4 text-center">
                <svg className="w-6 h-6 text-green-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="text-xl font-bold text-white">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="bg-[#232323] border border-gray-700 rounded-lg p-4 text-center">
                <svg className="w-6 h-6 text-yellow-400 mx-auto mb-2 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="text-xl font-bold text-white">4.9/5</div>
                <div className="text-gray-400 text-sm">Değerlendirme</div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                href={`/bots/${bot.id}/order`}
                className="flex-1 bg-gradient-to-r from-[#678FFF] to-[#4A55A2] text-white px-8 py-4 rounded-xl font-bold text-center hover:shadow-lg hover:shadow-[#678FFF]/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Şimdi Satın Al
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/bots"
                className="bg-transparent border-2 border-[#678FFF] text-[#678FFF] px-8 py-4 rounded-xl font-bold hover:bg-[#678FFF] hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Geri Dön
              </Link>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <div className="text-green-400 font-semibold">Güvenli Ödeme</div>
                <div className="text-gray-400 text-sm">256-bit SSL şifreleme ile korunmaktadır.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
