import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { navLinks, siteConfig, socialLinks } from '@/lib/data'
import { ArrowUp, Mail, MapPin } from 'lucide-react'

interface FooterProps {
  language: 'es' | 'en'
}

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
} as const

export function Footer({ language }: FooterProps) {
  const year = new Date().getFullYear()
  const isEs = language === 'es'

  const footerNav = navLinks.filter((link) =>
    ['#skills', '#projects', '#experience', '#contact'].includes(link.href),
  )

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <a
              href="#hero"
              className="inline-block text-lg font-semibold tracking-tight text-foreground"
            >
              pabs<span className="text-accent">.</span>dev
            </a>
            <p className="text-sm font-medium text-foreground">
              {siteConfig.name}
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {isEs ? siteConfig.role : siteConfig.roleEn}.{' '}
              {isEs
                ? 'Construyendo productos web con impacto.'
                : 'Building web products with impact.'}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {isEs ? 'Navegación' : 'Navigation'}
            </h3>
            <ul className="space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {isEs ? link.label : link.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {isEs ? 'Contacto' : 'Contact'}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <Mail size={15} className="shrink-0 text-accent/70" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-muted">
                <MapPin size={15} className="shrink-0 text-accent/70" />
                {isEs ? siteConfig.location : siteConfig.locationEn}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {isEs ? 'Redes' : 'Social'}
            </h3>
            <div className="flex gap-2">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
          <p className="text-center text-xs text-muted sm:text-left">
            © {year} {siteConfig.name}.{' '}
            {isEs ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
          >
            {isEs ? 'Volver arriba' : 'Back to top'}
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
