import styled from "styled-components";
import { blue, textDark } from '../../../../components/UI/variables';

export const FinishedStyled = styled.div`
  color: ${textDark};
  display: flex;
  justify-content: center;
  gap: 30px;
  max-width: 280px;
  height: 50px;
  align-items: center;
  border-radius: 20px;
  border: .5px solid #8A8A8A;
  padding: 0 25px;
  p {
    font-weight: 300;
    font-size: 12px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 8px;
    label {
      font-weight: 500;
      font-size: 12px;
      cursor: pointer;
    }
    input[type=radio] {
      appearance: none;
      border-radius: 50%;
      height: 18px;
      width: 18px;
      border: 1px solid #8A8A8A;
      cursor: pointer;
    }
    input[type=radio]:checked {
      border: none;
      background: ${blue};
    }
  }
`;