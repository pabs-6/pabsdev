import { SectionDivider } from '@/components/ui/SectionDivider'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experiences } from '@/lib/data'
import { motion } from 'framer-motion'
import { BriefcaseBusiness, ArrowRight } from 'lucide-react'

interface ExperienceProps {
  language: 'es' | 'en'
}

export function Experience({ language }: ExperienceProps) {
  const isEs = language === 'es'

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label={isEs ? 'Experiencia' : 'Experience'}
          title={
            isEs
              ? 'Experiencia en entorno profesional'
              : 'Professional experience'
          }
          description={
            isEs
              ? 'Formación y trabajo en empresa real, con tecnologías y metodologías utilizadas en el sector.'
              : 'Training and work in a real company environment, using industry technologies and methodologies.'
          }
        />

        {experiences.map((experience) => (
          <motion.div
            key={experience.company}
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
                    {isEs ? experience.role : experience.roleEn} · {experience.company}
                  </h3>
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    {experience.period}
                  </span>
                </div>

                <p className="text-muted leading-relaxed">
                  {isEs ? experience.summary : experience.summaryEn}
                </p>

                <ul className="space-y-2 text-sm text-muted">
                  {(isEs ? experience.highlights : experience.highlightsEn).map(
                    (highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <ArrowRight
                          size={16}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        {highlight}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <SectionDivider />
    </section>
  )
}
