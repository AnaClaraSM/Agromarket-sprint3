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

// ComprasHeader
export const StyledComprasHeader = styled.div`
    header {
        width: 100%;
        height: 233px;
    }
`

// ComprasNav
export const StyledComprasNav = styled.div`
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
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    }

    /*Nav Logo*/
    .nav-logo img {
        width: 48px;
    }
    .nav-logo h1 {
        font-size: 16px;
    }

    /*Nav Menu*/
    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 60px;
    }
    .nav-menu li a {
        font-size: 16px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.orange};
    }
    .nav-menu li a:hover {
        opacity: 80%;
    }

    /*Nav Icons*/
    .nav-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .nav-icon i {
        font-size: 24px;
        color: ${({ theme }) => theme.colors.orange};
    }
    .nav-icon i:hover {
        opacity: 80%;
    }
`

// ComprasBanner
export const StyledComprasBanner = styled.div`
    /*Banner*/
    .header-banner {
        width: 100%;
        height: 233px;
        display: flex;
        justify-content: center;
    }
    .header-banner .banner-fundo {
        width: 100%;
        height: auto;
        z-index: -2;
        object-fit: cover;
    }
    /*Banner Logo*/
    .banner-logo {
        position: absolute;
        z-index: -1;
        top: 105px;
        left: 50%;
        transform: translateX(-50%);

    }
    .banner-logo img {
        width: 100px;
    }
    .banner-logo p {
        font-size: 37px;
    }
`

// ComprasMain
export const StyledComprasMain = styled.div`
    // MAIN
    main {
        padding: 50px 100px;
    }

    main h2 {
        font-size: 28px; /**/
        font-weight: 700;
        color: ${({ theme }) => theme.colors.orange};
    }
`

// ComprasSection
export const StyledComprasSection = styled.div`
    //Section 
    section {
        width: 100%;
    }
`;

// ComprasCategorias
export const StyledComprasCategorias = styled.div`
    .categorias h3 {
        font-size: 22px; /**/
        font-weight: 700;
        color: ${({ theme }) => theme.colors.orange};
        margin-bottom: 16px;
    }

    .container-categorias {
        display: flex;
        gap: 48px;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
    }
    .card-categoria, .ver-categorias {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card-categoria a, .ver-categorias a {
        width: 220px;
        height: 140px;
    }
    .card-categoria a {
        border-radius: 20px;
        border: 6px solid ${({ theme }) => theme.colors.orange};
        overflow: hidden;
    }
    .card-categoria img {
        width: 220px;
        transition: 0.175s linear;
    }
    .card-categoria a img:hover {
        opacity: 80%;
        scale: 120%;
        transition: 0.175s linear;
    }

    .ver-categorias a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ver-categorias i {
        font-size: 140px;
        color: ${({ theme }) => theme.colors.orange};
        transition: 0.175s linear;
    }
    .ver-categorias a i:hover {
        opacity: 80%;
        scale: 110%;
        transition: 0.15s linear;
    }
`;

// ComprasProdutos
export const StyledComprasProdutos = styled.div`
    .produtos {
        margin-top: 60px;
    }

    .section-header p {
        margin-top: 20px;
        font-size: 20px;
    }

    .container-produtos {
        padding: 80px 62px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 50px;
    }

    .card-produto {
        cursor: pointer;
        width: 180px;
        height: 220px;
        border-radius: 4px;
        padding: 20px 0;
        box-shadow: ${({ theme }) => theme.shadows.cardShadow};
        display: flex;
        flex-direction: column;
        align-items: center;
        
        transition: 0.2s linear;
    }
    .card-produto:hover {
        scale: 105%;
        transition: 0.2s linear;
    }

    .img-produto img {
        width: 115px;
        height: 80px;
        border-radius: 2px;
    }
    .nome-produto h3, .preco-produto {
        font-family: 'Outfit', sans-serif;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        margin-top: 6px;
        max-width: 115px;
        white-space: nowrap; /* Impede o texto de quebrar em várias linhas */
        overflow: hidden; /* Esconde o texto que ultrapassar a largura */
        text-overflow: ellipsis; /* Adiciona reticências quando o texto for cortado */
    }
    .produtor-produto h4 {
        font-family: 'Outfit', sans-serif;
        font-size: 10px;
        font-weight: 500;
        color: #333;
        text-align: center;
        margin-top: 6px;
        max-width: 105px;
        white-space: nowrap; /* Impede o texto de quebrar em várias linhas */
        overflow: hidden; /* Esconde o texto que ultrapassar a largura */
        text-overflow: ellipsis; /* Adiciona reticências quando o texto for cortado */
    }
    .preco-produto {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.colors.orange};
        margin-top: 24px;
        padding: 4px 12px;
        border: 2px solid ${({ theme }) => theme.colors.orange};
        border-radius: 4px;
        transition: 0.15s linear;
    }
    .preco-produto:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.orange};
        transition: 0.15s linear;
    }
    .preco-produto i {
        font-size: 17px;
        margin-right: 5px;
    }
`;

