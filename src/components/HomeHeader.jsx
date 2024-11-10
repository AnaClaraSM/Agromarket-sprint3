import React from 'react';
import { StyledHomeHeader } from '../styled';
import HomeNav from './HomeNav';

const HomeHeader = () => (
    // Header
    <StyledHomeHeader>
        <header>
            <HomeNav />
        </header>
    </StyledHomeHeader>
);

export default HomeHeader;