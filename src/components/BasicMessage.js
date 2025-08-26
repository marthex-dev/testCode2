import Link from 'next/link'

export default function BasicMessage() {
  return (
    <section className="bg-[#1C1C1C] py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Şirketlerin para kazanmak için sizi takip etmesi gerektiği bir efsanedir.
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            DuckDuckGo tarayıcı ve arama motoru ilk günden beri ücretsizdir. Verilerinizi kullanarak değil, gizliliğe saygılı arama reklamlarından para kazanıyoruz. "Araba" kelimesini aradığınızda size araba reklamı gösteriyoruz. Bu kadar basit.
          </p>

          <Link 
            href="/nasil-para-kazaniyoruz"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Nasıl para kazandığımızı öğrenin</span>
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
    </section>
  )
} 