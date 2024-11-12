import React from 'react';
import { StyledHomeEcossistema } from '../styled';

const HomeEcossistema = () => (
    <StyledHomeEcossistema>
        <section className="ecossistema" id="ecossistema">
            {/* <!-- Cabeçalho --> */}
            <div className="section-header">
                <h2>Nosso Ecossistema</h2>
                <p>Nossa plataforma integra três diferentes nichos para formar o ciclo completo da cadeia produtiva.</p>
            </div>
            {/* <!-- Cards --> */}
            <div className="container-ecossistema">
                {/* <!-- Produtores --> */}
                <div className="card-ecossistema">
                    <h3>Produtores</h3>
                    <img src="./assets/images/ecossistema1.png" alt="" />
                    <p>Os pequenos produtores compõem o primeiro nicho do nosso ecossistema, fornecendo alimentos naturais e de qualidade diretamente para os consumidores.</p>
                </div>
                {/* <!-- Consumidores --> */}
                <div className="card-ecossistema">
                    <h3>Consumidores</h3>
                    <img src="./assets/images/ecossistema2.png" alt="" />
                    <p>Os consumidores são o segundo nicho, que movimenta a cadeia comprando produtos, trazendo resíduos, economizando com descontos e participando ativamente desse sistema.</p>
                </div>
                {/* <!-- Coletores --> */}
                <div className="card-ecossistema">
                    <h3>Coletores</h3>
                    <img src="./assets/images/ecossistema3.png" alt="" />
                    <p>Os coletores integram o terceiro nicho, sendo nossos parceiros diretos e os responsáveis por garantir o processamento correto de todos os resíduos cadastrados.</p>
                </div>
            </div>
        </section>
    </StyledHomeEcossistema>
);
export default HomeEcossistema;