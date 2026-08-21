import { sendContactEmail } from './lib/sendContactEmail.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body || {}

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email no válido' })
  }

  try {
    await sendContactEmail({ name, email, subject, message })
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)

    if (error.message === 'Email service not configured') {
      return res.status(503).json({ error: 'Servicio de email no configurado' })
    }

    return res.status(500).json({ error: 'No se pudo enviar el email' })
  }
}
