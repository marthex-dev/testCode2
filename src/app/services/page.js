'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import DiscordPromotion from '@/components/DiscordPromotion'

export default function ServiceDetailPage() {
  const [showPass, setShowPass] = useState(false)
  const [copiedKey, setCopiedKey] = useState(null)
  const params = useParams()
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id

  // Mock veri listesi
  const services = [
    {
      id: 1,
      name: 'Kayıt Botu',
      os: 'http://localhost:3000/services',
      username: 'marthex',
      password: 'lcQ-_Gi6z0AsVdgU',
      status: 'active', // active | stopped | error
    },
  ]

  // URL'deki id'ye göre servis bul (yoksa ilkini kullan)
  const service = services.find(s => Number(s.id) === Number(id)) ?? services[0]

  if (!service) {
    return (
      <main className="bg-[#1a1a1a] min-h-[calc(100vh-96px)] flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-6xl mb-4">🖥️</div>
          <div className="text-white text-2xl font-bold mb-2">Sunucu bulunamadı</div>
          <p className="text-gray-400 mb-6">Kayıt silinmiş veya taşınmış olabilir.</p>
          <Link
            href="/services"
            className="bg-[#678FFF] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#4A55A2] transition-colors inline-flex items-center gap-2"
          >
            Geri Dön
          </Link>
        </div>
      </main>
    )
  }

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(null), 1200)
    } catch (e) {
      console.warn('Kopyalama başarısız:', e)
    }
  }

  const statusPill =
    {
      active: { label: 'Aktif', class: 'bg-green-600' },
      stopped: { label: 'Durduruldu', class: 'bg-gray-600' },
      error: { label: 'Hata', class: 'bg-red-600' },
    }[service.status || 'active']

  return (
    // min-h-screen KALDIRILDI; header yüksekliği ~96px varsayımıyla min-h ayarlandı
    <main className="bg-[#1a1a1a] min-h-[calc(100vh-96px)] pt-15 sm:pt-15">
      {/* Header / Breadcrumb */}
      <div className="bg-[#232323] border-b border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 py-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <div className="text-white font-semibold text-sm sm:text-base">
                {service.name} - Hizmet Bilgileri
              </div>
            </div>
            <span className={`${statusPill.class} text-white text-xs sm:text-sm px-2.5 py-1 rounded-md font-semibold w-max`}>
              {statusPill.label}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-3 sm:py-5">
        <div className="bg-[#232323] border border-gray-700 rounded-xl overflow-hidden">
          {/* Card header row */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#1f1f1f] border-b border-gray-700">
            <div className="text-white font-semibold text-sm sm:text-base">Panel Bilgileri</div>
          </div>

          {/* Info rows */}
          <div className="divide-y divide-gray-700">
            <Row
              label="Panel Giriş"
              value={
                <a
                  href={service.os}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#9ab3ff] break-words"
                >
                  {service.os}
                </a>
              }
              onCopy={() => copy(service.os, 'os')}
              copied={copiedKey === 'os'}
            />
            <Row
              label="Hizmet Adı"
              value={service.name}
              onCopy={() => copy(service.name, 'name')}
              copied={copiedKey === 'name'}
            />
            <Row
              label="Kullanıcı Adı"
              value={service.username}
              onCopy={() => copy(service.username, 'user')}
              copied={copiedKey === 'user'}
            />
            <Row
              label="Şifre"
              value={showPass ? service.password : '•'.repeat(12)}
              onCopy={() => copy(service.password, 'pass')}
              copied={copiedKey === 'pass'}
              extra={
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className="text-xs px-2 py-1 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-700/60"
                >
                  {showPass ? 'Gizle' : 'Göster'}
                </button>
              }
            />
            <Row
              label="Sunucu Durumu"
              value={
                <span className={`${statusPill.class} text-white text-[11px] sm:text-xs px-2 py-0.5 rounded-md`}>
                  {statusPill.label}
                </span>
              }
              disableCopy
            />
          </div>

          {/* Actions */}
          <div className="px-4 sm:px-6 py-4 bg-[#1f1f1f] border-t border-gray-700 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/tickets/new"
              className="bg-[#678FFF] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#4A55A2] transition-colors inline-block text-center"
            >
              + Yeni Destek Talep
            </Link>
            <div className="sm:ml-auto text-gray-400 text-sm text-center sm:text-right">
              Belki daha sonra.
            </div>
          </div>

          
            <DiscordPromotion />
        </div>
      </div>
    </main>

  )
}

/* ----------------- küçük yardımcı bileşenler ----------------- */

function Row({ label, value, onCopy, copied, extra, disableCopy }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3">
      <div className="text-gray-300 text-sm sm:text-base sm:w-56">{label}</div>
      <div className="flex-1 text-white text-sm sm:text-base break-words overflow-hidden">
        {typeof value === 'string' ? (
          <span className="select-text break-words">{value}</span>
        ) : (
          value
        )}
      </div>
      <div className="flex items-center gap-2 sm:justify-end">
        {extra}
        {!disableCopy && (
          <button
            type="button"
            onClick={onCopy}
            className="text-xs px-2 py-1 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-700/60"
          >
            {copied ? 'Kopyalandı' : 'Kopyala'}
          </button>
        )}
      </div>
    </div>
  )
}
