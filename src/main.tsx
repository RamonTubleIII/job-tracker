import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Material UI 
import { ThemeProvider } from '@mui/material/styles'
import {theme} from './theme/theme.ts'
import CssBaseline from '@mui/material/CssBaseline'

import { JobsDashboard } from './pages/JobsDashboard.pages.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <JobsDashboard />
    </ThemeProvider>    
  </StrictMode>,
)
