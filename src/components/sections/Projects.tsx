import { Badge } from '@/components/ui/Badge'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects, type Project } from '@/lib/data'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useState } from 'react'
import { ProjectModal } from '@/components/ui/ProjectModal'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Proyectos"
          title="Mis trabajos"
          description="Una selección de proyectos desarrollados, incluyendo mi TFG."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setSelectedProject(project)
                  }
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/40 hover:cursor-pointer hover:shadow-md hover:shadow-accent/5 focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                {/* Thumbnail with Hover Effect */}
                <div className="relative aspect-video overflow-hidden border-b border-border bg-surface-hover">
                  <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/90">
                      Ver más información
                    </span>
                  </div>
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-[1px]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-accent-muted/10 text-accent">
                      <span className="text-4xl font-bold opacity-50">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-foreground line-clamp-1">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <div className="flex shrink-0 items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase text-accent">
                        <Star size={10} fill="currentColor" />
                        TFG
                      </div>
                    )}
                  </div>
                  
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="px-2 py-0.5 text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
