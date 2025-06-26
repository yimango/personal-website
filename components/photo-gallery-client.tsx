'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
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
  const animationRef = useRef<number>()
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isUserScrolling, setIsUserScrolling] = useState(false)
  const [loadedFullImages, setLoadedFullImages] = useState<Set<string>>(new Set())
  const [transformX, setTransformX] = useState(0)
  const [scrollSpeed, setScrollSpeed] = useState(1)
  const [userScrollOffset, setUserScrollOffset] = useState(0)

  // Calculate photo width including gap
  const photoWidth = 336 // 320px photo + 16px gap
  const fullSetWidth = photos.length * photoWidth

  // Animation loop using requestAnimationFrame for smooth performance
  const animate = useCallback(() => {
    if (isPaused || isUserScrolling) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }

    setTransformX(prev => {
      const newX = prev - scrollSpeed + userScrollOffset
      
      // When we've moved past one full set of photos, reset to 0
      if (Math.abs(newX) >= fullSetWidth) {
        return 0
      }
      return newX
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [isPaused, isUserScrolling, scrollSpeed, fullSetWidth, userScrollOffset])

  // Start/stop animation
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate])

  // Handle mouse enter/leave
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false)
  }, [])

  // Handle user scrolling with wheel events
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    setIsUserScrolling(true)
    setIsPaused(true)
    
    // Add user scroll offset
    setUserScrollOffset(prev => prev + e.deltaX)
    
    // Resume autoscroll after 3 seconds of no interaction
    const timeoutId = setTimeout(() => {
      setIsUserScrolling(false)
      setIsPaused(false)
      setUserScrollOffset(0) // Reset user scroll offset
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  // Handle touch/mouse drag scrolling
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return
    
    setIsUserScrolling(true)
    setIsPaused(true)
    
    // Get current scroll position
    const scrollLeft = scrollRef.current.scrollLeft
    setUserScrollOffset(scrollLeft)
    
    // Resume autoscroll after 3 seconds of no interaction
    const timeoutId = setTimeout(() => {
      setIsUserScrolling(false)
      setIsPaused(false)
      setUserScrollOffset(0) // Reset user scroll offset
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  // Handle image click with lazy loading
  const handleImageClick = useCallback(async (photo: Photo) => {
    // Preload the full resolution image if not already loaded
    if (!loadedFullImages.has(photo.full)) {
      try {
        const img = new window.Image()
        img.src = photo.full
        await new Promise((resolve, reject) => {
          img.onload = resolve
          img.onerror = reject
        })
        setLoadedFullImages(prev => new Set(prev).add(photo.full))
      } catch (error) {
        console.error('Failed to load full resolution image:', error)
      }
    }
    
    setSelectedImage({ src: photo.full, alt: photo.alt })
  }, [loadedFullImages])

  const closeModal = useCallback(() => {
    setSelectedImage(null)
  }, [])

  // Create infinite loop by duplicating photos multiple times
  const infinitePhotos = [...photos, ...photos, ...photos, ...photos, ...photos, ...photos]

  return (
    <>
      <div 
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
        onScroll={handleScroll}
      >
        <div 
          className="flex space-x-4"
          style={{ 
            transform: `translateX(${transformX}px)`,
            transition: isPaused ? 'transform 0.3s ease' : 'none',
            willChange: 'transform', // Optimize for animations
            minWidth: `${infinitePhotos.length * photoWidth}px` // Ensure proper scrolling
          }}
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
                  loading={index < 6 ? 'eager' : 'lazy'} // Lazy load images beyond first 6
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