import Image from 'next/image'
import Link from 'next/link'

export default function BotCard({ bot }) {
  return (
    <div className="bg-[#1C1C1C] rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Bot Image */}
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src={bot.image}
            alt={bot.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Bot Info */}
        <div className="p-6 md:p-8 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {bot.name}
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            {bot.description}
          </p>

          {/* Features List */}
          <div className="flex-grow">
            <h3 className="text-white font-semibold mb-4">Özellikler</h3>
            <ul className="grid grid-cols-1 gap-3">
              {bot.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <svg 
                    className="w-5 h-5 text-[#678FFF] mt-1 mr-3 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              href={`/bots/${bot.id}/order`}
              className="bg-[#678FFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4A55A2] transition-colors duration-300 text-center"
            >
              Sipariş Ver
            </Link>
            <Link 
              href={`/bots/${bot.id}`}
              className="bg-transparent border-2 border-[#678FFF] text-[#678FFF] px-8 py-3 rounded-lg font-semibold hover:bg-[#678FFF] hover:text-white transition-colors duration-300 text-center"
            >
              İncele
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 