import styled from 'styled-components';
import { textDark } from '../../../../components/UI/variables';

export const SelectStyled = styled.div`
    width: 250px;
    height: 50px;
    border: .5px solid #8A8A8A;
    border-radius: 20px;
    select {
        color: ${textDark};
        border: none;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: transparent;
        padding: 0 20px;
        font-weight: 500;
        font-size: 14px;
    }
`;
