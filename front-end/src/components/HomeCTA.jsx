import React from 'react';
import { StyledHomeCTA } from '../styled';
import {Link} from 'react-router-dom';

const HomeCTA = () => (
    <StyledHomeCTA>
        {/* Call To Action */}
        <section className="cta">
            <h2 className="cta-h2">Quer fazer parte desse ecossistema?</h2>
            <h3 className="cta-h3">Crie seu perfil e comece a comprar ou vender</h3>
            <Link className="cta-btn" to="/registro">Faça o seu cadastro</Link>
            <p className="cta-subtext">Ou entre em contato para tornar-se um de nossos parceiros de coleta</p>
        </section>
    </StyledHomeCTA>
); 
export default HomeCTA;