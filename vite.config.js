import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

function localContactApi() {
  return {
    name: 'local-contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact.php', (req, res, next) => {
        if (req.method === 'POST') {
          let body = ''
          req.on('data', (chunk) => { body += chunk })
          req.on('end', () => {
            try {
              const data = JSON.parse(body)
              console.log('\n[Vite Dev] Received contact form test submission:')
              console.log('  To: loditechc@gmail.com (testing)')
              console.log('  Name:', data.fullName)
              console.log('  Email:', data.email)
              console.log('  Phone:', data.phone || 'Not provided')
              console.log('  Company:', data.company || 'Not provided')
              console.log('  Service:', data.service)
              console.log('  Message:', data.message || 'None')
              console.log('--------------------------------------------------\n')
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({
                success: true,
                message: 'Thank you! Your consultation request has been sent to our team.'
              }))
            } catch {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: false, message: 'Invalid JSON request' }))
            }
          })
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    localContactApi(),
    react(),
    tailwindcss(),
  ],
  build: {
    rolldownOptions: {
      // One HTML entry per page; each is prerendered by scripts/prerender.mjs
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        privacy: fileURLToPath(new URL('./privacy/index.html', import.meta.url)),
      },
    },
  },
})
