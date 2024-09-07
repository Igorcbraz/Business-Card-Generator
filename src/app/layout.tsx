import type { Metadata } from 'next'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './globals.css'

export const metadata: Metadata = {
  title: 'Gerador de Cartão de Visita',
  description: 'Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais.',
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
