'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = parseInt(value.replace(/[^0-9]/g, ''))
    const incrementTime = (duration * 1000) / end
    
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [value, duration])

  return (
    <div className="text-3xl font-bold bg-gradient-to-r from-[#678FFF] to-[#4A55A2] bg-clip-text text-transparent">
      {count}{value.includes('+') ? '+' : value.includes('%') ? '%' : ''}
    </div>
  )
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])



  const teamMembers = [
    {
      name: 'Mehmet Yılmaz',
      role: 'Kurucu & CEO',
      image: '/team/founder.jpg',
      expertise: ['Backend Geliştirme', 'Sistem Mimarisi'],
    },
    {
      name: 'Ayşe Demir',
      role: 'Lead Developer',
      image: '/team/lead-dev.jpg',
      expertise: ['React', 'Node.js'],
    },
    {
      name: 'Can Öztürk',
      role: 'DevOps Engineer',
      image: '/team/devops.jpg',
      expertise: ['Docker', 'AWS'],
    }
  ]

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Güvenilirlik',
      description: 'Her zaman yanınızda, kesintisiz hizmet'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performans',
      description: 'Yüksek performans ve hızlı çözümler'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: 'Topluluk',
      description: 'Güçlü bir geliştirici topluluğu'
    }
  ]

  return (
    <main className="bg-[#1a1a1a] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#232323] border-b border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">Hakkımızda</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#678FFF]/10 to-[#4A55A2]/5" />
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#678FFF]/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4A55A2]/5 rounded-full filter blur-3xl" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
         

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discord Bot Dünyasının
            <span className="block bg-gradient-to-r from-[#678FFF] to-[#4A55A2] bg-clip-text text-transparent">
              Öncü Platformu
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Modern Discord botları geliştirme ve barındırma konusunda Türkiye'nin 
            lider platformu olarak, toplulukları güçlendiriyoruz.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#678FFF] to-[#4A55A2] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                Misyonumuz
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Discord topluluklarını güçlendirmek ve bot geliştiricilerine modern, 
                güvenilir ve ölçeklenebilir bir platform sunmak için buradayız.
              </p>
              <div className="space-y-3">
                {[
                  'En son teknolojilerle güçlendirilmiş altyapı',
                  'Kullanıcı dostu arayüz ve kolay yönetim',
                  'Profesyonel destek ve sürekli geliştirme'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#678FFF]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#678FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-80 bg-gradient-to-br from-[#232323] to-[#1a1a1a] rounded-xl overflow-hidden border border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-[#678FFF]/10 to-[#4A55A2]/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#678FFF] to-[#4A55A2] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">İnovasyon</h3>
                    <p className="text-gray-400">Sürekli gelişim ve yenilik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-2xl font-bold text-white text-center mb-8">Değerlerimiz</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-[#232323] border border-gray-700 rounded-xl p-6 text-center hover:border-[#678FFF]/30 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-[#678FFF]/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-[#678FFF]">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#232323]/30">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ekibimiz</h2>
            <p className="text-gray-300">Deneyimli ve tutkulu ekibimizle hizmetinizdeyiz</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-[#232323] border border-gray-700 rounded-xl overflow-hidden hover:border-[#678FFF]/30 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#678FFF]/20 to-[#4A55A2]/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#678FFF] to-[#4A55A2] rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#678FFF] text-sm mb-3">{member.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs rounded-full bg-[#678FFF]/10 text-[#678FFF] border border-[#678FFF]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-[#232323] to-[#2a2a2a] border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Bizimle Çalışmaya Hazır mısınız?</h2>
            <p className="text-gray-300 mb-6">
              Discord botlarınız için profesyonel çözümler sunuyoruz. 
              Hemen başlayın ve farkı yaşayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bots"
                className="bg-gradient-to-r from-[#678FFF] to-[#4A55A2] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#678FFF]/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Botları Keşfet
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-[#678FFF] text-[#678FFF] px-8 py-3 rounded-lg font-semibold hover:bg-[#678FFF] hover:text-white transition-all duration-300"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}