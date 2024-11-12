import React from 'react';
import { StyledComprasProdutos } from '../styled';
import SectionBar from './SectionBar';

const ComprasProdutos = () => (
    <StyledComprasProdutos>
        {/* Seção Produtos */}
        <section className="produtos" id="produtos">
            {/* <!-- Cabeçalho --> */}
            <div className="section-header">
                <h2>Produtos em Destaque</h2>
                <p>Confira os produtos que estão conquistando o paladar de nossos clientes!</p>
            </div>
            {/* <!-- Cards --> */}
            <div className="container-produtos">
                {/* <!-- Produto 1 --> */}
                <div className="card-produto">
                    <div className="img-produto"><img src="./assets/images/produto1.png" alt="" /></div>
                    <div className="nome-produto">
                        <h3>Maçã Verde - UN</h3>
                    </div>
                    <div className="produtor-produto">
                        <h4>João Menezes</h4>
                    </div>
                    <div className="preco-produto"><i className="bx bx-cart-alt" id="cart-icon"></i> R$ 1,30</div>
                </div>
                {/* <!-- Produto 2 --> */}
                <div className="card-produto">
                    <div className="img-produto"><img src="./assets/images/produto2.png" alt="" /></div>
                    <div className="nome-produto">
                        <h3>Maçã Gala - UN</h3>
                    </div>
                    <div className="produtor-produto">
                        <h4>Fazenda da Vovó Joana</h4>
                    </div>
                    <div className="preco-produto"><i className="bx bx-cart-alt" id="cart-icon"></i> R$ 0,82</div>
                </div>
                {/* <!-- Produto 3 --> */}
                <div className="card-produto">
                    <div className="img-produto"><img src="./assets/images/produto3.png" alt="" /></div>
                    <div className="nome-produto">
                        <h3>Alface Americana - UN</h3>
                    </div>
                    <div className="produtor-produto">
                        <h4>Farm House</h4>
                    </div>
                    <div className="preco-produto"><i className="bx bx-cart-alt" id="cart-icon"></i> R$ 2,00</div>
                </div>
                {/* <!-- Produto 4 --> */}
                <div className="card-produto">
                    <div className="img-produto"><img src="./assets/images/produto4.png" alt="" /></div>
                    <div className="nome-produto">
                        <h3>Ovos - Dúzia</h3>
                    </div>
                    <div className="produtor-produto">
                        <h4>Avícula Dummont</h4>
                    </div>
                    <div className="preco-produto"><i className="bx bx-cart-alt" id="cart-icon"></i> R$ 7,35</div>
                </div>
                {/* <!-- Produto 5 --> */}
                <div className="card-produto">
                    <div className="img-produto"><img src="./assets/images/produto5.png" alt="" /></div>
                    <div className="nome-produto">
                        <h3>Filé Mignon - KG</h3>
                    </div>
                    <div className="produtor-produto">
                        <h4>João Menezes</h4>
                    </div>
                    <div className="preco-produto"><i className="bx bx-cart-alt" id="cart-icon"></i> R$ 83,60</div>
                </div>
                {/* <!-- Produto 6 --> */}
                <div className="card-produto">
                    <div className="img-produto"><img src="./assets/images/produto6.png" alt="" /></div>
                    <div className="nome-produto">
                        <h3>Tilápia - PÇ</h3>
                    </div>
                    <div className="produtor-produto">
                        <h4>Farmers</h4>
                    </div>
                    <div className="preco-produto"><i className="bx bx-cart-alt" id="cart-icon"></i> R$ 11,15</div>
                </div>
                {/* <!-- Produto 7 --> */}
                <div className="card-produto">
                    <div className="img-produto"><img src="./assets/images/produto7.png" alt="" /></div>
                    <div className="nome-produto">
                        <h3>Pistache - KG</h3>
                    </div>
                    <div className="produtor-produto">
                        <h4>Wind Mill</h4>
                    </div>
                    <div className="preco-produto"><i className="bx bx-cart-alt" id="cart-icon"></i> R$ 86,35</div>
                </div>
                {/* <!-- Produto 8 --> */}
                <div className="card-produto">
                    <div className="img-produto"><img src="./assets/images/produto8.png" alt="" /></div>
                    <div className="nome-produto">
                        <h3>Amêndoa Crua sem Casca - KG</h3>
                    </div>
                    <div className="produtor-produto">
                        <h4>Wind Mill</h4>
                    </div>
                    <div className="preco-produto"><i className="bx bx-cart-alt" id="cart-icon"></i> R$ 50,60</div>
                </div>
            </div>
            <SectionBar />
        </section>
    </StyledComprasProdutos>
); 
export default ComprasProdutos;