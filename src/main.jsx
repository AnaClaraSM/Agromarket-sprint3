import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './GlobalStyles.js'
import App from './App.jsx'

// Routes
import Home from './routes/Home/index.jsx'
// import Login from './routes/Login/index.jsx'
// import Registro from './routes/Registro/index.jsx'
// import CadastroConsumidor from './routes/CadastroConsumidor/index.jsx'
// import CadastroProdutor1 from './routes/CadastroProdutor1/index.jsx'
// import CadastroProdutor2 from './routes/CadastroProdutor2/index.jsx'
// import Compras from './routes/Compras/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <GlobalStyle /> */}
  </StrictMode>,
)
