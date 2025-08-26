export const bots = [
  {
    id: 1,
    name: "Kayıt Botu",
    description: "Discord'a gelen üyelerinizi kayıt etmenizi sağlar!",
    price: "₺149.99",
    image: "/bots/bot.png",
    images: [
      "/bots/bot.png",
      "/bots/bot.png",
      "/bots/bot.png"
    ],
    features: [
      "Kullanıcı kayıt işlemlerini otomatikleştirir.",
      "Kullanıcı rollerini otomatik olarak atar.",
      "Kayıt sırasında kullanıcı bilgilerini toplar."
    ]
  },
  {
    id: 2,
    name: "Moderasyon Botu",
    description: "Sunucunuzu güvenle yönetmenizi sağlayan gelişmiş moderasyon botu!",
    price: "₺199.99",
    image: "/bots/bot.png",
    images: [
      "/bots/bot.png",
      "/bots/bot.png",
      "/bots/bot.png"
    ],
    features: [
      "Otomatik spam koruması",
      "Küfür ve hakaret filtreleme",
      "Toplu mesaj silme"
    ]
  },
  {
    id: 3,
    name: "Eğlence Botu",
    description: "Sunucunuza eğlence katacak birbirinden farklı komutlar!",
    price: "₺99.99",
    image: "/bots/bot.png",
    images: [
      "/bots/bot.png",
      "/bot.png",
      "/bots/bot.png"
    ],
    features: [
      "Müzik çalma özelliği",
      "Mini oyunlar",
      "Meme komutları"
    ]
  }
]

export function getBotById(id) {
  return bots.find(bot => bot.id === Number(id))
}
