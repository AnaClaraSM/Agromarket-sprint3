import styled from 'styled-components'

export const StyledHomeHeader = styled.div`
    /*HEADER*/
    header {
        width: 100%;
        height: 100vh;
    }
`

export const StyledLogo = styled.div`
    /*HEADER*/
    header {
        width: 100%;
        height: 100vh;
    }
`

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
        text-transform: uppercase;
        text-align: center;
        border-radius: 48px;
        font-family: 'Outfit', sans-serif;
    }
    .nav-btn:hover {
        opacity: 80%;
    }
`