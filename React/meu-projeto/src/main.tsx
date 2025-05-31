import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrimeiroComponente from './components/PrimeiroComponente.jsx'
import Saudacao from './components/Saudacao.tsx'
import Container from './components/Container.tsx'

import App from './App.tsx'
import Button from './Button/index.tsx'
createRoot(document.getElementById('tudo')!).render(
  
  <StrictMode>
    <App />
    <PrimeiroComponente/>
    <Container color="#f5f">
    <Saudacao name="Cláudio" idade={28}/>
    </Container>
    <Button>Button</Button>
  </StrictMode>,
)
