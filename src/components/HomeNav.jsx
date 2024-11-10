import React from 'react';
import { StyledHomeNav } from '../styled'

const HomeNav = () => (
    // Barra de Navegação
    <StyledHomeNav>
    <nav>
        {/* Logo */}
        <a href="#">
            <div className="logo nav-logo">
                <img src="public\assets\images\logo.png" alt="Logo Agromarket" className="logo-img" />
                <h1 className="logo-text">Agromarket</h1>
            </div>            
        </a>

        {/* Menu de Navegação */}
        <ul className="nav-menu">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#descontos">Descontos</a></li>
            <li><a href="#ecossistema">Nosso Ecossistema</a></li>
        </ul>

        {/* Botão de Entrada */}
        <a className="nav-btn" href="./pages/login.html">Entrar/Cadastrar</a>
    </nav>
    </StyledHomeNav>
);

export default HomeNav