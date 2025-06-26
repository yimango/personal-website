import { Suspense } from 'react'
import { PhotoGalleryClient } from './photo-gallery-client'

const photos = [
  {
    thumbnail: '/thumbnails/IMG_4242.jpg',
    full: '/IMG_4242.jpg',
    alt: 'Barcelona Marina'
  },
  {
    thumbnail: '/thumbnails/IMG_4355.jpg',
    full: '/IMG_4355.jpg',
    alt: 'Barcelona Cathedral'
  },
  {
    thumbnail: '/thumbnails/IMG_4395.jpg',
    full: '/IMG_4395.jpg',
    alt: 'Downtown Toronto'
  },
  {
    thumbnail: '/thumbnails/IMG_E4075.jpg',
    full: '/IMG_E4075.jpg',
    alt: 'Barcelona'
  },
  {
    thumbnail: '/thumbnails/IMG_5258.jpeg',
    full: '/IMG_5258.jpeg',
    alt: 'Chinese Garden in Vancouver'
  },
]

export function PhotoGallery() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Gallery</h2>
      <p className="text-gray-400 text-center mb-8">Click on any image to view in full resolution • Hover or scroll to pause autoscroll</p>
      
      <Suspense fallback={
        <div className="flex space-x-4 overflow-x-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-80 h-64 rounded-lg bg-gray-700 animate-pulse" />
          ))}
        </div>
      }>
        <PhotoGalleryClient photos={photos} />
      </Suspense>
    </div>
  )
} 