import React from 'react';
import { StyledComprasCategorias } from '../styled';
import SectionBar from './SectionBar';

const ComprasCategorias = () => (
    <StyledComprasCategorias>
        {/* Seção Categorias */}
        <section className="categorias" id="categorias">
            {/* <!-- Cabeçalho --> */}
            <h2>Categorias</h2>
            {/* <!-- Cards --> */}
            <div className="container-categorias">
                {/* <!-- Frutas --> */}
                <div className="card-categoria">
                    <h3>Frutas</h3>
                    <a href="#"><img src="./assets/images/categoria1.png" alt="Frutas" /></a>
                </div>
                {/* <!-- Carnes --> */}
                <div className="card-categoria">
                    <h3>Carnes</h3>
                    <a href="#"><img src="./assets/images/categoria2.png" alt="" /></a>
                </div>
                {/* <!-- Grãos --> */}
                <div className="card-categoria">
                    <h3>Grãos</h3>
                    <a href="#"><img src="./assets/images/categoria3.png" alt="" /></a>
                </div>
                {/* <!-- Todas --> */}
                <div className="ver-categorias">
                    <h3>Ver todas</h3>
                    <a href="#"><i className="bx bxs-plus-circle"></i></a>
                </div>
            </div>
            <SectionBar />
        </section>
    </StyledComprasCategorias>
); 
export default ComprasCategorias;