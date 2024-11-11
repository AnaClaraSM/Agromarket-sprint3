import React from 'react';
import { StyledComprasMain } from '../styled';
import { StyledComprasSection } from '../styled';
import ComprasCategorias from './ComprasCategorias';
import ComprasProdutos from './ComprasProdutos';
import ComprasProdutores from './ComprasProdutores';

const ComprasMain = () => (
    // MAIN
    <StyledComprasMain>
        <main>
            {/* Seção Produtos */}
            <StyledComprasSection>
                <ComprasCategorias />
            </StyledComprasSection>

            {/* Seção Descontos */}
            <StyledComprasSection>
                <ComprasProdutos />
            </StyledComprasSection>

            {/* Seção Ecossistema */}
            <StyledComprasSection>
                <ComprasProdutores />
            </StyledComprasSection>
        </main>
    </StyledComprasMain>
); 
export default ComprasMain;