import React from 'react';
import { StyledHomeMain } from '../styled';
import { StyledHomeProdutos } from '../styled';
import { StyledHomeSection } from '../styled';
import SectionBar from './SectionBar';
import HomeProdutos from './HomeProdutos';

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
                <HomeProdutos />
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