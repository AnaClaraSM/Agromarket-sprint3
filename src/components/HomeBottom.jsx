import React from 'react';
import { StyledHomeBottom } from '../styled';
import { StyledHomeSection } from '../styled';
import HomeCTA from './HomeCTA';
import Footer from './Footer';
import SectionBar from './SectionBar';

const HomeBottom = () => (
    <StyledHomeBottom>
        <StyledHomeSection>
            <HomeCTA />
        </StyledHomeSection>
        <Footer />
        {/* <SectionBar /> */}
    </StyledHomeBottom>
); 
export default HomeBottom;