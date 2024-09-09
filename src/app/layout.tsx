import type { Metadata } from 'next'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import './globals.css'

export const metadata: Metadata = {
  icons: [
    { rel: 'icon', type: 'image/x-icon', sizes: 'any', url: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/favicon/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/favicon/android-chrome-512x512.png' },
  ],
  manifest: '/favicon/site.webmanifest',
  keywords: [
    'Visita', 'cartão', 'de Visita', 'cartão de visita', 'de Cartão', 'Gerador de Cartão', 'de visita em',
    'Gerador', 'de Cartão de Visita',  'Gerador de Cartão de Visita',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
