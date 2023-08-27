import { Providers } from '../../providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Esteban Montecinos | Frontend Developer',
  description: 'Protafolio de Esteban Montecinos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className='dark'>
      <body className={`${inter.className} bg-black text-white`}>
      <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
