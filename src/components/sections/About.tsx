import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/lib/data'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Mi Historia"
          title="Soy desarrollador Full Stack con foco en backend"
          description="Me gusta construir soluciones tecnológicas robustas y funcionales, alineadas con las necesidades de las empresas y la experiencia de los usuarios."
        />

        <div className="grid items-stretch gap-12 min-h-[430px] md:grid-cols-[1fr_320px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex h-full flex-col justify-center space-y-6"
          >
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface-hover/70 p-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Frontend
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Diseño interfaces claras, responsivas y centradas en la experiencia del usuario, con React, TypeScript y una base sólida en usabilidad.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface-hover/70 p-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Backend
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Desarrollo lógica de negocio, APIs y conexiones con bases de datos para construir aplicaciones robustas, escalables y preparadas para crecer.
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
                  {siteConfig.name.charAt(0)}
                </div>
              </div>

              <div className="border-t border-border bg-surface p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Datos Personales</h3>
                <div className="space-y-3 text-sm text-muted">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-foreground/80">Nombre:</span>
                    <span className="text-foreground">{siteConfig.name}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-foreground/80">Edad:</span>
                    <span className="text-foreground">20 años</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-foreground/80">Ubicación:</span>
                    <span className="text-foreground">{siteConfig.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
