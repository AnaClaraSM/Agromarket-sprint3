import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.js'
import GlobalStyle from './GlobalStyles.js'
import HomeNav from './components/HomeNav.jsx'

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HomeNav />
        {/* Outros componentes */}
    </ThemeProvider>
    </>
  )
}

export default App
