import React from 'react';
import { StyledHomeProdutos } from '../styled';

const HomeProdutos = () => (
    <StyledHomeProdutos>
        {/* Seção Produtos */}
        <section className="produtos" id="produtos">
            {/* Cabeçalho */}
            <div className="section-header">
                <h2>Produtos</h2>
                <p>Aqui você encontra produtos naturais de qualidade, em diferentes categorias, como:</p>
            </div>
            {/* Cards */}
            <div className="container-produtos">
                {/* Frutas */}
                <div className="card-produto">
                    <h3>Frutas</h3>
                    <img src="./assets/images/sec-produtos1.png" alt="Frutas" />
                </div>
                {/* Carnes */}
                <div className="card-produto">
                    <h3>Carnes</h3>
                    <img src="./assets/images/sec-produtos2.png" alt="" />
                </div>
                {/* Grãos */}
                <div className="card-produto">
                    <h3>Grãos</h3>
                    <img src="./assets/images/sec-produtos3.png" alt="" />
                </div>
            </div>
            <div className="section-footer">
                <p>E muito mais!</p>
            </div>
        </section>
    </StyledHomeProdutos>
); 
export default HomeProdutos;