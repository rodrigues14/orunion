import React from 'react'
import { ButtonAjudeAqui, SlideStyled } from './Slide.style';
import DonationGoalStyled from '../../components/DonationGoal';

export default function Slide({ 
    cause, title, description, amountCollected, amountRequired, srcImage, altImage 
}) {

    /*
        Aqui eu pego o titulo e separo a ultima 
        palavra da frase para que ela seja de outra cor 
    */
    const titleWords = title.split(" ");
    const lastWord = titleWords.pop();
    const beginningOfTitle = titleWords.join(" ");

  return (
    <SlideStyled>
      <div>
        <span className='cause'>{cause}:</span>
        <h1>{beginningOfTitle} <span>{lastWord}</span></h1>
        <p className='description'>
          {description}
        </p>
        
        <DonationGoalStyled amountCollected={amountCollected} amountRequired={amountRequired} />

        <ButtonAjudeAqui href="">AJUDE AQUI</ButtonAjudeAqui>
      </div>
      <div>
        <img src={srcImage} alt={altImage} />
      </div>
    </SlideStyled>
  )
}
