import { Button } from '@/components/ui/Button'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import { siteConfig } from '@/lib/data'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-6 pt-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium tracking-wider text-accent uppercase">
            {siteConfig.role}
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Hola, soy{' '}
            <span className="bg-linear-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            {siteConfig.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">Ver proyectos</Button>
            <Button variant="secondary" href="#contact">
              Contactar
            </Button>
            <Button variant="ghost" href="https://github.com/pabs-6">
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        >
          <a
            href="#about"
            aria-label="Ir a sobre mí"
            className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
