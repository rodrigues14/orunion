import styled from "styled-components";
import { bgLight, blue, purple } from "../../components/UI/variables";

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

export const NftsContainer = styled.section`
    margin-top: 100px;
    .filters {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 30px;
        margin-bottom: 40px;
    }
    .content {
        display: flex;
        gap: 20px;
    }
`;

export const CardsNfts = styled.div`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, auto));
    gap: 20px;
    max-height: 530px;
    overflow-y: auto;
    padding: 15px;

    ::-webkit-scrollbar {
        width: 15px;
    }

    ::-webkit-scrollbar-track {
        background: ${bgLight};
        border: 0.5px solid rgba(0, 0, 0, 0.4);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${purple};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${purple + "f0"};
        transition: .3s;
    }
`;