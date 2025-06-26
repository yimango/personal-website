'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-20"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          
          {/* Image */}
          <div className="relative max-w-full max-h-[90vh] overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={4032}
              height={3024}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
              priority
            />
          </div>
          
          {/* Image Info */}
          <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
            <p className="font-medium">{imageAlt}</p>
            <p className="text-gray-300">Click outside or press ESC to close</p>
          </div>
        </div>
      </div>
    </div>
  )
} 