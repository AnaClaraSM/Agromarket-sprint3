import React from 'react';
import { StyledComprasNav } from '../styled';
import { StyledLogo } from '../styled';

const ComprasNav = () => (
    // Barra de Navegação
    <StyledComprasNav>
        <nav>
            {/* <!-- Logo --> */}
            <StyledLogo>
                <a href="#">
                    <div className="logo nav-logo">
                        <img className="logo-img" src="./assets/images/logo.png" alt="Logo Agromarket" />
                        <h1 className="logo-text">Agromarket</h1>
                    </div>
                </a>
            </StyledLogo>
            {/* <!-- Menu de Navegação --> */}
            <ul className="nav-menu">
                <li><a href="#inicio">Início</a></li>
                <li><a href="#categorias">Categorias</a></li>
                <li><a href="#produtos">Destaques</a></li>
                <li><a href="#produtores">Produtores</a></li>
            </ul>

            {/* <!-- Ícones de Navegação --> */}
            <div className="nav-icon">
                <a href="#"><i className="bx bx-cart-alt" id="cart-icon"></i></a>
                <a href="#"><i className="bx bx-user" id="profile-icon"></i></a>
            </div>
        </nav>
    </StyledComprasNav>
);

export default ComprasNav;