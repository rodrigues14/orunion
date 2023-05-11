import React from 'react'
import { ButtonAjudeAqui, SlideStyled } from './Slide.style';
import DonationGoalStyled from '../../components/DonationGoal';

export default function Slide({ 
    typeCause, title, description, amountCollected, amountRequired, srcImage, altImage 
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
        <span className='typeCause'>{typeCause.name}:</span>
        <h1>{beginningOfTitle} <span>{lastWord}</span></h1>
        <p className='description'>
          {description}
        </p>
        
        <DonationGoalStyled 
          amountCollected={amountCollected} 
          amountRequired={amountRequired} 
          margin={'0 0 40px 0'}
        />

        <ButtonAjudeAqui href="">AJUDE AQUI</ButtonAjudeAqui>
      </div>
      
      <div className='container-img-slide'>
        {/*Os vetores serão um padrão para cada slide, por isso não esará no .json*/}
        <div className='vector-default'><div className='img-vector'></div></div>
        <div className='vector-default'><div className='img-vector'></div></div>
        <div><img src={srcImage} alt={altImage} /></div>
      </div>
      
    </SlideStyled>
  )
}
