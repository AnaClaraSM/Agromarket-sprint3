import React from 'react';
import { StyledComprasBanner } from '../styled';
import { StyledLogo } from '../styled';

const ComprasBanner = () => (
    // Banner
    <StyledComprasBanner>
        <div className="header-banner">
            <img className="banner-fundo" src="./assets/images/banner-green.png" alt="" />
            <StyledLogo>
                <div className="logo banner-logo">
                    <img className="logo-img" src="./assets/images/logo.png" alt="Logo Agromarket" />
                    <p className="logo-text">Agromarket</p>
                </div>
            </StyledLogo>
        </div>
    </StyledComprasBanner>
);

export default ComprasBanner;