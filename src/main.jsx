import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Flags from './Flags/Flags.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Flags />
  </StrictMode>,
)
