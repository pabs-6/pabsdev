import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import { ImageCarousel } from '@/components/ui/ImageCarousel'
import type { Project } from '@/lib/data'
import { useEffect } from 'react'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  language: 'es' | 'en'
}

export function ProjectModal({ project, isOpen, onClose, language }: ProjectModalProps) {
  const isEs = language === 'es'

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project) return null

  const technicalDetails = isEs
    ? project.technicalDetails
    : project.technicalDetailsEn ?? project.technicalDetails

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/70 backdrop-blur-[2px]"
          />
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16, rotateX: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16, rotateX: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface shadow-xl shadow-black/10"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 text-muted backdrop-blur-sm transition-colors hover:bg-surface-hover hover:text-foreground"
              >
                <X size={20} />
              </button>

              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="grid gap-10 lg:grid-cols-2">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h2 className="mb-2 text-3xl font-bold text-foreground">
                        {project.title}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        {isEs ? 'Detalles técnicos' : 'Technical details'}
                      </h3>
                      {technicalDetails && technicalDetails.length > 0 ? (
                        <div className="space-y-3">
                          {technicalDetails.map((detail, idx) => (
                            <p key={idx} className="text-muted leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted leading-relaxed">
                          {isEs ? project.description : project.descriptionEn}
                        </p>
                      )}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-4 pt-6 border-t border-border">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover shadow-sm shadow-accent/20"
                        >
                          <ExternalLink size={18} />
                          {isEs ? 'Ver demo' : 'View demo'}
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:border-accent/40"
                        >
                          <GitHubIcon className="h-5 w-5" />
                          {isEs ? 'Repositorio' : 'Repository'}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-foreground lg:hidden">
                      {isEs ? 'Galería' : 'Gallery'}
                    </h3>
                    <ImageCarousel
                      images={
                        project.images || (project.thumbnail ? [project.thumbnail] : [])
                      }
                    />
                    <div className="rounded-xl border border-border bg-surface-hover/70 p-4">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                        {isEs ? 'Tecnologías' : 'Technologies'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} className="px-3 py-1 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
