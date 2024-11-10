import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    // Fonts
    // @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

    // Resets
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Outfit', sans-serif;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
`

export default GlobalStyle;