import { SectionHeading } from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'
import { BriefcaseBusiness, ArrowRight } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Experiencia profesional"
          title="Trayectoria real y proyectos de negocio"
          description="He formado parte de procesos reales de desarrollo, con foco en aprender, aportar valor y trabajar con una mentalidad orientada a resultados."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-10 transition-colors hover:border-accent/40"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/10" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <BriefcaseBusiness size={28} />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  Prácticas profesionales · Vitaly
                </h3>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  Feb 2026 - Abr 2026
                </span>
              </div>

              <p className="text-muted leading-relaxed">
                En este período viví una experiencia intensiva de práctica profesional dividida en fases claras: formación inicial en Angular, formación avanzada en Spring Boot y bases de datos, y presentación de una aplicación final construida con las habilidades adquiridas. Al finalizar, me integré en un equipo con una aplicación existente en la que resolvía tickets de frontend, backend y modelo de datos.
              </p>

              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="mt-0.5 shrink-0 text-accent" />
                  Primera fase de formación en Angular, entendiendo estructuras modernas de frontend y prácticas de UI/UX.
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="mt-0.5 shrink-0 text-accent" />
                  Segunda fase con Spring Boot y bases de datos, construyendo lógica backend y gestionando persistencia de datos.
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="mt-0.5 shrink-0 text-accent" />
                  Presenté una aplicación final completa y, en la etapa final, trabajé en un equipo resolviendo tickets reales de frontend, backend y base de datos.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
