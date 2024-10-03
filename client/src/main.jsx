
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssVarsProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'



createRoot(document.getElementById('root')).render(
  <CssVarsProvider>
    <CssBaseline />
    <App />
  </CssVarsProvider>
    
  
)
