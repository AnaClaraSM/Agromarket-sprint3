// Imports
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import Footer from '../../components/Footer';
import SectionBar from '../../components/SectionBar';

// Content

function Home() {
    return (
        <div className="Home">
            <HomeHeader />
            {/* <main>  
                <HomeProdutos />
                <HomeDescontos />
                <HomeEcossistema  />
            </main>
            <HomeCTA /> */}
            <Footer />
            <SectionBar />
        </div>
    );
}

export default Home;