import { siteConfig } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {siteConfig.name}. Hecho con React + Vite + Tailwind.
        </p>
        <a
          href="#hero"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          Volver arriba ↑
        </a>
      </div>
    </footer>
  )
}
