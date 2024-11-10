import React from 'react';
import { StyledHomeHeader } from '../styled';
import HomeNav from './HomeNav';
import HomeHero from './HomeHero';

const HomeHeader = () => (
    // Header
    <StyledHomeHeader>
        <header>
            <HomeNav />
            <HomeHero />
        </header>
    </StyledHomeHeader>
);

export default HomeHeader;