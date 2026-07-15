import { Badge } from '@/components/ui/Badge'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillGroups } from '@/lib/data'
import { motion } from 'framer-motion'

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Habilidades"
          title="Tecnologías y herramientas"
          description="Stack con el que he trabajado durante mi formación en DAW."
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
                {group.category}
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
    </section>
  )
}
