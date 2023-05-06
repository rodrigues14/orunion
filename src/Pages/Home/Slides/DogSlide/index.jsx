import React from 'react'
import { DogSlideStyled, ButtonAjudeAqui } from './DogSlide.style'
import dogImage from '../../../../assets/dog.svg';
import DonationGoalStyled from '../../../../components/DonationGoal';

export default function DogSlide() {
  return (
    <DogSlideStyled>
      <div>
        <span className='cause'>animais:</span>
        <h1>Ajude  cachorros a <span>sobreviver</span></h1>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper venenatis semper.
          Vestibulum antve ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        </p>
        
        <DonationGoalStyled amountCollected="9700.00" amountRequired="10000.00" />

        <ButtonAjudeAqui href="">AJUDE AQUI</ButtonAjudeAqui>
      </div>
      <div>
        <img src={dogImage} alt="Ilustração de um cachorro triste" />
      </div>
    </DogSlideStyled>
  )
}
