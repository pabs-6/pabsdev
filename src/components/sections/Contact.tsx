import { useState, type ChangeEvent, type FormEvent } from 'react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { Button } from '@/components/ui/Button'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { siteConfig, socialLinks } from '@/lib/data'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

interface ContactProps {
  language: 'es' | 'en'
}

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
} as const

export function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status !== 'idle') {
      setStatus('idle')
      setFeedback('')
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setFeedback('')

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

      if (!accessKey) {
        throw new Error('missing access key')
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `Nuevo mensaje desde pabsdev: ${formData.subject}`,
          message: formData.message,
          from_name: 'pabsdev — formulario de contacto',
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error('No se pudo enviar')
      }

      setStatus('success')
      setFeedback(language === 'es' ? 'Mensaje enviado correctamente. Gracias por contactar.' : 'Message sent successfully. Thanks for getting in touch.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
      setFeedback(language === 'es' ? 'No se pudo enviar el mensaje. Inténtalo de nuevo en unos momentos.' : 'The message could not be sent. Please try again in a few moments.')
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column: Form */}
          <div>
            <h3 className="mb-6 text-3xl font-bold tracking-tight text-foreground">
              {language === 'es' ? '¿Buscas un desarrollador?' : 'Looking for a developer?'}
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {language === 'es' ? 'Nombre *' : 'Name *'}
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {language === 'es' ? 'Email *' : 'Email *'}
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  {language === 'es' ? 'Asunto *' : 'Subject *'}
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  {language === 'es' ? 'Mensaje *' : 'Message *'}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={language === 'es' ? 'Cuéntame más sobre tu proyecto...' : 'Tell me more about your project...'}
                  className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              {feedback ? (
                <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {feedback}
                </p>
              ) : null}

              <Button type="submit" className="w-full justify-center" disabled={status === 'sending'}>
                {status === 'sending'
                  ? (language === 'es' ? 'Enviando...' : 'Sending...')
                  : (language === 'es' ? 'Enviar Mensaje' : 'Send Message')}
                <Send size={16} />
              </Button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div>
            <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              {language === 'es' ? 'Información de contacto' : 'Contact information'}
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-muted">
              {language === 'es'
                ? 'Estoy abierto a oportunidades laborales, prácticas y colaboraciones. Cuéntame tu proyecto o vacante y te responderé lo antes posible.'
                : 'I am open to job opportunities, internships and collaborations. Tell me about your project or role and I will get back to you as soon as possible.'}
            </p>

            <div className="mb-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted/20 text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-accent transition-colors hover:text-accent-hover hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted/20 text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{language === 'es' ? 'Teléfono' : 'Phone'}</p>
                  <p className="text-sm text-accent">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted/20 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{language === 'es' ? 'Ubicación' : 'Location'}</p>
                  <p className="text-sm text-foreground">
                    {language === 'es' ? siteConfig.location : siteConfig.locationEn}
                  </p>
                </div>
              </div>
            </div>

            <h4 className="mb-4 text-lg font-bold text-foreground">
              {language === 'es' ? 'Sígueme en redes sociales' : 'Follow me on social media'}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon]
                if (link.icon === 'mail') return null
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  )
}

