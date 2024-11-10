import React from 'react';
import { StyledHomeDescontos } from '../styled';

const HomeDescontos = () => (
    <StyledHomeDescontos>
        <section class="descontos" id="descontos">
            {/* <!-- Cabeçalho --> */}
            <div class="section-header">
                <h2>Descontos</h2>
                <p>Você também pode trocar seus resíduos descartáveis por descontos! Funciona assim:</p>
            </div>
            {/* <!-- Cards --> */}
            <div class="container-descontos">
                {/* <!-- Passo 1 --> */}
                <div class="card-desconto">
                    <h3>Cadastre seus Resíduos</h3>
                    <img src="./assets/images/desconto1.png" alt="" />
                    <p>Cadastre os resíduos recicláveis que deseja trocar, informando o tipo e a quantidade, e aguarde o recebimento.</p>
                </div>
                {/* <!-- Passo 2 --> */}
                <div class="card-desconto">
                    <h3>Receba seus Cupons</h3>
                    <img src="./assets/images/desconto2.png" alt="" />
                    <p>A cada troca, você recebe cupons de desconto para usar em suas compras no Agromarket, assim que o recebimento é confirmado.</p>
                </div>
                {/* <!-- Passo 3 --> */}
                <div class="card-desconto">
                    <h3>Compre com Descontos</h3>
                    <img src="./assets/images/desconto3.png" alt="" />
                    <p>Utilize seus cupons na momento da compra e aproveite descontos em produtos diversos e saudáveis da nossa plataforma.</p>
                </div>
            </div>
        </section>
    </StyledHomeDescontos>
);
export default HomeDescontos;