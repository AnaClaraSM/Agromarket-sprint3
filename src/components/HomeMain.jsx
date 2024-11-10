import React from 'react';
import { StyledHomeMain } from '../styled';
import { StyledHomeSection } from '../styled';
import SectionBar from './SectionBar';
import HomeProdutos from './HomeProdutos';
import HomeDescontos from './HomeDescontos';

const HomeMain = () => (
    // MAIN
    <StyledHomeMain>
        <main>
            {/* Seção Produtos */}
            <StyledHomeSection>
                <HomeProdutos />
            </StyledHomeSection>

            {/* Section Divider */}
            <SectionBar />

            {/* Seção Descontos */}
            <StyledHomeSection>
                <HomeDescontos />
            </StyledHomeSection>

            {/* Section Divider */}
            <SectionBar />

            {/* Seção Ecossistema */}
            <StyledHomeSection>
                <HomeProdutos />
            </StyledHomeSection>
        </main>
    </StyledHomeMain>
    // <HomeDescontos />
    // <HomeEcossistema />
); 
export default HomeMain;