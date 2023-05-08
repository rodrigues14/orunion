import { createGlobalStyle } from "styled-components";
import { bgLight, textDark } from "../components/UI/variables";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    }
    body {
        background-color: ${bgLight};
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: ${bgLight};
            border: 0.5px solid rgba(0, 0, 0, 0.4);
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
            background: ${textDark};
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.9);
            transition: .3s;
        }
    }
`;