import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    input,
    button{
        &:focus,
        &:active{outline:none}
    }
`;
