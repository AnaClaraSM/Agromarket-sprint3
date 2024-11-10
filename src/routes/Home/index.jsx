// Imports
import HomeHeader from '../../components/HomeHeader';
import HomeProdutos from '../../components/HomeProdutos';
import HomeDescontos from '../../components/HomeDescontos';
import HomeEcossistema from '../../components/HomeEcossistema';
import HomeCTA from '../../components/HomeCTA';
import Footer from '../../components/Footer';

// Content

function Home() {
    return (
        <div className="Home">
            <HomeHeader />
            <main>  
                <HomeProdutos />
                <HomeDescontos />
                <HomeEcossistema  />
            </main>
            <HomeCTA />
            <Footer />
        </div>
    );
}

export default Home;