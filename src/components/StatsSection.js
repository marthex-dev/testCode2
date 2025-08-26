'use client'

export default function StatsSection() {
  const stats = [
    {
      number: '10K+',
      label: 'Aktif Bot',
      description: 'WhizeCode üzerinde çalışan botlar'
    },
    {
      number: '500+',
      label: 'Sunucu',
      description: 'Botlarımızı kullanan Discord sunucuları'
    },
    {
      number: '99.9%',
      label: 'Uptime',
      description: 'Kesintisiz hizmet süresi'
    },
    {
      number: '24/7',
      label: 'Destek',
      description: 'Canlı teknik destek'
    }
  ]

  return (
    <section className="bg-[#1C1C1C] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          Rakamlarla WhizeCode
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discord bot yönetiminde Türkiye'nin en büyük platformu. Güvenilir, hızlı ve kesintisiz hizmet.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-[#2B2B2B] p-6 rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold text-[#678FFF] mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 