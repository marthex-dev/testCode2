import Image from 'next/image'

export default function TrustedBy() {
  const partners = [
    {
      name: "Gaming Türkiye",
      logo: "/partners/gaming-turkiye.png",
      members: "50K+"
    },
    {
      name: "Teknoloji Topluluğu",
      logo: "/partners/tech-community.png",
      members: "35K+"
    },
    {
      name: "Espor Arena",
      logo: "/partners/esports-arena.png",
      members: "25K+"
    },
    {
      name: "Yazılımcı Gelişim",
      logo: "/partners/dev-growth.png",
      members: "20K+"
    },
    {
      name: "Oyun Dünyası",
      logo: "/partners/gaming-world.png",
      members: "45K+"
    }
  ]

  return (
    <section className="bg-[#1C1C1C] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4">
          Güvenilir Topluluklar Tarafından Tercih Ediliyor
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Türkiye'nin önde gelen Discord toplulukları WhizeCode'u tercih ediyor
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-gray-400 text-sm text-center group-hover:text-white transition-colors duration-300">
                {partner.name}
              </p>
              <p className="text-[#678FFF] text-sm">
                {partner.members} üye
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 