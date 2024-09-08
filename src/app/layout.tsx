import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import './globals.css'

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
