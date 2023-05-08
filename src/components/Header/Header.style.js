import styled from 'styled-components';
import { textDark } from '../UI/variables';

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 0px;
`;

export const NavStyled = styled.nav`
    display: flex;
    gap: 30px;
    align-items: center;
`;

export const List = styled.ul`
    display: flex;
    gap: 25px;
    li {
        list-style: none;
        a {
            color: ${textDark};
            text-decoration: none;
            padding: 10px;
        }
    }
`;

export const ButtonWallet = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    background-color: #fff;
    border: none;
    box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.25);
    border-radius: 39px;
    font-weight: 600;
    font-size: 15px;
`;