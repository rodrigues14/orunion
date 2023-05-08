import styled from "styled-components";
import { blue, textDark } from "../../../../components/UI/variables";

export const CheckboxStyled = styled.div`
    color: ${textDark};
    width: 190px;
    h3 {
        font-weight: 700;
        font-size: 12px;
        padding-top: 15px;
    }
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 0.5px solid #A5A5A5;
        margin-top: 5px;
        label {
            font-weight: 400;
            font-size: 12px;
        }
        input {
            appearance: none;
            width: 20px;
            height: 20px;
            border: 0.7px solid rgba(0, 0, 0, 0.68);
            border-radius: 3px;
            cursor: pointer;
            &:checked {
                background-color: ${blue};
                border: none;
            }
        }
    }
`;
