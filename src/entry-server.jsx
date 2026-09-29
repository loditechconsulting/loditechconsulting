import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Company details feed the structured data (JSON-LD) written by the prerender step
export { company, services } from './content/site.js'

/** Used at build time by scripts/prerender.mjs to produce static HTML for each page. */
export function render(page) {
  return renderToString(
    <StrictMode>
      <App page={page} />
    </StrictMode>,
  )
}