// ComprasProdutores
export const StyledComprasProdutores = styled.div`
    // PRODUTORES

    // Seção
    .produtores {
        margin-top: 60px;
    }
    
    /*Container Produtores*/
    .container-produtores {
        width: 100%;
        padding: 28px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /*Divisor de colunas*/
    .column-divider {
        width: 1px;
        height: 320px;
        background-color: #999999;
        margin: 24px 12px;
        flex-shrink: 0; /*Impede a compressão do elemento*/
    }

    .coluna-produtor {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    /*Card Produtor*/
    .card-produtor {
        cursor: pointer;
        width: 300px;
        display: flex;
        align-items: center;
        gap: 24px;
        margin: 28px 12px;
    }
    .card-produtor:hover {
        opacity: 80%;
    }
    .img-produtor {
        width: 105px;
        border-radius: 50%;
        border: 5px solid ${({ theme }) => theme.colors.orange};
    }
    .texto-produtor {
        width: 175px;
    }
    .texto-produtor h3 {
        font-size: 24px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.orange};
    }
    .texto-produtor h3, .texto-produtor p, .texto-produtor .stars i {
        max-width: 175px;
        white-space: nowrap; /* Impede o texto de quebrar em várias linhas */
        overflow: hidden; /* Esconde o texto que ultrapassar a largura */
        text-overflow: ellipsis; /* Adiciona reticências quando o texto for cortado */
    }
    .texto-produtor p, .texto-produtor .stars i {
        font-size: 16px;
    }
    .stars i {
        color: ${({ theme }) => theme.colors.orange};
    }
`;


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

// PÁGINA LOGIN
export const StyledLogin = styled.div`
    .login {
        background: #ffdab8;
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    header {
        background: white;
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 1000;
        box-shadow: ${({ theme }) => theme.shadows.navShadow};

    }
    
    header img {
        width: 54px;
        height: 54px;
    }

    .logo-text {
        color: #ff7a00;
        font-size: 16px;
        font-weight: bold;
    }

    .container {
        height: 100vh;
        width: 100%;
    }

    .card {
        width: 500px;
        // height: 450px;
        border-radius: 36px;
        padding: 12px 30px;
        margin: 0;
        top: 50%;
        transform: translateY(-60%);
        
    }

    .container-login{
        font-size: 24px;
        font-weight: bold;
    }

    .bg {
        color: #ff7a00;
    }

    label {
        font-size: 14px;
    }
    input {
        font-size: 14px;
    }

    .btn {
        background-color: #ff7a00;
        border: none;
        color: white;      
        border-radius: 50px;
    }
    .login-btn {
        font-size: 14px;
        width: auto;
        padding: 10px 20px;
    }
    .container-bg{
        color: gray;
        font-size: 12px;
    }
    .forgot-pw {
        font-size: 10px;
    }
    .register-text {
        font-size: 12px;
    }
    .input-color {
        background-color: #D9D9D9 ;
    }
`;


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

// PÁGINA REGISTRO
export const StyledRegistro = styled.div`
    header {
        background: white;
        height: 90px;
    }

    .header-title {
        color: #ff7a00;
        font-size: 30px;
        font-weight: bold;
    }

    .registro {
        background: #ffdab8;
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    .container {
        height: calc(100vh - 90px);
        width: 100vw;
    }

    .card {
        width: 626px;
        height: 608px;
        border-radius: 36px
    }

    .container-login {
        font-weight: bold;
    }

    .bg {
        color: #ff7a00;
    }

    .btn {
        background-color: #ff7a00;
        border: none;
        color: white;
    }

    .containe-bg {
        color: black;
        font-size: small;
    }

    .input-color {
        background-color: #D9D9D9;
    }

    .container-perfil img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .container-cadastro {
        font-weight: bold;
        font-size: 20px;
    }

    .container-text {
        font-size: medium;
    }
`;


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

// PÁGINA CADASTRO
export const StyledCadastro = styled.div`
    header {
        background: white;
        height: 90px;
    }

    .header-title {
        color: #ff7a00;
        font-size: 30px;
        font-weight: bold;
    }

    .cadastro {
        background: #ffdab8;
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    .container {
        height: calc(100vh - 90px);
        width: 100vw;
    }

    .card {
        /* display: flex;
    justify-items: center; */
        height: 608px;
        border-radius: 36px
    }

    .container-login {
        font-weight: bold;
        color: #ff7a00;
    }

    .bg {
        color: #ff7a00;
    }

    .btn {
        background-color: #ff7a00;
        border: none;
        color: white;
    }

    .form-label {
        color: #ff7a00;
        font-weight: bold;
    }

    .containe-bg {
        color: gray;
        font-size: large;
        font-weight: bold;
    }

    .input-color {
        background-color: #D9D9D9;
    }
`;



// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

// LOGO NAV
export const StyledLogoNav = styled.div`
    // Navbar
    nav {
        width: 100%;
        padding: 18px 16px;
        position: fixed;
        top: 0;
        right: 0;
        background-color: ${({ theme }) => theme.colors.white};
        display: flex;
        justify-content: center;
        align-items: center;
        // z-index: 1000;
        box-shadow: ${({ theme }) => theme.shadows.navShadow};
    }

    // Logo
    .nav-logo .logo-img {
        width: 48px;
    }
    .nav-logo .logo-text {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.orange};
        font-family: 'Outfit', sans-serif;
        font-weight: 700;
        margin: 0;
    }
`;