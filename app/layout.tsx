import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Justin Wang - Software Engineer',
  description: 'Software Engineer passionate about automation, data analysis, and cloud technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-cover bg-center bg-fixed bg-no-repeat`} style={{ backgroundImage: 'url(/background.jpeg)' }}>
        <div className="min-h-screen bg-black/40 backdrop-blur-sm">
          <nav className="bg-black/30 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Link href="/" className="text-xl font-bold text-white hover:text-blue-300 transition-colors duration-300">
                  Justin Wang
                </Link>
                <div className="hidden md:flex space-x-8">
                  <Link href="/about" className="text-gray-200 hover:text-white transition-colors duration-300 font-medium">
                    About
                  </Link>
                  <Link href="/experience" className="text-gray-200 hover:text-white transition-colors duration-300 font-medium">
                    Experience
                  </Link>
                  <Link href="/projects" className="text-gray-200 hover:text-white transition-colors duration-300 font-medium">
                    Projects
                  </Link>
                  <Link href="/contact" className="text-gray-200 hover:text-white transition-colors duration-300 font-medium">
                    Contact
                  </Link>
                </div>
                <div className="md:hidden">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    Menu
                  </Button>
                </div>
              </div>
            </div>
          </nav>
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-black/30 backdrop-blur-md border-t border-white/20 py-8 mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-gray-300 font-medium">
                © 2024 Justin Wang. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

