import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import GlobalStyle from "./GlobalStyles.js";
import Home from "./routes/Home/index.jsx";
import { Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <GlobalStyle />
          <Outlet />
          {/* <Home /> */}
          {/* Outros componentes */}
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
