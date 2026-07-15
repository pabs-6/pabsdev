import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import nodemailer from 'nodemailer'

function contactApiPlugin() {
  return {
    name: 'contact-api',
    configureServer(server: any) {
      server.middlewares.use('/api/contact', async (req: any, res: any) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let body = ''
        req.on('data', (chunk: any) => {
          body += chunk
        })

        req.on('end', async () => {
          try {
            const data = body ? JSON.parse(body) : {}
            const { name, email, subject, message } = data

            if (!name || !email || !subject || !message) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Faltan campos obligatorios' }))
              return
            }

            const transporter = nodemailer.createTransport({
              host: 'smtp.gmail.com',
              port: 465,
              secure: true,
              auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
              },
            })

            await transporter.sendMail({
              from: process.env.GMAIL_FROM || process.env.GMAIL_USER,
              to: process.env.GMAIL_TO || process.env.GMAIL_USER,
              replyTo: email,
              subject: `Nuevo mensaje desde pabsdev: ${subject}`,
              text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
              html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.5;">
                  <h3>Nuevo mensaje desde tu portafolio</h3>
                  <p><strong>Nombre:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Asunto:</strong> ${subject}</p>
                  <p><strong>Mensaje:</strong></p>
                  <p>${message.replace(/\n/g, '<br />')}</p>
                </div>
              `,
            })

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true }))
          } catch (error) {
            console.error('Error sending email:', error)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'No se pudo enviar el email' }))
          }
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), contactApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
