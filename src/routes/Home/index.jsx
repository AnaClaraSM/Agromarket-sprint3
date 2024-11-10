// Imports
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import HomeMain from '../../components/HomeMain';
import HomeBottom from '../../components/HomeBottom';

// Content

function Home() {
    return (
        <div className="Home">
            <HomeHeader />
            <HomeMain />
            <HomeBottom />
        </div>
    );
}

export default Home;