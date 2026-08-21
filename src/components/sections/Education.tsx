import { SectionDivider } from '@/components/ui/SectionDivider'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { education } from '@/lib/data'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'

interface EducationProps {
  language: 'es' | 'en'
}

export function Education({ language }: EducationProps) {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label={language === 'es' ? 'Formación' : 'Education'}
          title={
            language === 'es'
              ? 'Formación académica oficial'
              : 'Official academic training'
          }
          description={
            language === 'es'
              ? 'Titulación en Desarrollo de Aplicaciones Web con enfoque práctico y orientado al mercado laboral.'
              : 'Web Application Development degree with a practical, job-market-oriented approach.'
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-10 transition-colors hover:border-accent/40"
        >
          {/* Decorative gradient */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/10" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <GraduationCap size={28} />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                {language === 'es' ? education.degree : education.degreeEn}
              </h3>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                <span className="font-semibold text-accent">
                  {education.school}
                </span>
                <span className="inline-flex items-center gap-1 text-muted">
                  <MapPin size={14} />
                  {language === 'es' ? education.location : education.locationEn}
                </span>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {education.period}
                </span>
              </div>

              <p className="text-muted leading-relaxed">
                {language === 'es' ? education.description : education.descriptionEn}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </section>
  )
}
