import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './components/LandingPage.jsx'
import Accordion from './components/Accordion.jsx'
import Team from './components/Team.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
    <Team />
    <Accordion />
    <Footer />
  </StrictMode>,
)
