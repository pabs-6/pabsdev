import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env'), override: true })

const CONTACT_EMAIL = 'pabloserranom1@gmail.com'

export async function sendContactEmail({ name, email, subject, message, accessKey }) {
  const key = accessKey || process.env.WEB3FORMS_ACCESS_KEY

  if (!key) {
    throw new Error('Email service not configured')
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: key,
      name,
      email,
      subject: `Nuevo mensaje desde pabsdev: ${subject}`,
      message,
      from_name: 'pabsdev — formulario de contacto',
      replyto: email,
    }),
  })

  const data = await response.json().catch(() => null)

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || 'No se pudo enviar el email')
  }
}

export { CONTACT_EMAIL }
