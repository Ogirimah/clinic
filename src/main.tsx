import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline';
import ComingSoon from './ComingSoon.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline enableColorScheme />
    <ComingSoon />
  </StrictMode>,
)
