import React from 'react';
import { StyledComprasHeader } from '../styled';
import ComprasNav from './ComprasNav';
import ComprasBanner from './ComprasBanner';

const ComprasHeader = () => (
    // Header
    <StyledComprasHeader>
        <header className="inicio" id="inicio">
            <ComprasNav />
            <ComprasBanner />
        </header>
    </StyledComprasHeader>
);

export default ComprasHeader;