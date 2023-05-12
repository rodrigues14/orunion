import styled from "styled-components";
import { bgLight, blue, maxWidthContainer, textDark, textLight } from '../UI/variables';

export const FooterStyled = styled.footer`
    background-color: ${textDark};
    margin-top: 200px;
    > div {
        color: ${textLight};
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        max-width: ${maxWidthContainer};
        padding: 30px 48px;
        margin-inline: auto;
    }
`;

export const LogoSection = styled.div`
    > img {
        width: 114px;
        margin-bottom: 10px;
    }
    p {
        max-width: 160px;
        font-size: 11px;
        margin-bottom: 15px;
    }
    div {
        display: flex;
        flex-direction: row;
        gap: 25px;
        img {
            &:hover {
                // hover dos links das redes aqui
            }
        }
    }
`;

export const OurLinks = styled.div`
    display: flex;
    gap: 50px;
    div {
        display: flex;
        flex-direction: column;
        h4 {
            font-weight: 800;
            font-size: 24px;
            margin-bottom: 12px;
        }
        a {
            padding: 4px 0;
            color: ${textLight};
            margin-bottom: 4px;
            font-weight: 300;
            font-size: 13px;
            &:hover {
                // edite o hover dos links aqui
            }
        }
    }
    .seInscreva {
        width: 230px;
        div {
            display: flex;
            flex-direction: row;
            border-radius: 50px;
            height: 36px;
            background-color: ${bgLight};
            input {
                width: 100%;
                border-radius: 50px 0 0 50px;
                height: 100%;
                background: transparent;
                border: none;
                padding: 0 10px;
                outline: none;
                &:hover {
                    // caso for editar o hover do input, edite aqui, ou exclua esssa parte
                }
            }
            button {
                min-width: 42px;
                border-radius: 50px;
                height: 100%;
                background: ${blue};
                border: none;
                cursor: pointer;
                img {
                    display: flex;
                    margin-inline: auto;
                }
                &:hover {
                    // edite o hover do botão aqui
                }
            }
        }
    }
`;
