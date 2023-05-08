import styled from "styled-components";
import { textDark, textLight } from "../UI/variables";

export const NftCardStyled = styled.div`
    width: 100%;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    background-color: aqua;
    border-radius: 50px;
    background: ${textLight};
    box-shadow: -1px 4px 24px rgba(0, 0, 0, 0.25);
    height: 222px;
    > div {
        padding: 25px 15px 25px 30px;
        flex-grow: 1;
        position: relative;
        > h3 {
            color: ${textDark};
            font-weight: 500;
            font-size: 14px;
            margin-bottom: 13px;
        }
        > p {
            color: ${textDark};
            max-height: 50px;
            font-weight: 200;
            font-size: 12px;
            margin-bottom: 35px;
            overflow-y: auto;
        }
        .progress {
            width: 80%;
            position: absolute;
            bottom: 25px; 
        }
    }
    img {
        border-radius: 0px 50px 50px 0px;
    }
`;