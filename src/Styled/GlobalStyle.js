import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import cafe24 from "./fonts/Cafe24Oneprettynight.ttf";
import kbiz from "./fonts/KBIZM.ttf";
import oskar from "./fonts/OskarOneRegular.otf";

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
    @font-face{
        font-family: "카페24 고운밤";
        font-weight:bolder;
        src: url(${cafe24}) format("truetype");
    }
    @font-face{
        font-family: "kbiz";
        src: url(${kbiz}) format("truetype");
    }
    @font-face{
        font-family: "oskarRegular";
        src: url(${oskar}) format("otf");
    }
`;
