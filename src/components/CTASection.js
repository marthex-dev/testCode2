import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-[#1C1C1C] py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="bg-gradient-to-r from-[#4A55A2] to-[#678FFF] rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Discord Sunucunuzu Bugün Güçlendirin
            </h2>
            <p className="text-gray-100 mb-8 text-lg">
              Hemen ücretsiz hesap oluşturun ve WhizeCode'un sunduğu güçlü bot yönetim araçlarını keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="bg-white text-[#4A55A2] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Ücretsiz Başla
              </Link>
              <Link 
                href="/demo" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Demo İncele
              </Link>
            </div>
            <p className="text-sm text-gray-200 mt-6">
              Kredi kartı gerekmez • Anında kurulum • 7/24 destek
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 