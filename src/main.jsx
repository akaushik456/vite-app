import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './components/dashboard'
import Nav from './components/nav1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard />
    <nav1 />
  </StrictMode>,
)
