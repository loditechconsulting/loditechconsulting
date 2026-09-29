import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/plus-jakarta-sans/wght.css'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App page={container.dataset.page} />
  </StrictMode>
)

// Production pages are prerendered to static HTML (scripts/prerender.mjs) and hydrated;
// the dev server serves an empty root and renders on the client.
if (container.firstElementChild) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
