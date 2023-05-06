import styled from "styled-components";

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 225px;
    padding: 20px 20px;
    margin-inline: auto;
    img {
        width: 100px;
        height: 100px;
    }
    div {
        text-align: center;
        h2 {
            font-weight: 400;
            margin-bottom: 10px;
        }
        p {
            font-weight: 300;
        }
    }
`;