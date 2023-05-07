import styled from "styled-components";
import { textLight } from "../UI/variables";

export const DonationGoalStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #fff;
  border-radius: 30px;
  padding: 15px;
  position: relative;
  margin-bottom: 40px;
  box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  p {
    overflow-x: hidden;
  }
  div {
    position: absolute;
    height: 100%;
    background: linear-gradient(269.87deg, #1F81E1 0.11%, #470E9C 102.6%);
    border-radius: 30px;
    left: 0;
    display: flex;
    padding-left: 15px;
    justify-content: flex-start;
    align-items: center;
    color: ${textLight};
  }
`;