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
    .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    }
`;