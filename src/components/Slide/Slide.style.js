import styled from "styled-components";
import { blue, textDark, textLight } from "../UI/variables";

export const SlideStyled = styled.section`
display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  .typeCause {
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
  .container-img-slide{
    width: 60%;
    position: relative;
    height: 486px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vector-default{
    position: absolute;
    height: 490px;
    width: 490px;
    right: 42px;
  }
  .vector-default .img-vector{
    position: relative;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
  }
  .vector-default:nth-child(1) .img-vector{
    background-image: url("/assets/vectors/Vector2.svg");
    z-index: 1;
  }
  .vector-default:nth-child(2) .img-vector{
    background-image: url("/assets/vectors/Vector1.svg");
    z-index: 2;
    top: -39px;
    left: -44px;
  }
  .container-img-slide div:nth-child(3){
    position: absolute;
    top: 15px;
    right: 83px;
    z-index: 3;
  }
  .container-img-slide div:nth-child(3) img{
    width: 445px;
  }

`;

export const ButtonAjudeAqui = styled.a`
  font-weight: 700;
  background-color: ${blue};
  color: ${textLight};
  padding: 10px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 44px;
  transition: 1s;
  &:hover {
   background-color: rgb(26 111 194);
  }
`;