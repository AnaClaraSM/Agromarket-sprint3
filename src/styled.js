import styled from 'styled-components'


// LOGO (GLOBAL)

export const StyledLogo = styled.div`
    /*LOGO*/
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Outfit', sans-serif;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.orange};
    }
`      

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

// HOME PAGE

// HomeHeader
export const StyledHomeHeader = styled.div`
    /*HEADER*/
    header {
        width: 100%;
        height: 100vh;
    }
`

// HomeNav
export const StyledHomeNav = styled.div`
    // Navbar
    nav {
        width: 100%;
        padding: 18px 16px;
        position: fixed;
        top: 0;
        right: 0;
        background-color: ${({ theme }) => theme.colors.white};
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        box-shadow: ${({ theme }) => theme.shadows.navShadow};
    }

    // Logo
    .nav-logo img {
        width: 48px;
    }
    .nav-logo h1 {
        font-size: 16px;
        color: ${({ theme }) => theme.colors.orange};
        font-family: 'Outfit', sans-serif;
        font-weight: 700;
    }

    // Nav Menu
    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 60px;
    }
    .nav-menu li a {
        font-family: 'Outfit', sans-serif;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.orange};
    }
    .nav-menu li a:hover {
        opacity: 80%;
    }

    //Nav Button
    .nav-btn {
        padding: 16px 24px;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.orange};
        display: inline-block;
        text-transform: uppercase;
        text-align: center;
        border-radius: 48px;
        font-family: 'Outfit', sans-serif;
    }
    .nav-btn:hover {
        opacity: 80%;
    }
`

// HomeHero
export const StyledHomeHero = styled.div`
    // HERO
    .hero {
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .hero-fundo {
        height: 100vh;
        overflow: hidden;
    }

    .hero-content {
        font-family: 'Outfit', sans-serif;
        color: ${({ theme }) => theme.colors.white};
        width: 400px;
        position: absolute;
        top: 230px;
        left: 75px;
    }

    .hero-texto {
        display: flex;
        flex-direction: column;
    }

    .hero-titulo {
        font-size: 36px;
        font-weight: 700;
        line-height: 100%;
        margin-bottom: 20px;
    }

    .hero-paragrafo {
        width: 350px;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        line-height: 23.5px;
        margin-bottom: 48px;
    }

    .hero-btn {
        padding: 20px 92px;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.orange};
        display: inline-block;
        text-transform: uppercase;
        text-align: center;
        border-radius: 48px;
    }

    .hero-btn:hover {
        background-color: #ff8b1f;
    }

`

// HomeMain
export const StyledHomeMain = styled.div`
    // MAIN
    main h2 {
        font-size: 30px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.orange};
        margin-bottom: 20px;
    }
    main h3 {
        font-size: 24px; /**/
        font-weight: 700;
        color: ${({ theme }) => theme.colors.orange};
        margin-bottom: 16px;
    }
    main section {
        height: 100vh;
        padding: 100px;
    }
`;

// HomeSection
export const StyledHomeSection = styled.div`
    //Section 
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

// HomeProdutos
export const StyledHomeProdutos = styled.div`
    // SEÇÃO PRODUTOS
    .container-produtos {
        display: flex;
        gap: 48px;
        justify-content: center;
        /*align-items: center;*/
        padding: 45px 0;
    }
    .card-produto {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card-produto img {
        width: 345px;
        height: 230px;
        border-radius: 20px;
        overflow: hidden;
    }
    .section-footer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .section-footer p {
        font-family: 'Outfit', sans-serif;
        font-size: 26px;
        font-weight: 700;
        color: var(--orange);
    }
`;

// HomeDescontos
export const StyledHomeDescontos = styled.div``;

// HomeEcossistema
export const StyledHomeEcossistema = styled.div``;

// HomeBottom
export const StyledHomeBottom = styled.div``;

// HomeCTA
export const StyledHomeCTA = styled.div``;

// HomeFooter
export const StyledHomeFooter = styled.div``;

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

// PÁGINA COMPRAS