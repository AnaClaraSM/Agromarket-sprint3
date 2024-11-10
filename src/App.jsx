import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.js'
import GlobalStyle from './GlobalStyles.js'
import HomeHeader from './components/HomeHeader.jsx'

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HomeHeader />
        {/* Outros componentes */}
    </ThemeProvider>
    </>
  )
}

export default App
