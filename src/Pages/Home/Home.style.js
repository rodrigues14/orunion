import styled from "styled-components";
import { blue } from "../../components/UI/variables";

export const CardsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(225px, auto));
    gap: 20px 10px;
    margin-inline: auto;
`;

export const SlideStyled = styled.div`
    .swiper-button-prev,
    .swiper-button-next {
        color: ${blue};
        display: none !important;
    }
    .swiper-pagination-bullet-active {
        background-color: ${blue};
    }
`;