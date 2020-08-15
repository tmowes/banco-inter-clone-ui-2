import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Routes from './routes'
import theme from './styles/theme'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  </ThemeProvider>
)

export default App
