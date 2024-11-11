import React from 'react';
import { StyledComprasProdutores } from '../styled';
import SectionBar from './SectionBar';

const ComprasProdutores = () => (
    <StyledComprasProdutores>
        {/* Seção Produtos */}
        <section className="produtores" id="produtores">
            {/* <!-- Cabeçalho --> */}
            <div className="section-header">
                <h2>Produtores Populares</h2>
                <p>Conheça os produtores que têm se destacado com produtos de altíssima qualidade!</p>
            </div>
            {/* <!-- Cards --> */}
            <div className="container-produtores">
                {/* <!-- Coluna 1 --> */}
                <div className="coluna-produtor">
                    {/* <!-- Produtor 1 --> */}
                    <div className="card-produtor">
                        <img className="img-produtor" src="./assets/images/produtor1.png" alt="" />
                        <div className="texto-produtor">
                            <h3>João Menezes</h3>
                            <p>Agricultura & Pecuária</p>
                            <div className="stars">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star-half"></i>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Produtor 2 --> */}
                    <div className="card-produtor">
                        <img className="img-produtor" src="./assets/images/produtor2.png" alt="" />
                        <div className="texto-produtor">
                            <h3>Américo Luíz</h3>
                            <p>Agricultura</p>
                            <div className="stars">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star-half"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Divisor de Coluna --> */}
                <div className="column-divider"></div>
                {/* <!-- Coluna 2 --> */}
                <div className="coluna-produtor">
                    {/* <!-- Produtor 3 --> */}
                    <div className="card-produtor">
                        <img className="img-produtor" src="./assets/images/produtor3.png" alt="" />
                        <div className="texto-produtor">
                            <h3>Antônio Sander</h3>
                            <p>Agricultura</p>
                            <div className="stars">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bx-star"></i>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Produtor 4 --> */}
                    <div className="card-produtor">
                        <img className="img-produtor" src="./assets/images/produtor4.png" alt="" />
                        <div className="texto-produtor">
                            <h3>Farm House</h3>
                            <p>Agricultura</p>
                            <div className="stars">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bx-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Divisor de Coluna --> */}
                <div className="column-divider"></div>
                {/* <!-- Coluna 3 --> */}
                <div className="coluna-produtor">
                    {/* <!-- Produtor 5 --> */}
                    <div className="card-produtor">
                        <img className="img-produtor" src="./assets/images/produtor5.png" alt="" />
                        <div className="texto-produtor">
                            <h3>Farmers</h3>
                            <p>Agricultura & Pecuária</p>
                            <div className="stars">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bx-star"></i>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Produtor 6 --> */}
                    <div className="card-produtor">
                        <img className="img-produtor" src="./assets/images/produtor6.png" alt="" />
                        <div className="texto-produtor">
                            <h3>Wind Mill</h3>
                            <p>Grãos</p>
                            <div className="stars">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bx-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </StyledComprasProdutores>
); 
export default ComprasProdutores;