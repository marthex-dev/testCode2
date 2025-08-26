'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

export default function NewTicketPage() {
  const [formData, setFormData] = useState({
    name: 'Mehmet Güzel',
    email: 'mehmetg051@gmail.com',
    subject: '',
    department: 'Genel Destek',
    relatedService: 'Yok',
    priority: 'Orta',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Burada API'ye POST at (fetch/axios)
    console.log('Form submitted:', formData)
  }

  // Mesaj sayaçları
  const { lines, words, chars } = useMemo(() => {
    const text = formData.message || ''
    const l = text ? text.split(/\r\n|\r|\n/).length : 0
    const w = text.trim() ? text.trim().split(/\s+/).length : 0
    const c = text.length
    return { lines: l, words: w, chars: c }
  }, [formData.message])

  return (
    <main className="bg-[#1a1a1a] min-h-screen pt-15">
      {/* Header */}
      <div className="bg-[#232323] border-b border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
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
              <h1 className="text-2xl font-bold text-white">Yeni Destek Talebi</h1>
              <p className="text-gray-400 text-sm mt-1">Destek ekibimizle iletişime geçin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="bg-[#232323] border border-gray-700 rounded-xl">
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2 text-sm">İsim</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-200 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 text-sm"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2 text-sm">E-posta Adresi</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-200 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 text-sm"
                    readOnly
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white font-medium mb-2 text-sm">Başlık</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Sorun başlığını yazın..."
                  className="w-full bg-[#1a1a1a] border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-[#678FFF] focus:outline-none text-sm"
                  required
                />
              </div>

              {/* Department, Service, Priority */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2 text-sm">Departman</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full bg-[#1a1a1a] border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-[#678FFF] focus:outline-none text-sm"
                  >
                    <option value="Genel Destek">Genel Destek</option>
                    <option value="Teknik Destek">Teknik Destek</option>
                    <option value="Fatura Destek">Fatura Destek</option>
                    <option value="Satış Destek">Satış Destek</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2 text-sm">İlişkili Hizmet</label>
                  <select
                    name="relatedService"
                    value={formData.relatedService}
                    onChange={handleInputChange}
                    className="w-full bg-[#1a1a1a] border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-[#678FFF] focus:outline-none text-sm"
                  >
                    <option value="Yok">Yok</option>
                    <option value="VDS - TR - VDS L-TR 7GB">VDS - TR - VDS L-TR 7GB</option>
                    <option value="Discord Moderation Bot">Discord Moderation Bot</option>
                    <option value="example.com">example.com</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2 text-sm">Öncelik</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full bg-[#1a1a1a] border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-[#678FFF] focus:outline-none text-sm"
                  >
                    <option value="Düşük">Düşük</option>
                    <option value="Orta">Orta</option>
                    <option value="Yüksek">Yüksek</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-medium mb-2 text-sm">Mesaj</label>
                <div className="bg-[#1a1a1a] border border-gray-600 rounded-lg overflow-hidden">
                  {/* Toolbar (placeholder) */}
                  <div className="flex items-center gap-1 p-2 border-b border-gray-600 bg-[#232323]">
                    <button type="button" className="px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded text-sm font-bold">B</button>
                    <button type="button" className="px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded text-sm italic">I</button>
                    <button type="button" className="px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded text-sm underline">U</button>
                    <button type="button" className="px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded" aria-label="link">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </button>
                    <button type="button" className="px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded" aria-label="list">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </button>
                    <button type="button" className="px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded" aria-label="list-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                    </button>
                    <button type="button" className="px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded" aria-label="emoji">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                    <button type="button" className="px-2 py-1 bg-blue-600 text-white hover:bg-blue-700 rounded text-xs font-medium">
                      Önizleme
                    </button>
                    <button type="button" className="px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded" aria-label="share">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                    <div className="ml-auto">
                      <button type="button" className="px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded" aria-label="fullscreen">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Text Area */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Sorunuzun detaylarını yazın..."
                    rows={12}
                    className="w-full bg-transparent p-4 text-white placeholder-gray-400 focus:outline-none resize-none text-sm leading-relaxed"
                    required
                  />

                  {/* Footer */}
                  <div className="p-2 border-t border-gray-600 bg-[#232323]">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-400">
                        lines: {lines} &nbsp; words: {words} &nbsp; characters: {chars}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Gönder
                </button>
                <button
                  type="button"
                  className="bg-gray-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                  onClick={() => window.history.back()}
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
