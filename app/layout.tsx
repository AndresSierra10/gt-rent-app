import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import Favicon from './gt-rent.ico';
import Contact from './components/contact-float-button'
import localFont from 'next/font/local'

const myFont = localFont({
  src: [
    {
      path: '../public/fonts/monument-extended-v3/PPMonumentExtended-Light-BF645465a264007.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'GT Rent',
  description: 'Gt rent project',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Contact />
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
