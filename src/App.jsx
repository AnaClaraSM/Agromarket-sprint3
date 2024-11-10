import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.js'
import GlobalStyle from './GlobalStyles.js'
import Home from './routes/Home/index.jsx'

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
        {/* Outros componentes */}
    </ThemeProvider>
    </>
  )
}

export default App