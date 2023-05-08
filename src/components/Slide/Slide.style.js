import styled from "styled-components";
import { blue, textDark, textLight } from "../UI/variables";

export const SlideStyled = styled.section`
display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  .cause {
    color: ${textDark};
    font-size: 16px;
    margin-bottom: 6px;
    font-weight: 300;
  }
  h1 {
    color:  ${textDark};
    font-weight: 400;
    font-size: 36px;
    margin-bottom: 25px;
    span {
      color: ${blue};
      font-weight: 700;
    }
  }
  .description {
    color:  ${textDark};
    max-width: 500px;
    margin-bottom: 80px;
  }
`;

export const ButtonAjudeAqui = styled.a`
  text-decoration: none;
  font-weight: 700;
  background-color: ${blue};
  color: ${textLight};
  padding: 10px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 44px;
`;