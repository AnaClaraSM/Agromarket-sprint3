import React from 'react';
import { StyledFooter } from '../styled';

const Footer = () => (
    <StyledFooter>
        <footer>
            <div className="footer-sections">
                <div className="sobre">
                    <h4>Agromarket</h4>
                    <p>Conectando produtores, consumidores e coletores e unindo qualidade, economia e ecologia. Acompanhe nossas redes sociais e confira todas as novidades.</p>
                    <div className="redes-sociais">
                        <a href="#"><i className="bx bxl-facebook"></i></a>
                        <a href="#"><i className="bx bxl-instagram-alt"></i></a>
                        <a href="#"><i className="bx bxl-youtube"></i></a>
                    </div>
                </div>
                <div className="suporte">
                    <h5>Suporte</h5>
                    <ul>
                        <li><a href="#">Termos e Condições</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Código de conduta</a></li>
                        <li><a href="#">Suporte</a></li>
                    </ul>
                </div>
                <div className="contato">
                    <h5>Contato</h5>
                    <p><i className="bx bxs-map"></i> R. Imaginária, 47, Vl. Pseudini, São Paulo/SP.</p>
                    <p><i className="bx bxs-phone"></i> +55 11 99999-9999</p>
                    <p><i className="bx bxs-envelope"></i> agromarket@gmail.com</p>
                </div>
                <div className="apps">
                    <h5>Baixe Nosso App</h5>
                    <div className="app-stores">
                        <a href="#"><i className="bx bxl-play-store"></i></a>
                        <a href="#"><i className="bx bxl-apple"></i></a>
                    </div>
                </div>
            </div>
            <div className="copyright">Agromarket - Todos os dieitos reservados.</div>
        </footer>
    </StyledFooter>
); 
export default Footer;