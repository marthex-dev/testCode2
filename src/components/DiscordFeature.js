import Image from 'next/image'
import Link from 'next/link'

export default function DiscordFeature() {
  const features = [
    {
      title: "Takip edilmeden arama yapın.",
      description: "Diğer arama motorları, nereye gittiğinizden ne satın aldığınıza kadar her aramanızı takip eder. Arama geçmişini takip etmiyoruz.",
      image: "/feature-images/search-privacy.png",
      link: "/ozellikler/gizlilik"
    },
    {
      title: "Facebook ve Google tarafından izlenme korkusundan kurtulun.",
      description: "WhizeCode'un tarayıcınızdaki ve uzantımızdaki güçlü izleyici engelleme özelliği, gizliliğe müdahale eden şirketlerin kişisel bilgilerinizi toplamasını önlemeye yardımcı olur.",
      image: "/feature-images/tracking-protection.png",
      link: "/ozellikler/koruma"
    },
    {
      title: "E-posta izleyicilerini durdurun ve kaldırın.",
      description: "Duck Address'ler aracılığıyla gönderilen e-postaların %85'i, biz onları ayıklamadan önce gizli e-posta izleyicileri içeriyordu. Email Protection çoğu izleyiciyi etkisiz hâle getirir ve e-postaları normal gelen kutunuza iletir, böylece huzur içinde okuyabilirsiniz.",
      image: "/feature-images/email-protection.png",
      link: "/ozellikler/email-koruma"
    },
    {
      title: "Botlarınızı güvenle yönetin.",
      description: "WhizeCode'un gelişmiş güvenlik özellikleri sayesinde Discord botlarınızı güvenle yönetebilirsiniz. Tüm verileriniz şifrelenir ve sadece sizin erişiminize açık tutulur.",
      image: "/feature-images/bot-security.png",
      link: "/ozellikler/bot-guvenligi"
    }
  ]

  return (
    <section className="bg-[#1C1C1C] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Image Container */}
              <div className={`relative h-[300px] rounded-lg overflow-hidden ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Text Content */}
              <div className={`space-y-4 ${
                index % 2 === 1 ? 'md:order-1' : ''
              }`}>
                <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                  {index === 2 ? 'E-POSTA KORUMASI' : index === 3 ? 'BOT GÜVENLİĞİ' : 'WEB İZLEME KORUMASI'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {feature.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                <Link 
                  href={feature.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Daha fazla bilgi</span>
                  <svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 