import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Justin Wang - Personal Website',
  description: 'Software Engineer and Cloud Engineering Intern',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-gray-800/80 border-b border-gray-700 sticky top-0 z-10">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
              <Link href="/" className="text-xl font-bold text-gray-100">Justin Wang</Link>
              <ul className="flex space-x-6">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/experience" className="text-gray-300 hover:text-white transition-colors">Experience</Link></li>
                <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="bg-gray-800/80 text-white py-6">
            <div className="container mx-auto px-6 text-center">
              <p>© {new Date().getFullYear()} Justin Wang. All rights reserved.</p>
              <div className="mt-2">
                <a href="https://github.com/yimango" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">GitHub</a>
                <a href="https://www.linkedin.com/in/yi-wang9/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

