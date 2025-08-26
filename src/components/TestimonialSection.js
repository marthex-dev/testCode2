'use client'

import Image from 'next/image'

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Sunucu Yöneticisi",
      image: "/testimonials/user1.png",
      quote: "WhizeCode sayesinde sunucumuz çok daha aktif ve yönetimi kolay. Özelleştirilebilir botlar gerçekten harika!",
      server: "Gaming Türkiye"
    },
    {
      name: "Ayşe Kaya",
      role: "Topluluk Yöneticisi",
      image: "/testimonials/user2.png",
      quote: "7/24 destek ekibi ve kullanıcı dostu arayüz ile bot yönetimi artık çok daha kolay. Kesinlikle tavsiye ediyorum.",
      server: "Teknoloji Topluluğu"
    },
    {
      name: "Mehmet Demir",
      role: "E-Spor Takım Kaptanı",
      image: "/testimonials/user3.png",
      quote: "Turnuva organizasyonlarımızda WhizeCode botları vazgeçilmezimiz oldu. Özellikle moderasyon özellikleri muhteşem.",
      server: "Espor Arena"
    }
  ]

  return (
    <section className="bg-[#1C1C1C] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          Kullanıcılarımız Ne Diyor?
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Binlerce Discord sunucusu WhizeCode'u tercih ediyor. İşte bazı kullanıcılarımızın deneyimleri.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#2B2B2B] p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-[#678FFF] text-sm">{testimonial.server}</p>
                </div>
              </div>
              <blockquote className="text-gray-300 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 