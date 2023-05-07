import { createGlobalStyle } from "styled-components";
import { bgLight } from "../components/UI/variables";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    }
    body {
        background-color: ${bgLight};
    }
`;