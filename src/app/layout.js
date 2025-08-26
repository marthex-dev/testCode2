import './globals.css'
import { Quicksand } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const quicksand = Quicksand({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-quicksand',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'WhizeCode - Discord Bot Yönetim Platformu | Bot Oluşturma ve Yönetimi',
  description: 'WhizeCode ile Discord botlarınızı kolayca oluşturun, yönetin ve geliştirin. Özelleştirilebilir bot şablonları, 7/24 destek ve güvenli altyapı ile Discord sunucunuzu güçlendirin.',
  keywords: [
    'Discord bot',
    'bot marketplace',
    'Discord automation',
    'WhizeCode',
    'bot dashboard',
    'Discord bot yönetimi',
    'özel Discord bot',
    'bot oluşturma',
    'Discord sunucu yönetimi',
    'bot hosting',
    'Discord entegrasyon',
    'bot geliştirme',
    'Discord otomasyon',
    'Türkçe Discord bot',
    'güvenli bot hizmeti'
  ],
  authors: [{ name: 'WhizeCode Team' }],
  creator: 'WhizeCode',
  publisher: 'WhizeCode',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://whizecode.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'WhizeCode - Modern Discord Bot Yönetim Platformu',
    description: 'Discord botlarınızı WhizeCode ile yönetin. Güçlü, kullanıcı dostu platformumuzla botlarınızı oluşturun, yönetin ve otomatikleştirin.',
    url: 'https://whizecode.com',
    siteName: 'WhizeCode',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WhizeCode Discord Bot Platform',
      }
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhizeCode - Modern Discord Bot Yönetim Platformu',
    description: 'Discord botlarınızı WhizeCode ile yönetin ve geliştirin',
    images: ['/twitter-image.png'],
    creator: '@whizecode',
    site: '@whizecode',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`dark ${quicksand.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${quicksand.className} bg-discord-bg text-discord-text-primary min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
