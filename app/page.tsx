'use client'

import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { PhotoGallery } from '@/components/photo-gallery'
import { ImageModal } from '@/components/image-modal'
import { useState } from 'react'

export default function Home() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="text-center mb-8">
          {/* Profile Photo */}
          <div className="mb-6 flex justify-center">
            <div 
              className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl hover-lift cursor-pointer group"
              onClick={() => setIsProfileModalOpen(true)}
            >
              <Image
                src="/thumbnails/profile-photo.jpeg"
                alt="Justin Wang"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                priority
              />
              {/* Overlay hint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                  Click to view full size
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-4 text-white">
            Justin Wang
          </h1>
          <h2 className="text-3xl text-gray-300 h-[60px] mb-4">
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Cloud Engineering Intern',
                2000,
                'Data Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
        </div>
        
        <p className="text-xl mb-8 text-center max-w-2xl text-gray-300 leading-relaxed">
          Passionate about automation, data analysis, and cloud technologies. 
          Always eager to tackle complex problems and create innovative solutions.
        </p>
        
        <div className="flex space-x-4 mb-8">
          <Button asChild variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg hover-lift">
            <Link href="/about">About Me</Link>
          </Button>
          <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg hover-lift">
            <Link href="/projects">My Projects</Link>
          </Button>
        </div>
        
        <div className="flex space-x-6 mb-12">
          <a href="https://github.com/yimango" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/yi-wang9/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href="mailto:yi.wang2@uwaterloo.ca" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110">
            <Mail size={28} />
          </a>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-4">
        <PhotoGallery />
      </section>

      {/* Profile Photo Modal */}
      <ImageModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        imageSrc="/profile-photo.jpeg"
        imageAlt="Justin Wang - Full Resolution"
      />
    </div>
  )
}

