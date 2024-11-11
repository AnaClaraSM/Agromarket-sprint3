import React from 'react';
import ReactDOM from 'react-dom/client';
// import { StrictMode } from 'react'; // Adicione essa importação
import GlobalStyle from './GlobalStyles.js';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/scss/bootstrap.scss"

// Pages
import Home from './routes/Home/index.jsx'
// import Login from './routes/Login/index.jsx'
// import Registro from './routes/Registro/index.jsx'
import CadastroConsumidor from './routes/CadastroConsumidor/index.jsx'
// import CadastroProdutor1 from './routes/CadastroProdutor1/index.jsx'
// import CadastroProdutor2 from './routes/CadastroProdutor2/index.jsx'
import Compras from './routes/Compras/index.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            // { path: "/login", element: <Login/>},
            // { path: "/registro", element: <Registro/>},
            { path: "/cadastroConsumidor", element: <CadastroConsumidor/>},
            // { path: "/cadastroProdutor1", element: <cadastroProdutor1/>},
            // { path: "/cadastroProdutor2", element: <cadastroProdutor2/>},
            { path: "/compras", element: <Compras/>},
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </React.StrictMode>,
)
