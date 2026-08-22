import { Button } from '@/components/ui/Button'
import { CvDownloadDropdown } from '@/components/ui/CvDownloadDropdown'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { siteConfig, socialLinks } from '@/lib/data'
import { motion } from 'framer-motion'

interface HeroProps {
  language: 'es' | 'en'
}

export function Hero({ language }: HeroProps) {
  const isEs = language === 'es'
  const githubLink = socialLinks.find((link) => link.icon === 'github')
  const linkedinLink = socialLinks.find((link) => link.icon === 'linkedin')

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
            {isEs ? siteConfig.role : siteConfig.roleEn}
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {isEs ? 'Hola, soy ' : "Hi, I'm "}
            <span className="block bg-linear-to-r from-accent to-cyan-300 bg-clip-text text-transparent sm:inline">
              {siteConfig.name}
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">
            {isEs ? siteConfig.heroSubtitle : siteConfig.heroSubtitleEn}
          </p>

          <p className="mt-3 max-w-xl text-base text-muted/80 sm:text-lg">
            {isEs ? siteConfig.tagline : siteConfig.taglineEn}
          </p>

          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            {isEs ? siteConfig.availability : siteConfig.availabilityEn}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">
              {isEs ? 'Ver proyectos' : 'View projects'}
            </Button>
            <Button variant="secondary" href="#contact">
              {isEs ? 'Hablemos' : "Let's talk"}
            </Button>
            {githubLink && (
              <Button variant="ghost" href={githubLink.href}>
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </Button>
            )}
            {linkedinLink && (
              <Button variant="ghost" href={linkedinLink.href}>
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </Button>
            )}
            <CvDownloadDropdown language={language} />
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <SectionDivider />
      </div>
    </section>
  )
}
