import { SectionDivider } from '@/components/ui/SectionDivider'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/lib/data'
import { motion } from 'framer-motion'

interface AboutProps {
  language: 'es' | 'en'
}

export function About({ language }: AboutProps) {
  const isEs = language === 'es'

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label={isEs ? 'Sobre mí' : 'About me'}
          title={
            isEs
              ? 'Desarrollador orientado a producto y resultados'
              : 'Product-minded developer focused on results'
          }
          description={
            isEs
              ? 'Combino formación técnica, experiencia en empresa y proyectos propios para aportar soluciones web completas y bien ejecutadas.'
              : 'I combine technical training, corporate experience and personal projects to deliver complete, well-executed web solutions.'
          }
        />

        <div className="grid items-stretch gap-12 min-h-[430px] md:grid-cols-[1fr_320px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex h-full flex-col justify-center space-y-6"
          >
            {(isEs ? siteConfig.about : siteConfig.aboutEn).map((paragraph) => (
              <p key={paragraph} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface-hover/70 p-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  {siteConfig.aboutHighlights.frontend.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {isEs
                    ? siteConfig.aboutHighlights.frontend.description
                    : siteConfig.aboutHighlights.frontend.descriptionEn}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface-hover/70 p-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  {siteConfig.aboutHighlights.backend.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {isEs
                    ? siteConfig.aboutHighlights.backend.description
                    : siteConfig.aboutHighlights.backend.descriptionEn}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex h-full w-full max-w-[320px] items-stretch"
          >
            <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-lg shadow-black/10">
              <div className="flex-1 bg-surface p-8">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-border bg-surface-hover text-4xl font-bold text-foreground shadow-sm shadow-black/10">
                  {siteConfig.shortName.charAt(0)}
                </div>
              </div>

              <div className="border-t border-border bg-surface p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  {isEs ? 'Perfil profesional' : 'Professional profile'}
                </h3>
                <div className="space-y-3 text-sm text-muted">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-foreground/80">
                      {isEs ? 'Nombre:' : 'Name:'}
                    </span>
                    <span className="text-right text-foreground">{siteConfig.name}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-foreground/80">
                      {isEs ? 'Rol:' : 'Role:'}
                    </span>
                    <span className="text-right text-foreground">
                      {isEs ? siteConfig.role : siteConfig.roleEn}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-foreground/80">
                      {isEs ? 'Ubicación:' : 'Location:'}
                    </span>
                    <span className="text-right text-foreground">
                      {isEs ? siteConfig.location : siteConfig.locationEn}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-foreground/80">
                      {isEs ? 'Estado:' : 'Status:'}
                    </span>
                    <span className="text-right text-accent">
                      {isEs ? siteConfig.availability : siteConfig.availabilityEn}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <SectionDivider />
    </section>
  )
}
