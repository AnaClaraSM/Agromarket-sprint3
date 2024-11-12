// Imports
import React from 'react';
import ComprasHeader from '../../components/ComprasHeader';
import ComprasMain from '../../components/ComprasMain';
import Footer from '../../components/Footer';
import SectionBar from '../../components/SectionBar';

// Content

function Compras() {
    return (
        <div className="Compras">
            <ComprasHeader />
            <ComprasMain />
            <Footer />
            {/* Section Divider */}
            {/* <SectionBar /> */}
        </div>
    );
}

export default Compras;