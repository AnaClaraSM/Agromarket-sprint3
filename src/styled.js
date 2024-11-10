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
        color: ${({ theme }) => theme.colors.orange};
    }
`;

// HomeDescontos
export const StyledHomeDescontos = styled.div`
    // SEÇÃO DESCONTOS
    .descontos .section-header {
        margin-bottom: 22px;
    }
    .container-descontos {
        display: flex;
        justify-content: space-around;
        // align-items: center;
        gap: 48px;
        padding: 45px 0;
    }
    .card-desconto {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card-desconto p {
        width: 260px;
        text-align: center;
    }
    .card-desconto img {
        width: 180px;
        margin-bottom: 16px;
    }
`;

// HomeEcossistema
export const StyledHomeEcossistema = styled.div`
    // SEÇÃO ECOSSISTEMA
    .container-ecossistema {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 48px;
        padding: 45px 0;
    }
    .card-ecossistema {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card-ecossistema img {
        width: 240px;
        border-radius: 20px;
        margin-bottom: 20px;
    }
    .card-ecossistema p {
        width: 240px;
        text-align: left;
    }

`;

// HomeBottom
export const StyledHomeBottom = styled.div`
    .bottom-section {
        width: 100%;
        height: 100vh;
    }
`;

// HomeCTA
export const StyledHomeCTA = styled.div`
    .cta {
        width: 100%;
        // height: calc(100vh - var(--footer-height) -10px);
        // Need to be dynamic
        height: calc(-224px + 100vh);
        background: linear-gradient(288.71deg, #FFEAD7 -21.84%, #FF7A00 40.59%, #FFEAD7 103.02%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Outfit', sans-serif;
    }
    .cta-h2, .cta-btn, .cta-subtext {
        text-transform: uppercase;
    }
    .cta-h2 {
        font-size: 16px;
        margin-bottom: 48px;
    }
    .cta-h3 {
        width: 560px;
        font-size: 48px;
        text-transform: capitalize;
        text-align: center;
        color: ${({ theme }) => theme.colors.white};
        margin-bottom: 42px;
    }
    .cta-btn {
        font-family: 'Outfit', sans-serif;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        color: ${({ theme }) => theme.colors.orange};
        background-color: ${({ theme }) => theme.colors.white};
        padding: 12px 46px;
        margin-bottom: 20px;
        border-radius: 48px;
        display: inline-block;
        transition: box-shadow 0.3s ease;
    }
    .cta-btn:hover {
        box-shadow: 0 0 25px 10px rgba(255, 255, 255, 0.5);
    }
    .cta-subtext {
        color: ${({ theme }) => theme.colors.white};
        font-size: 12px;
        font-weight: 600px;
    }
`;

// Footer
export const StyledFooter = styled.div`
    /*FOOTER*/
    footer {
        --footer-height: auto;
        width: 100%;
        padding: 24px 0 8px 0;
        background-color: ${({ theme }) => theme.colors.lightGrey};
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    footer .footer-sections {
        display: flex;
        /*justify-content: center;*/
        justify-content: space-between;
        gap: 72px;
        margin-bottom: 16px;
        padding: 0 100px;

    }
    .footer-sections h5 {
        font-size: 14px; 
        font-weight: 600;
        margin: 15px 0 ;
    }

    /*Sobre*/
    .sobre {
        /*width: 284px;*/
        width: 25%;
    }
    .sobre h4 {
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.orange};
        margin: 15px 0;
    }
    .sobre p {
        font-size: 12px;
        margin: 15px 0;
    }
    .redes-sociais, .app-stores {
        display: flex;
        gap: 10px;
        margin: 20px 0;
    }
    .redes-sociais a, .app-stores a {
        width: 28px;
        height: 28px;
        /*border-radius: 3px;*/
        background-color: ${({ theme }) => theme.colors.orange};
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: white;
    }
    .redes-sociais a:hover, .app-stores a:hover {
        background-color: white;
        color: ${({ theme }) => theme.colors.orange};
    }

    /*Suporte*/
    .suporte ul li, .contato p {
        font-size: 10px;
        margin: 15px 0;
    }
    .suporte ul li a {
        color: ${({ theme }) => theme.colors.black};
    }
    .suporte ul li a:hover {
        color: ${({ theme }) => theme.colors.darkGrey};
    }

    /*Contato*/
    .contato p {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    /*Copyright*/
    .copyright {
        font-family: 'Outfit', sans-serif;
        font-size: 10px;
        color: ${({ theme }) => theme.colors.darkGrey};
    }
`;

// SectionBar
export const StyledSectionBar = styled.div`
    /*Bars*/
    .section-bar {
        width: 100%;
        height: 10px;
        border: none;
        background: ${({ theme }) => theme.colors.orangeGradient};
    }
`

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

// PÁGINA COMPRAS