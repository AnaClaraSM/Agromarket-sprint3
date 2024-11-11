import React from 'react';
import { StyledLogo } from '../styled';
import { StyledLogoNav } from '../styled';

const LogoNav = () => (
    // Barra de Navegação
    <StyledLogoNav>
    <nav>
        {/* Logo */}
        <StyledLogo>
            <a href="#">
                <div className="logo nav-logo">
                    <img src="public\assets\images\logo.png" alt="Logo Agromarket" className="logo-img" />
                    <p className="logo-text">Agromarket</p>
                </div>            
            </a>
        </StyledLogo>
    </nav>
    </StyledLogoNav>
);

export default LogoNav;