import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cvDownloads } from '@/lib/cv'

interface CvDownloadDropdownProps {
  language: 'es' | 'en'
}

export function CvDownloadDropdown({ language }: CvDownloadDropdownProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isEs = language === 'es'

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <div className="relative" ref={containerRef}>
      <Button
        variant="ghost"
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Download size={16} />
        {isEs ? 'Descargar CV' : 'Download CV'}
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </Button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-20 mt-2 min-w-44 overflow-hidden rounded-lg border border-border bg-surface py-1 shadow-lg shadow-black/10"
        >
          {cvDownloads.map((cv) => (
            <a
              key={cv.lang}
              role="menuitem"
              href={cv.href}
              download={cv.fileName}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex w-full items-center px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-surface-hover"
            >
              {isEs ? cv.labelEs : cv.labelEn}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
