import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Helvetica, sans-serif;
    }

    input, button { 
        border: none;
    }
`;

export default GlobalStyle;
