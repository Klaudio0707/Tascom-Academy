import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';

import Header from './Components/Header/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <App />
  </StrictMode>
)
