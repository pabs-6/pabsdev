import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!images || images.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl bg-surface border border-border">
        <p className="text-muted">No hay imágenes disponibles</p>
      </div>
    )
  }

  return (
    <>
      {/* Inline Carousel */}
      <div className="relative group overflow-hidden rounded-xl border border-border bg-surface">
        <div className="aspect-video w-full overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 h-full w-full cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setIsLightboxOpen(true)
                }
              }}
            >
              <img
                src={images[currentIndex]}
                alt={`Imagen ${currentIndex + 1}`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm transition-transform hover:scale-110 opacity-0 group-hover:opacity-100"
                aria-label="Anterior imagen"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm transition-transform hover:scale-110 opacity-0 group-hover:opacity-100"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 p-3 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-accent opacity-100'
                    : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute right-6 top-6 rounded-full bg-surface p-2 text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
            >
              <X size={24} />
            </button>

            <div className="relative w-full max-w-5xl">
              <img
                src={images[currentIndex]}
                alt={`Imagen ${currentIndex + 1} ampliada`}
                className="max-h-[85vh] w-full object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 rounded-full bg-surface p-3 text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 rounded-full bg-surface p-3 text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
