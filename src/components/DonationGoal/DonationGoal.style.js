import styled from "styled-components";
import { textLight } from "../UI/variables";

export const DonationGoalStyled = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
  background-color: #fff;
  height: 40px;
  border-radius: 20px;
  box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.25);
  .amountCollected,
  .amountRequired {
    padding: 0 5px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
  .amountCollected {
    background: linear-gradient(269.87deg, #1F81E1 0.11%, #470E9C 102.6%);
    border-radius: 20px;
    color: ${textLight};
  }
  .amountRequired {
    flex-grow: 1;
    border-radius: 0 20px 20px 0;
  }
`;