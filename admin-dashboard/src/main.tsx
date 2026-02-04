import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterConfiguration from './configs/router.confg'
import { Toaster } from 'sonner'
import { ThemeProvider } from './state/theme-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster position='top-center'  />
      <main>
      <RouterConfiguration />
      </main>
    </ThemeProvider>
      
  </StrictMode>,
)
