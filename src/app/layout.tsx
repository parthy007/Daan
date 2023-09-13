import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const roboto = Roboto({ 
  weight: ['300','500','700'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Daan',
  description: 'This is the Daan NGO website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthProvider>
          <ThemeProvider>
            <div className="container">
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
