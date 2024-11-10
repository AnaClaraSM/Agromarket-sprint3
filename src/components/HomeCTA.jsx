import React from 'react';
import { StyledHomeCTA } from '../styled';

const HomeCTA = () => (
    <StyledHomeCTA>
        {/* Call To Action */}
        <section className="cta">
            <h2 className="cta-h2">Quer fazer parte desse ecossistema?</h2>
            <h3 className="cta-h3">Crie seu perfil e comece a comprar ou vender</h3>
            <a href="#" className="cta-btn">Faça o seu cadastro</a>
            <p className="cta-subtext">Ou entre em contato para tornar-se um de nossos parceiros de coleta</p>
        </section>
    </StyledHomeCTA>
); 
export default HomeCTA;