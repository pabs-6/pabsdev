import { motion } from 'framer-motion'

export function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.7 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="mx-auto my-12 h-px w-full max-w-5xl bg-linear-to-r from-transparent via-accent/30 to-transparent"
    />
  )
}
