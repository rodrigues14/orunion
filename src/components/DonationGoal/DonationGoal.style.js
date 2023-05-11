import styled from "styled-components";
import { textLight } from "../UI/variables";

export const DonationGoalStyled = styled.div`
  background: ${textLight};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 30px;
  padding: 15px;
  position: relative;
  box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  p {
    overflow-x: hidden;
    z-index: 2;
  }
  div {
    color: ${textLight};
    position: absolute;
    height: 100%;
    border-radius: 30px;
    left: 0;
    display: flex;
    padding-left: 15px;
    justify-content: flex-start;
    align-items: center;
    animation: progress-animation 1.5s ease-in-out infinite;
  }
  @keyframes progress-animation {
    0% {
      width: 40%;
    }
    50% {
      width: 41%;
    }
    100% {
      width: 40%;
    }

`;