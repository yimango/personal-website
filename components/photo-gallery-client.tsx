'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ImageModal } from './image-modal'

interface Photo {
  thumbnail: string
  full: string
  alt: string
}

interface PhotoGalleryClientProps {
  photos: Photo[]
}

export function PhotoGalleryClient({ photos }: PhotoGalleryClientProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isUserScrolling, setIsUserScrolling] = useState(false)
  const [loadedFullImages, setLoadedFullImages] = useState<Set<string>>(new Set())

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (isPaused || isUserScrolling) return
      
      // Increment scroll position for infinite effect
      scrollContainer.scrollLeft += 1
      
      // When we reach the end, seamlessly reset to the beginning
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
        scrollContainer.scrollLeft = 0
      }
    }

    const interval = setInterval(scroll, 50) // Adjust speed here

    return () => clearInterval(interval)
  }, [isPaused, isUserScrolling])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const handleScroll = () => {
    setIsUserScrolling(true)
    setIsPaused(true)
    
    // Resume autoscroll after 3 seconds of no interaction
    setTimeout(() => {
      setIsUserScrolling(false)
      setIsPaused(false)
    }, 3000)
  }

  const handleImageClick = async (photo: Photo) => {
    // Preload the full resolution image if not already loaded
    if (!loadedFullImages.has(photo.full)) {
      const img = new window.Image()
      img.src = photo.full
      await new Promise((resolve) => {
        img.onload = resolve
      })
      setLoadedFullImages(prev => new Set(prev).add(photo.full))
    }
    
    setSelectedImage({ src: photo.full, alt: photo.alt })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  // Create infinite loop by duplicating photos multiple times
  const infinitePhotos = [...photos, ...photos, ...photos, ...photos, ...photos, ...photos]

  return (
    <>
      <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
      >
        {infinitePhotos.map((photo, index) => (
          <div 
            key={`${photo.alt}-${index}`}
            className="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            onClick={() => handleImageClick(photo)}
          >
            <div className="relative w-full h-full">
              <Image
                src={photo.thumbnail}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                priority={index < 3} // Prioritize first few images
              />
              {/* Overlay with location label */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-center pb-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <div className="text-lg font-medium mb-1">{photo.alt}</div>
                  <div className="text-sm text-gray-200">Click to view full size</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </>
  )
} 