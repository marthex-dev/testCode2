import Image from 'next/image'
import Link from 'next/link'

export default function DiscordPromotion() {
  const platforms = [
    {
      name: 'Moderasyon',
      icon: '/bot-icons/moderation.png',
      type: 'bot'
    },
    {
      name: 'Müzik',
      icon: '/bot-icons/music.png',
      type: 'bot'
    },
    {
      name: 'Ekonomi',
      icon: '/bot-icons/economy.png',
      type: 'bot'
    },
    {
      name: 'Eğlence',
      icon: '/bot-icons/fun.png',
      type: 'bot'
    }
  ]

  const features = [
    {
      name: 'Özel',
      icon: '/feature-icons/custom.png',
      type: 'feature'
    },
    {
      name: '7/24 Aktif',
      icon: '/feature-icons/uptime.png',
      type: 'feature'
    },
    {
      name: 'Hızlı',
      icon: '/feature-icons/fast.png',
      type: 'feature'
    },
    {
      name: 'Güvenli',
      icon: '/feature-icons/secure.png',
      type: 'feature'
    }
  ]

  return (
    <section className="bg-[#1C1C1C] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">
          Bugün Discord botlarımızı deneyin!
        </h2>

        <div className="bg-[#2B2B2B] rounded-2xl p-6 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bot Types */}
            <div>
              <h3 className="text-lg font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                BOT ÇEŞİTLERİ
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {platforms.map((platform) => (
                  <Link 
                    href={`/bots/${platform.name.toLowerCase()}`}
                    key={platform.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-black/20 transition-colors"
                  >
                    <div className="w-14 h-14 relative">
                      <Image
                        src={platform.icon}
                        alt={platform.name}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">
                      {platform.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                ÖZELLİKLER
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {features.map((feature) => (
                  <div 
                    key={feature.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg"
                  >
                    <div className="w-14 h-14 relative">
                      <Image
                        src={feature.icon}
                        alt={feature.name}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 