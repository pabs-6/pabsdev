import { Badge } from '@/components/ui/Badge'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillGroups } from '@/lib/data'
import { motion } from 'framer-motion'

interface SkillsProps {
  language: 'es' | 'en'
}

export function Skills({ language }: SkillsProps) {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label={language === 'es' ? 'Habilidades' : 'Skills'}
          title={
            language === 'es'
              ? 'Stack técnico para productos web'
              : 'Technical stack for web products'
          }
          description={
            language === 'es'
              ? 'Tecnologías con las que he desarrollado aplicaciones en formación, prácticas y proyectos propios.'
              : 'Technologies I have used to build applications in training, internships and personal projects.'
          }
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-accent uppercase">
                {language === 'es' ? group.category : group.categoryEn}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} className="bg-surface-hover text-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <SectionDivider />
    </section>
  )
}
