import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Minehosting',
  description: 'Intel ve Ryzen işlemcili sunucularımızla güvenilir hosting hizmetleri. Türkiye lokasyonunda yüksek performanslı VDS paketleri.',
  keywords: 'domain, vds, intel, ryzen, türkiye, sunucu',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <script src="/security.js" defer></script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
