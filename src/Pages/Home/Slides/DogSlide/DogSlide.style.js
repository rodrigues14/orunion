import styled from "styled-components";
import { blue } from "../../../../components/UI/variables";

export const DogSlideStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  ///padding: 0px 100px;
  .cause {
    font-size: 16px;
    margin-bottom: 6px;
    font-weight: 300;
  }
  h1 {
    font-weight: 400;
    font-size: 36px;
    margin-bottom: 25px;
    span {
      color: ${blue};
      font-weight: 700;
    }
  }
  .description {
    max-width: 500px;
    margin-bottom: 80px;
  }
`;

export const ButtonAjudeAqui = styled.a`
  text-decoration: none;
  font-weight: 700;
  background-color: ${blue};
  color: #fff;
  padding: 10px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 44px;
`;
