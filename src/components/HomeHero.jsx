import React from 'react';
import { StyledHomeHero } from '../styled';
import {Link} from 'react-router-dom';

const HomeHero = () => (
    <StyledHomeHero>
        {/* Hero Section */}
        <div className="hero">
            <img className="hero-fundo" src="public\assets\images\hero-banner.png" alt="" />
            <div className="hero-content">
                <div className="hero-texto">
                    <p className="hero-titulo">Troque seus resíduos por descontos e compre direto dos produtores</p>
                    <p className="hero-paragrafo">O melhor lugar para cuidar da sua alimentação, do seu bolso e do nosso planeta.</p>
                </div>
                {/* <a href="#" className="hero-btn">Comece Já</a> */}
                <Link className="hero-btn" to="/registro">Comece Já</Link>
            </div>
        </div>
    </StyledHomeHero>
);
export default HomeHero;