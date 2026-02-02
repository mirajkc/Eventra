import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterConfiguration from './configs/router.confg'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position='top-center'  />
    <RouterConfiguration />
  </StrictMode>,
)
