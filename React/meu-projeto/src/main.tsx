import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrimeiroComponente from './components/PrimeiroComponente.jsx'
import Saudacao from './components/Saudacao.tsx'

import App from './App.tsx'
createRoot(document.getElementById('tudo')!).render(
  <StrictMode>
    <App />
    <PrimeiroComponente/>
    <Saudacao name="Cláudio" idade={28}/>
  </StrictMode>,
)
