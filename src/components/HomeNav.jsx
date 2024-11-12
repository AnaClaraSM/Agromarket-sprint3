import React from 'react';
import { StyledHomeNav } from '../styled';
import { StyledLogo } from '../styled';
import {Link} from 'react-router-dom';

const HomeNav = () => (
    // Barra de Navegação
    <StyledHomeNav>
    <nav>
        {/* Logo */}
        <StyledLogo>
            <a href="#">
                <div className="logo nav-logo">
                    <img src="public\assets\images\logo.png" alt="Logo Agromarket" className="logo-img" />
                    <h1 className="logo-text">Agromarket</h1>
                </div>            
            </a>
        </StyledLogo>

        {/* Menu de Navegação */}
        <ul className="nav-menu">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#descontos">Descontos</a></li>
            <li><a href="#ecossistema">Nosso Ecossistema</a></li>
        </ul>

        {/* Botão de Entrada */}
        {/* <a className="nav-btn" href="./pages/login.html">Entrar/Cadastrar</a> */}
        <Link className="nav-btn" to="/login">Entrar/Cadastrar</Link>

    </nav>
    </StyledHomeNav>
);

export default HomeNav;